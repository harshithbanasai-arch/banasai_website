import type { PortableTextBlock } from "@portabletext/react";

// Blog posts live in the Banas AI Sanity project (Studio: blog-studio),
// which holds only Banas posts, so no per-site filter is needed.
// Reads go through Sanity's public CDN API, so no token is needed and the
// site rebuilds nothing when a post is published: pages revalidate below.
// The project ID is public (it is in every API URL), so it lives here rather than
// in a Vercel env var; NEXT_PUBLIC_SANITY_PROJECT_ID still overrides it.
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "m56ychw7";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2025-02-19";

/** Seconds a cached blog page is served before Next.js re-checks Sanity. */
export const BLOG_REVALIDATE = 300;

export type PostImage = { url: string; alt?: string; width?: number; height?: number };

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  cover?: PostImage;
  author?: { name: string; role?: string };
};

export type Post = PostSummary & {
  seoTitle?: string;
  seoDescription?: string;
  body: PortableTextBlock[];
};

const SUMMARY_FIELDS = `
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "updatedAt": _updatedAt,
  "cover": coverImage{alt, "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height},
  "author": author->{name, role}
`;

async function query<T>(groq: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!PROJECT_ID) return null;
  const url = new URL(`https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`);
  url.searchParams.set("query", groq);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(`$${key}`, JSON.stringify(value));
  try {
    const res = await fetch(url, { next: { revalidate: BLOG_REVALIDATE } });
    if (!res.ok) return null;
    return ((await res.json()) as { result: T }).result;
  } catch {
    // Sanity unreachable (e.g. during an offline build): render as if empty.
    return null;
  }
}

// Only published documents are visible to unauthenticated reads, and posts
// dated in the future stay hidden until their publish date.
const PUBLISHED = `_type == "post" && defined(slug.current) && publishedAt <= now()`;

export async function getPosts(): Promise<PostSummary[]> {
  return (await query<PostSummary[]>(`*[${PUBLISHED}] | order(publishedAt desc){${SUMMARY_FIELDS}}`)) ?? [];
}

export async function getPost(slug: string): Promise<Post | null> {
  return query<Post>(
    `*[${PUBLISHED} && slug.current == $slug][0]{
      ${SUMMARY_FIELDS},
      seoTitle,
      seoDescription,
      body[]{..., _type == "image" => {..., "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height}}
    }`,
    { slug },
  );
}

/** Sanity image CDN URL resized for display. */
export function imageUrl(url: string, width: number): string {
  return `${url}?w=${width}&fit=max&auto=format`;
}

/** Turns a YouTube, Vimeo or Loom share link into an embeddable player URL. */
export function videoEmbedUrl(link: string): string | null {
  try {
    const u = new URL(link);
    if (u.hostname.includes("youtu.be")) return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v") ?? u.pathname.split("/").pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (u.hostname.includes("vimeo.com")) return `https://player.vimeo.com/video/${u.pathname.split("/").pop()}`;
    if (u.hostname.includes("loom.com")) return `https://www.loom.com/embed/${u.pathname.split("/").pop()}`;
  } catch {
    /* fall through */
  }
  return null;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" });
}

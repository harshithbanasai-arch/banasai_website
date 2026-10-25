import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "components/Header";
import Footer from "components/Footer";
import PostBody from "components/blog/PostBody";
import { formatDate, getPost, getPosts, imageUrl } from "components/blog/api";
import { WHATSAPP_COMMUNITY_URL } from "components/community";

// Must be a literal for Next.js; keep in step with BLOG_REVALIDATE.
export const revalidate = 300;

const SITE_URL = "https://www.banas-ai.com";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  const description = post.seoDescription ?? post.excerpt;
  const image = post.cover?.url ? imageUrl(post.cover.url, 1200) : undefined;
  return {
    title: { absolute: post.seoTitle ?? `${post.title} | Banas AI` },
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: image ? [{ url: image, alt: post.cover?.alt }] : undefined,
    },
    twitter: { card: image ? "summary_large_image" : "summary", title: post.title, description, images: image ? [image] : undefined },
  };
}

export default async function PostPage({ params }: Params) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: post.cover?.url ? imageUrl(post.cover.url, 1200) : undefined,
    author: post.author ? { "@type": "Person", name: post.author.name } : { "@type": "Organization", name: "Banas AI" },
    publisher: { "@type": "Organization", name: "Banas AI", url: SITE_URL },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="section-padding bg-background">
        <article className="mx-auto max-w-3xl px-6">
          <Link href="/blog" className="text-sm text-muted-text hover:text-primary">
            ← All posts
          </Link>
          <p className="mt-8 font-dm-mono text-xs uppercase tracking-wider text-muted-text">
            {formatDate(post.publishedAt)}
            {post.author && ` · ${post.author.name}`}
          </p>
          <h1 className="mt-3 font-sora text-3xl font-bold leading-tight text-primary md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-text">{post.excerpt}</p>
          {post.cover?.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl(post.cover.url, 1440)}
              alt={post.cover.alt ?? ""}
              width={post.cover.width}
              height={post.cover.height}
              className="mt-10 h-auto w-full rounded-card"
            />
          )}
          <div className="mt-6">
            <PostBody value={post.body ?? []} />
          </div>
          <div className="card mt-16">
            <p className="font-sora text-lg font-semibold text-primary">Join the Banas growers&apos; community</p>
            <p className="mt-2 text-muted-text">
              Market updates, crop care tips and scheme news, shared free on WhatsApp.
            </p>
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-block"
            >
              Join on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

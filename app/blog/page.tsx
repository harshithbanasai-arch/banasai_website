import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import { formatDate, getPosts, imageUrl } from "components/blog/api";

// Must be a literal for Next.js; keep in step with BLOG_REVALIDATE.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Market updates, crop care tips and farming news for growers, from the Banas AI community.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="label-text">Blog</p>
          <h1 className="mt-3 max-w-3xl font-sora text-4xl font-bold text-primary md:text-5xl">Notes from the field</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-text">
            Market updates, crop care tips and farming news for growers, shared by the Banas community.
          </p>

          {posts.length === 0 ? (
            <p className="mt-16 text-muted-text">The first post is on its way.</p>
          ) : (
            <ul className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col p-6 transition-shadow hover:shadow-md md:p-8">
                    {post.cover?.url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imageUrl(post.cover.url, 800)}
                        alt={post.cover.alt ?? ""}
                        loading="lazy"
                        className="mb-5 aspect-[16/10] w-full rounded-card object-cover"
                      />
                    )}
                    <p className="font-dm-mono text-xs uppercase tracking-wider text-muted-text">{formatDate(post.publishedAt)}</p>
                    <h2 className="mt-2 font-sora text-xl font-semibold text-primary group-hover:text-green-secondary">
                      {post.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-text">{post.excerpt}</p>
                    <p className="mt-auto pt-6 text-sm font-medium text-primary group-hover:text-green-secondary">Read the post →</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

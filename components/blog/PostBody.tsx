import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import { imageUrl, videoEmbedUrl } from "components/blog/api";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-5 text-[17px] leading-[1.75] text-body-text">{children}</p>,
    h2: ({ children }) => <h2 className="mt-12 mb-2 font-sora text-2xl font-semibold text-primary">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 font-sora text-xl font-semibold text-primary">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-green-accent pl-5 text-lg italic text-muted-text">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-body-text">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-body-text">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-primary underline decoration-green-accent underline-offset-4 hover:text-green-secondary"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => <code className="rounded bg-surface px-1.5 py-0.5 font-dm-mono text-[0.9em]">{children}</code>,
  },
  types: {
    image: ({ value }) => {
      const img = value as { url?: string; alt?: string; caption?: string; width?: number; height?: number };
      if (!img.url) return null;
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl(img.url, 1400)}
            alt={img.alt ?? ""}
            width={img.width}
            height={img.height}
            loading="lazy"
            className="h-auto w-full rounded-card border border-border"
          />
          {img.caption && <figcaption className="mt-3 text-sm text-muted-text">{img.caption}</figcaption>}
        </figure>
      );
    },
    videoEmbed: ({ value }) => {
      const v = value as { url?: string; caption?: string };
      const src = v.url ? videoEmbedUrl(v.url) : null;
      if (!src) return null;
      return (
        <figure className="my-10">
          <div className="relative aspect-video overflow-hidden rounded-card border border-border">
            <iframe
              src={src}
              title={v.caption ?? "Video"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          {v.caption && <figcaption className="mt-3 text-sm text-muted-text">{v.caption}</figcaption>}
        </figure>
      );
    },
    codeBlock: ({ value }) => {
      const c = value as { code?: string; language?: string };
      if (!c.code) return null;
      return (
        <pre className="my-8 overflow-x-auto rounded-card bg-primary p-5 text-sm leading-relaxed text-white">
          <code className="font-dm-mono" data-language={c.language}>
            {c.code}
          </code>
        </pre>
      );
    },
  },
};

export default function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}

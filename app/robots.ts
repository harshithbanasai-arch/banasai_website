import type { MetadataRoute } from "next";

// Search and AI answer engines are allowed explicitly so a host-level default
// never silently blocks them.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://www.banas-ai.com/sitemap.xml",
    host: "https://www.banas-ai.com",
  };
}

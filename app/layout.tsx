import type { Metadata, Viewport } from "next";
import "styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

// Production origin. Update if the site is served from a different domain.
const SITE_URL = "https://www.banas-ai.com";

export const viewport: Viewport = {
  themeColor: "#1B2A6B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Banas AI: free arecanut intelligence and physical AI",
    template: "%s | Banas AI",
  },
  description:
    "Free arecanut market forecasts with Banas Intelligence, plus physical AI for farms and produce lines: grading, dehusking and a farm robot.",
  applicationName: "Banas AI",
  authors: [{ name: "Banas AI" }],
  creator: "Banas AI",
  publisher: "Banas AI",
  keywords: [
    "Banas AI",
    "Banas Intelligence",
    "arecanut price forecast",
    "free arecanut market intelligence",
    "AI produce grading",
    "mushroom grading",
    "arecanut grading",
    "arecanut dehusking machine",
    "farm robot",
    "physical AI agriculture",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Banas AI",
    title: "Banas AI: free arecanut intelligence and physical AI",
    description:
      "Banas Intelligence is free for the arecanut community. Our physical AI ecosystem starts with grading, then dehusking and a farm manager robot. Join the waitlist.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banas AI: Banas Intelligence and physical AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banas AI: free arecanut intelligence and physical AI",
    description:
      "Free arecanut forecasts, plus physical AI for grading, dehusking and farm work.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/banas_logo_no_text.jpg", type: "image/jpeg" }],
    shortcut: "/banas_logo_no_text.jpg",
    apple: "/banas_logo_no_text.jpg",
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Banas AI",
  url: SITE_URL,
  logo: `${SITE_URL}/banas_logo.jpg`,
  description:
    "Banas AI runs Banas Intelligence, a free agentic forecasting tool for the arecanut community, and is building a physical AI ecosystem for farms and produce lines: Banas Grading (pilots with growers, packers and processors in Ireland, the UK and India), Banas Dehusking for arecanut processors, and the Banas Farm Manager robot.",
  email: "contact@banas-ai.com",
  knowsAbout: [
    "Arecanut market forecasting",
    "Produce grading",
    "Arecanut dehusking",
    "Agricultural robotics",
    "Physical AI",
  ],
  areaServed: ["IE", "GB", "IN"],
  sameAs: ["https://www.linkedin.com/company/banasai/", "https://x.com/banas_ai"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-body-text min-h-screen font-inter">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

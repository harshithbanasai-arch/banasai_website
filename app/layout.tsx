import type { Metadata, Viewport } from "next";
import "styles/globals.css";

// Production origin. Update if the site is served from a different domain.
const SITE_URL = "https://www.banas-ai.com";

export const viewport: Viewport = {
  themeColor: "#1B2A6B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Banas AI — Banas Intelligence & Physical AI for the Real World",
    template: "%s | Banas AI",
  },
  description:
    "Banas AI builds Banas Intelligence — agentic forecasting that integrates many real-world signals into decisions — plus Physical AI ground-truth data, trained models and devices.",
  applicationName: "Banas AI",
  authors: [{ name: "Banas AI" }],
  creator: "Banas AI",
  publisher: "Banas AI",
  keywords: [
    "Banas AI",
    "Banas Intelligence",
    "Physical AI",
    "agriculture intelligence",
    "agentic AI",
    "arecanut price forecasting",
    "commodity forecasting",
    "commodity market intelligence",
    "agricultural datasets",
    "ground-truth data",
    "AI for agriculture",
    "agritech India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Banas AI",
    title: "Banas AI — Banas Intelligence & Physical AI",
    description:
      "Agentic intelligence that forecasts the real world by reading many sources at once, starting with agriculture. Plus ground-truth data, models in training, and physical devices on the roadmap.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banas AI — Banas Intelligence & Physical AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banas AI — Banas Intelligence & Physical AI",
    description:
      "Agentic intelligence that forecasts the real world, starting with agriculture.",
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
    "Banas AI builds Banas Intelligence — agentic forecasting for agriculture and commodities — and Physical AI: ground-truth data, trained models, and physical devices.",
  email: "contact@banas-ai.com",
  knowsAbout: [
    "Agriculture Intelligence",
    "Arecanut Market Forecasting",
    "Physical AI",
    "Ground-Truth Data Collection",
  ],
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
      </body>
    </html>
  );
}

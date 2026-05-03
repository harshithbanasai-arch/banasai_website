import type { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Banas AI — Physical AI Data for Agriculture & Manufacturing",
  description: "Banas AI provides high-quality, ground-truth datasets from India's agriculture and manufacturing sectors — built for AI and robotics companies training physical world models.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/banas_logo_no_text.jpg" type="image/jpeg" />
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
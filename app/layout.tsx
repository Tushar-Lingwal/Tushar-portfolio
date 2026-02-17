import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Lingwal — AI/ML Engineer & LLM Researcher",
  description:
    "M.Tech in AI & ML (NIT Uttarakhand). Specializing in LLM research, model evaluation, computer vision, and ML pipeline engineering.",
  keywords: [
    "Tushar Lingwal",
    "AI Engineer",
    "ML Engineer",
    "LLM Researcher",
    "NIT Uttarakhand",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Portfolio",
  ],
  authors: [{ name: "Tushar Lingwal" }],
  creator: "Tushar Lingwal",
  metadataBase: new URL("https://tusharlingwal.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tusharlingwal.dev",
    title: "Tushar Lingwal — AI/ML Engineer & LLM Researcher",
    description:
      "M.Tech in AI & ML (NIT Uttarakhand). Specializing in LLM research, model evaluation, and ML systems.",
    siteName: "Tushar Lingwal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Lingwal — AI/ML Engineer & LLM Researcher",
    description:
      "M.Tech in AI & ML (NIT Uttarakhand). Specializing in LLM research and model evaluation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080C14] text-[#F1F5F9] font-sans antialiased noise">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

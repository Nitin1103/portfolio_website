import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitin Sharma — Software Engineer",
  description:
    "Software Engineer building reliable software, cloud systems, and AI-powered experiences.",
  keywords: [
    "Nitin Sharma",
    "Software Engineer",
    "Backend Developer",
    "Cloud Engineer",
    "AI Engineer",
    "FastAPI",
    "Python",
    "AWS",
    "TypeScript",
  ],
  authors: [{ name: "Nitin Sharma" }],
  openGraph: {
    title: "Nitin Sharma — Software Engineer",
    description:
      "Software Engineer building reliable software, cloud systems, and AI-powered experiences.",
    url: "https://nitin1103.github.io/portfolio_website/",
    siteName: "Nitin Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Sharma — Software Engineer",
    description:
      "Software Engineer building reliable software, cloud systems, and AI-powered experiences.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nitin Sharma",
  jobTitle: "Software Engineer",
  url: "https://nitin1103.github.io/portfolio_website/",
  sameAs: [
    "https://github.com/Nitin1103",
    "https://linkedin.com",
  ],
  knowsAbout: [
    "Software Engineering",
    "Backend Architecture",
    "Cloud Systems",
    "FastAPI",
    "Python",
    "AWS",
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased font-sans transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-3.5 focus:py-2 focus:bg-cyan-500 focus:text-black focus:text-xs focus:font-mono focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

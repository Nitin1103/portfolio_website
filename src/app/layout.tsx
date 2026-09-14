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
    url: "https://nitinsharma.dev",
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
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

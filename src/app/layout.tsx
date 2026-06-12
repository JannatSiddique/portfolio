import type { Metadata, Viewport } from "next";
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

const BASE_URL = "https://jannatsiddique.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jannat Siddique | Software Engineer",
    template: "%s | Jannat Siddique",
  },
  description:
    "Portfolio of Jannat Siddique — Associate Software Engineer specializing in React, TypeScript, Laravel, and scalable SaaS applications.",
  keywords: [
    "Jannat Siddique",
    "Software Engineer",
    "React",
    "TypeScript",
    "Laravel",
    "Next.js",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Jannat Siddique" }],
  openGraph: {
    title: "Jannat Siddique | Software Engineer",
    description:
      "Associate Software Engineer specializing in React, TypeScript, Laravel, and scalable SaaS applications.",
    url: BASE_URL,
    siteName: "Jannat Siddique Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannat Siddique | Software Engineer",
    description:
      "Associate Software Engineer specializing in React, TypeScript, Laravel, and scalable SaaS applications.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem("theme");
                const d = t === "dark" || (!t && matchMedia("(prefers-color-scheme:dark)").matches);
                document.documentElement.classList.toggle("dark", d);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

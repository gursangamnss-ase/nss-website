import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://netsquaresoftwares.com"),
  title: {
    default: "NetSquare Softwares | Digital Product & Creative Agency",
    template: "%s | NetSquare Softwares",
  },
  description:
    "NetSquare Softwares is a forward-thinking creative and digital agency crafting cutting-edge websites, brand identities, and high-performance digital experiences.",
  keywords: [
    "NetSquare Softwares",
    "Digital Agency",
    "Web Development",
    "UI/UX Design",
    "Next.js Development",
    "Brand Identity",
  ],
  authors: [{ name: "NetSquare Softwares" }],
  creator: "NetSquare Softwares",
  publisher: "NetSquare Softwares",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://netsquaresoftwares.com",
    siteName: "NetSquare Softwares",
    title: "NetSquare Softwares | Digital Product & Creative Agency",
    description:
      "Crafting impactful brands, digital products, and high-performance websites with precision strategy and modern design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetSquare Softwares | Digital Product & Creative Agency",
    description:
      "Crafting impactful brands, digital products, and high-performance websites with precision strategy and modern design.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=3" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
        <link
          rel="preload"
          as="image"
          href="/images/herovideo-poster.webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

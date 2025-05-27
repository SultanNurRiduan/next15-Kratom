import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import GlobalLoader from "@/components/elements/loader";
import AOSWrapper from "@/components/elements/AOSWrapper";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Borneo Royal Green | Premium Kratom from Borneo",
  description:
    "Shop high-quality, authentic kratom sourced directly from West Borneo, Indonesia. Trusted by kratom enthusiasts worldwide for purity and potency.",
  viewport:
    "width=device-width, user-scalable, initial-scale=1, maximum-scale=1, minimum-scale=1",
  icons: {
    icon: "/favicon.ico", // better fallback format for all platforms
    shortcut: "/favicon.ico",
    apple: "/logo.png", // optional, for iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Borneo Royal Green",
              url: "https://www.borneoroyalgreen.com",
              logo: "https://www.borneoroyalgreen.com/logo.png",
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="hvKIMAHVhEZSSbIXlEpUFG6-844a_iZTfNj6tHzfEFg"
        />
        {/* Manual favicon backup, in case metadata not picked up */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AOSWrapper />
        <Layout>
          {children}
          <Analytics />
        </Layout>
        <GlobalLoader />
      </body>
    </html>
  );
}

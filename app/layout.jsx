import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import GlobalLoader from "@/components/elements/loader";
import AOSWrapper from "@/components/elements/AOSWrapper";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Borneo Royal Green | Buy Premium Borneo Kratom",
  description:
    "Shop high-quality, authentic kratom sourced directly from West Borneo, Indonesia. Trusted by kratom enthusiasts worldwide for purity and potency.",
  viewport:
    "width=device-width, user-scalable, initial-scale=1, maximum-scale=1, minimum-scale=1",
    name : "google-site-verification",
    content : "hvKIMAHVhEZSSbIXlEpUFG6-844a_iZTfNj6tHzfEFg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AOSWrapper />
        <Layout>
          {" "}
          {children}
          <Analytics />
        </Layout>
        <GlobalLoader />
      </body>
    </html>
  );
}

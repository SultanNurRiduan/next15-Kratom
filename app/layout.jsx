import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import GlobalLoader from "@/components/elements/loader";
import AOSWrapper from "@/components/elements/AOSWrapper";

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
  description: "Shop high-quality, authentic kratom sourced directly from West Borneo, Indonesia. Trusted by kratom enthusiasts worldwide for purity and potency.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <AOSWrapper />
        <Layout> {children} </Layout>
        <GlobalLoader />
      </body>
    </html>
  );
}

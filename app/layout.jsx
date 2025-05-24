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
  title: "Borneo Royal Green",
  description: "Authentic Kratom from Borneo, West Kalimantan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper />
        <Layout> {children} </Layout>
        <GlobalLoader />
      </body>
    </html>
  );
}

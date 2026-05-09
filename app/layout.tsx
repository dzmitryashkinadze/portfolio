import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dzmitry Ashkinadze - Senior Data Scientist | Dr. Sc. ETH",
  description: "PhD in bioinformatics with 4+ years of industrial experience building ETL pipelines and scalable AI applications. Based in Basel, Switzerland.",
  keywords: [
    "Dzmitry Ashkinadze",
    "Data Scientist",
    "NLP Engineer",
    "GenAI",
    "Machine Learning",
    "ETL",
    "Bioinformatics",
    "Portfolio",
  ],
  authors: [{ name: "Dzmitry Ashkinadze" }],
  creator: "Dzmitry Ashkinadze",
  publisher: "Dzmitry Ashkinadze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashkinadze.org",
    title: "Dzmitry Ashkinadze - Senior Data Scientist",
    description: "PhD in bioinformatics with 4+ years experience building ETL pipelines and scalable AI applications.",
    siteName: "Dzmitry Ashkinadze Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzmitry Ashkinadze - Senior Data Scientist",
    description: "PhD in bioinformatics building ETL pipelines and scalable AI applications.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ashkinadze.org" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
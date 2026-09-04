import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";

import {ThemeProvider} from "@/components/providers/theme-provider";
import {portfolioData} from "@/data/portfolio";
import {getBaseUrl} from "@/lib/site";

import "./globals.css";

const montserrat = localFont({
  src: "../src/assets/fonts/Montserrat-Regular.ttf",
  variable: "--font-sans",
  display: "swap"
});

const agustina = localFont({
  src: "../src/assets/fonts/Agustina.woff",
  variable: "--font-brand",
  display: "swap"
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${portfolioData.name} | ${portfolioData.title}`,
  description: portfolioData.description,
  keywords: portfolioData.keywords,
  authors: [{name: portfolioData.name}],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description: portfolioData.description,
    url: baseUrl,
    siteName: `${portfolioData.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} portfolio cover`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description: portfolioData.description,
    images: ["/twitter-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#f8fbff"},
    {media: "(prefers-color-scheme: dark)", color: "#090f1d"}
  ]
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.name,
  jobTitle: portfolioData.title,
  description: portfolioData.description,
  alumniOf: portfolioData.education.institution,
  knowsAbout: portfolioData.keywords,
  address: {
    "@type": "PostalAddress",
    addressCountry: portfolioData.location
  },
  url: baseUrl
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${agustina.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
            {children}
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
        />
      </body>
    </html>
  );
}

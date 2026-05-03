import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SITE_URL = "https://perfectscoremanav.com";
const SITE_NAME = "Perfect Score Manav";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "1600 SAT Tutor | 1:1 Coaching with a Perfect Scorer — Manav Sharma",
    template: "%s | Perfect Score Manav",
  },
  description:
    "Score in the 1500s with 1:1 SAT coaching from Manav Sharma — perfect 1600 scorer, National Merit Scholar. 170-point average increase. Only 6 students per cohort.",
  keywords: [
    "SAT tutor",
    "perfect score SAT tutor",
    "1600 SAT tutor",
    "private SAT coach",
    "1:1 SAT tutoring",
    "digital SAT prep",
    "SAT prep coach",
    "Manav Sharma",
  ],
  authors: [{ name: "Manav Sharma" }],
  creator: "Manav Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "1600 SAT Tutor | 1:1 Coaching with a Perfect Scorer",
    description:
      "Perfect 1600 scorer and National Merit Scholar coaching a small cohort of students 1:1. Average increase: 170 points.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "1600 SAT Tutor | 1:1 Coaching with a Perfect Scorer",
    description:
      "Perfect 1600 scorer and National Merit Scholar coaching a small cohort of students 1:1. Average increase: 170 points.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Manav Sharma",
      url: SITE_URL,
      image: `${SITE_URL}/headshot.png`,
      jobTitle: "SAT Tutor",
      description:
        "Perfect 1600 SAT scorer, National Merit Scholar, and software engineer. 1:1 SAT coach with a 170-point average score increase across 200+ students.",
      worksFor: {
        "@id": `${SITE_URL}/#organization`,
      },
      award: ["Perfect 1600 SAT Score", "National Merit Scholar"],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#sat-tutoring`,
      name: "1:1 SAT Coaching with Manav Sharma",
      serviceType: "SAT Tutoring",
      provider: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      description:
        "Private 1:1 SAT coaching from a perfect 1600 scorer. Small cohort of 6 students per month with a 170-point average score increase.",
      url: SITE_URL,
      audience: {
        "@type": "Audience",
        audienceType: "High school students preparing for the SAT",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michael" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Manav helped me dial in my accuracy and pacing — I jumped 140 points and ended up just one question shy of perfect.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Nina" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "My experience with Manav has been incredibly beneficial. He provides custom resources that were great for my needs as a student.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ava" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Manav helped me build the strategies and confidence I needed to jump 120 points on the digital SAT.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased text-neutral-900 bg-white`}
      >
        {children}
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

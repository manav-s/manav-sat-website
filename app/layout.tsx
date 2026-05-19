import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SITE_URL = "https://perfectscoremanav.com";
const SITE_NAME = "Perfect Score Manav";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Private SAT Coaching | 1600 Scorer Manav Sharma",
    template: "%s | Perfect Score Manav",
  },
  description:
    "Private SAT coaching and score reviews with Manav Sharma — perfect 1600 scorer, National Merit Scholar, and Microsoft software engineer.",
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
    title: "Private SAT Coaching with a 1600 Scorer",
    description:
      "Private SAT score reviews and 1:1 coaching with Manav Sharma, a perfect 1600 scorer and National Merit Scholar.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Private SAT Coaching with a 1600 Scorer",
    description:
      "Private SAT score reviews and 1:1 coaching with Manav Sharma, a perfect 1600 scorer and National Merit Scholar.",
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
        "Private SAT score reviews and 1:1 coaching from a perfect 1600 scorer using the SAT Precision Framework.",
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
        className={`${inter.variable} ${crimsonPro.variable} font-sans antialiased text-neutral-900 bg-white`}
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

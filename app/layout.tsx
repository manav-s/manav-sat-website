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

export const metadata: Metadata = {
  title: "Manav Sharma | Perfect SAT Score Tutor",
  description:
    "I scored perfectly on the SAT and have helped 200+ students achieve their dream scores. Book a free class today.",
  openGraph: {
    title: "Manav Sharma | Perfect SAT Score Tutor",
    description:
      "I scored perfectly on the SAT and have helped 200+ students achieve their dream scores. Book a free class today.",
    type: "website",
  },
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
      </body>
    </html>
  );
}

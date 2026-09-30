import path from "node:path";
import type { NextConfig } from "next";

const SITE_URL = "https://www.perfectscoremanav.com";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    // Ava's case study URL changed when its figures were aligned with the VSL.
    return [
      {
        source: "/blog/ava-1310-to-1430-sat-superscore",
        destination: "/blog/ava-1300-to-1420-sat-superscore",
        permanent: true,
      },
      {
        source: "/blog/ava-1310-to-1430-sat-superscore.md",
        destination: "/blog/ava-1300-to-1420-sat-superscore.md",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              `<${SITE_URL}/llms.txt>; rel="llms-txt"; type="text/markdown"`,
              `<${SITE_URL}/index.md>; rel="alternate"; type="text/markdown"`,
              `<${SITE_URL}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

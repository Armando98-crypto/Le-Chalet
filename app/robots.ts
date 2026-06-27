import type { MetadataRoute } from "next";

const baseUrl = "https://armando98-crypto.github.io/Le-Chalet";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

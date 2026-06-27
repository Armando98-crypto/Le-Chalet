import type { MetadataRoute } from "next";

const baseUrl = "https://armando98-crypto.github.io/Le-Chalet";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

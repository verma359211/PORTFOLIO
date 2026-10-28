import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://chandanverma.space", priority: 1 },
    { url: "https://chandanverma.space/about", priority: 0.5 },
  ];
}

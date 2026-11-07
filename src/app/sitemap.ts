import type { MetadataRoute } from "next";
import { examples, products, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/products",
    "/services",
    "/work",
    "/about",
    "/contact",
    ...products.map((product) => `/products/${product.slug}`),
    ...examples.map((example) => `/work/${example.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-11-07",
  }));
}

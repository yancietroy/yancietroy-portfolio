import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yancietroy.github.io";
  return [{ url: base }, { url: `${base}/resume/` }, ...projects.map(project => ({ url: `${base}/work/${project.slug}/` }))];
}

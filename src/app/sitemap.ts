import type { MetadataRoute } from 'next';
import { pages, siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? Object.keys(pages).map(path => ({ url: new URL(path, siteUrl).href })) : [];
}

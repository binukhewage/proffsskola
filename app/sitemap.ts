import type { MetadataRoute } from 'next';
import { business, pages } from '@/lib/data';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...Object.keys(pages)].map((slug) => ({
    url: `${business.url}${slug ? '/' + slug : ''}`,
    changeFrequency: ['korlektioner', 'intensivkurs', 'paket', 'teori'].includes(slug)
      ? 'weekly'
      : 'monthly',
    priority:
      slug === ''
        ? 1
        : ['korlektioner', 'intensivkurs', 'paket', 'teori', 'kontakt'].includes(slug)
          ? 0.9
          : 0.7,
  }));
}

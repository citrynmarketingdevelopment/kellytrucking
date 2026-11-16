import type { Metadata } from 'next';
import { services } from './content';

function configuredOrigin(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, credentials, query or fragment.');
  }
  return url.origin;
}

export const siteUrl = configuredOrigin(process.env.SITE_URL);
export const pages = {
  '/': {
    label: 'Home', type: 'WebPage',
    title: 'Kelly Trucking LLC | Materials & Dump-Truck Hauling In Bakersfield',
    description: 'Material supply, dump-truck hauling, cut and fill, and site preparation based in Bakersfield. Dirt, rock, gravel, sand, and asphalt for Kern County and California projects.',
  },
  '/services/': {
    label: 'Services', type: 'WebPage',
    title: 'Material Supply, Hauling & Site Services | Kelly Trucking LLC',
    description: 'Source dirt, clean fill, rock, gravel, sand, and asphalt. Kelly Trucking coordinates material delivery, dump-truck hauling, cut and fill, and site preparation.',
  },
  '/contact/': {
    label: 'Contact', type: 'ContactPage',
    title: 'Contact Kelly Dispatch | Kelly Trucking LLC',
    description: 'Request materials, dump-truck hauling, or site work. Contact Kelly Trucking in Bakersfield at (661) 361-7640 or prepare a project inquiry for dispatch.',
  },
} as const;
export type PagePath = keyof typeof pages;

export function pageMetadata(path: PagePath): Metadata {
  const { title, description } = pages[path];
  const shareImage = siteUrl ? `${siteUrl}/photos/mack-truck.webp` : undefined;
  return {
    title, description,
    robots: { index: Boolean(siteUrl), follow: true, 'max-image-preview': 'large' },
    ...(siteUrl ? { alternates: { canonical: new URL(path, siteUrl).href } } : {}),
    openGraph: {
      type: 'website', siteName: 'Kelly Trucking LLC', locale: 'en_US', title, description,
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
      ...(shareImage ? { images: [{ url: shareImage, alt: 'Kelly Trucking Mack dump truck at a California jobsite' }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, ...(shareImage ? { images: [shareImage] } : {}) },
  };
}

export function structuredData(path: PagePath) {
  const { title, description, type, label } = pages[path];
  const absolute = (relative: string) => new URL(relative, siteUrl).href;
  const graph: object[] = [{
    '@type': 'Organization', name: 'Kelly Trucking LLC', telephone: '+1-661-361-7640',
    email: 'dispatch@kellytrucking.net',
    address: { '@type': 'PostalAddress', streetAddress: '6310 Stewart Way', addressLocality: 'Bakersfield', addressRegion: 'CA', postalCode: '93308', addressCountry: 'US' },
    ...(siteUrl ? { '@id': absolute('/#organization'), url: absolute('/'), logo: absolute('/kelly-logo-original.svg'), image: absolute('/photos/mack-truck.webp') } : {}),
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Materials, Hauling And Site Services', itemListElement: services.map(service => ({
      '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, description: service.description, ...(siteUrl ? { url: absolute('/services/') } : {}) },
    })) },
  }, {
    '@type': type, name: title, description, inLanguage: 'en-US',
    ...(siteUrl ? { '@id': absolute(path) + '#webpage', url: absolute(path), about: { '@id': absolute('/#organization') } } : {}),
  }];
  if (siteUrl) {
    graph.push({ '@type': 'WebSite', '@id': absolute('/#website'), name: 'Kelly Trucking LLC', url: absolute('/') });
    if (path !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
      { '@type': 'ListItem', position: 2, name: label, item: absolute(path) },
    ] });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/shared';
import { pageMetadata, siteUrl } from '@/lib/seo';
import './globals.css';
export const metadata: Metadata = {
  ...pageMetadata('/'),
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  icons: { icon: '/kelly-logo-original.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip To Content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}

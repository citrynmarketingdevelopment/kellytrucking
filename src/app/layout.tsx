import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/shared';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Kelly Trucking LLC | Materials & Dump-Truck Hauling In Bakersfield', template: '%s | Kelly Trucking LLC' },
  description: 'Material supply, dump-truck hauling, cut and fill, and site preparation based in Bakersfield. Dirt, rock, gravel, sand, and asphalt for Kern County and California projects.',
  icons: { icon: '/kelly-logo-original.svg' },
  openGraph: { type: 'website', siteName: 'Kelly Trucking LLC', title: 'Kelly Trucking LLC — Built To Haul. Driven To Deliver.', description: 'Materials and dump-truck hauling from Bakersfield to your next jobsite.' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip To Content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}

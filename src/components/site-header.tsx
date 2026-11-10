'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export function SiteHeader() {
  const path = usePathname();
  return <header className="site-header"><Link className="brand" href="/" aria-label="Kelly Trucking Home"><Image src="/kelly-logo-original.svg" alt="Kelly Trucking LLC" width={150} height={70} priority /></Link><nav aria-label="Main Navigation">{[['Home', '/'], ['Services', '/services/'], ['Contact', '/contact/']].map(([label, href]) => <Link key={href} href={href} aria-current={path.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined}>{label}</Link>)}</nav><Link className="button header-cta" href="/contact/">Contact Us</Link></header>;
}

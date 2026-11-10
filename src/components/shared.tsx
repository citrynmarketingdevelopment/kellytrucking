import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/content';
export function ServicePanel() {
  return <div className="service-panel"><div className="service-overlay">{services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div>;
}
export function ContactBanner({ home = false }: { home?: boolean }) {
  return <section className="contact-banner"><h2>{home ? 'Where To Next?' : <>Let’s Move<br />Your Project.</>}</h2><p>{home ? 'Tell us what’s moving and where it needs to land.' : 'Call (661) 361-7640 for material supply, dump-truck hauling, and site preparation.'}</p><Link className="button dark" href="/contact/">Contact Us</Link></section>;
}
export function SiteFooter() {
  return <footer className="site-footer"><Link href="/" aria-label="Kelly Trucking Home"><Image src="/kelly-logo-off-white.svg" alt="Kelly Trucking LLC" width={400} height={187} /></Link><address>6310 Stewart Way<br />Bakersfield, CA 93308</address><a className="footer-phone" href="tel:+16613617640">(661) 361-7640</a><p className="credit">Kelly Trucking LLC · On the job in California.</p><p className="credit">Website designed by Citryn</p></footer>;
}

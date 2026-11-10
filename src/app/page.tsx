import Link from 'next/link';
import Image from 'next/image';
import { ContactBanner, ServicePanel } from '@/components/shared';
export default function Home() {
  return <>
    <section className="hero"><Image className="hero-photo" src="/photos/mack-truck.webp" alt="Kelly Trucking Mack dump truck at a California jobsite" fill priority sizes="100vw" /><div className="hero-scrim" /><div className="hero-content"><h1>Kelly<br />Trucking LLC</h1><p className="slogan">Built To Haul. Driven To Deliver.</p><p className="hero-description">Material supply and dump-truck hauling. Dirt, rock, gravel, sand, and asphalt—from Bakersfield to your next jobsite.</p><Link className="button light" href="/contact/">Contact Us<span aria-hidden="true">↗</span></Link></div></section>
    <section className="materials-section"><div className="section-heading"><h2>Materials.<br />Delivered.</h2><p>Buy materials and get them where they need to go. Kelly Trucking supplies and hauls dirt, rock, gravel, sand, and asphalt, with cut-and-fill and site preparation services for projects across Kern County and beyond.</p></div><ServicePanel /></section>
    <section className="jobsite"><div className="panorama"><Image src="/photos/truck-at-paver.webp" alt="Kelly dump truck delivering asphalt beside a paving crew" width={1600} height={700} sizes="100vw" /></div><div className="gallery"><h2>On The Job.</h2><p className="gallery-intro">A closer look at the work behind the haul: trucks delivering material, communication at the tailgate, and the details of an active California jobsite.</p><div className="photo-grid">{[
      ['crew-at-work.webp', 'Paving crew working alongside a Kelly truck', 'Delivering asphalt alongside the receiving paving crew.'],
      ['company-logo.webp', 'Kelly Trucking company branding on its working equipment', 'The Kelly name on equipment that is out doing the work.'],
      ['material-detail.webp', 'Asphalt material being moved from a truck to the jobsite', 'Material movement, from the truck to the point of use.'],
    ].map(([file, alt, caption]) => <figure key={file}><Image src={`/photos/${file}`} alt={alt} width={800} height={600} sizes="(max-width: 700px) 100vw, 33vw" /><figcaption>{caption}</figcaption></figure>)}</div><Link className="button light" href="/services/">Explore Services</Link></div></section>
    <ContactBanner home />
  </>;
}

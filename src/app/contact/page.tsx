import { pageMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/structured-data';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { faqs } from '@/lib/content';
export const metadata = pageMetadata('/contact/');
export default function Contact() {
  return <><StructuredData path="/contact/" /><section className="page-intro"><h1>Contact Kelly.</h1><p>Buy materials, book a dump truck, or discuss your next site project. Share the material, quantity, delivery location, and timing with Kelly Trucking.</p></section><section className="contact-layout"><div className="dispatch"><p>Email dispatch</p><a className="dispatch-email" href="mailto:dispatch@kellytrucking.net">dispatch@kellytrucking.net</a><a className="dispatch-phone" href="tel:+16613617640">(661) 361-7640</a><address>6310 Stewart Way<br />Bakersfield, CA 93308<br />Serving Kern County and California</address><p>Tell us whether you need materials, trucking, cut-and-fill coordination, or site preparation. Include the material type, quantity, pickup or delivery locations, preferred date, and site access details.</p><Image src="/photos/fleet-portrait.webp" alt="Kelly Mack truck at a California jobsite" width={800} height={800} sizes="(max-width: 900px) 100vw, 40vw" /></div><ContactForm /></section><section className="faq-section"><h2>Before Your Next Haul</h2><div className="faq-grid">{faqs.map(faq => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section></>;
}

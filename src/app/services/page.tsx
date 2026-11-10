import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactBanner, ServicePanel } from '@/components/shared';
export const metadata: Metadata = { title: 'Material Supply, Hauling & Site Services', description: 'Source dirt, clean fill, rock, gravel, sand, and asphalt. Kelly Trucking coordinates material delivery, dump-truck hauling, cut and fill, and site preparation.' };
export default function Services() {
  return <>
    <section className="page-intro"><h1>Our Services.</h1><p>Kelly Trucking supplies materials and dump-truck hauling for construction, landscaping, and site work. Alongside sister company Bakersfield Dirt, we help projects across Kern County and beyond source, import, and export what the job needs.</p></section>
    <div className="services-wrap"><ServicePanel /></div>
    <section className="supply-section"><div><h2>Materials<br />We Supply.</h2><ul className="materials-list">{['Dirt & clean fill', 'Rock & base rock', 'Gravel', 'Sand', 'Asphalt'].map(item => <li key={item}>{item}</li>)}</ul></div><div><p>Order materials for construction, landscaping, gardening, and grading. Share the type, quantity, specifications, and destination so we can discuss supply, delivery, and pricing.</p><p>Need material taken away? We also coordinate export hauling for excess dirt and debris, matching your job with receiving and disposal locations.</p><Image src="/photos/material-detail.webp" alt="Construction material being delivered at a jobsite" width={900} height={600} sizes="(max-width: 900px) 100vw, 50vw" /></div></section>
    <section className="fleet-section"><Image src="/photos/truck-and-trailer.webp" alt="Kelly Trucking truck and trailer ready to haul construction materials" width={900} height={800} sizes="(max-width: 900px) 100vw, 50vw" /><div><h2>The Right Truck.<br />The Next Load.</h2><p className="fleet-types">Transfers · Super-10s<br />Bottom Dumps · End Dumps</p><p>From residential grading to large construction projects, Kelly Trucking matches hauling with the material, load, route, and jobsite. Import clean fill, base rock, or asphalt, or export excess dirt and debris.</p><p>Cut and fill, grading, paving, leveling, and excavation all start with a clear plan. Tell us about access, unloading space, quantities, and timing so we can coordinate the work with your crew.</p></div></section>
    <section className="work-section"><h2>How We Work.</h2><div className="work-grid">{[
      ['Quality & Value', 'Materials suited to your job, consistent supply, and competitive pricing. We work with you to match the load and delivery plan to your project.'],
      ['Clear Communication', 'Personal service, honest expectations, and coordination from the first call through delivery. We build working relationships around your schedule and your crew.'],
      ['Safe & Responsible Work', 'Safety and environmental responsibility belong in the plan. We review site access, unloading conditions, and disposal needs before material moves.'],
    ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section><ContactBanner />
  </>;
}

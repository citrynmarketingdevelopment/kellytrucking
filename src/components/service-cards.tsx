'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { services } from '@/lib/content';

const cards = [
  { title: 'Dirt & Materials', image: 'service-materials.webp' },
  { title: 'Trucking Services', image: 'rear-profile.webp' },
  { title: 'Cut & Fill', image: 'asphalt-delivery.webp' },
  { title: 'Site Preparation', image: 'service-site.webp' },
];

export function ServiceCards() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  return <div className="service-cards" aria-label="Explore Kelly Trucking services">
    {services.map((service, index) => <article
      className={`service-card${active === index ? ' is-active' : ''}`}
      key={service.title}
      onPointerEnter={event => {
        if (event.pointerType === 'mouse' && !event.currentTarget.parentElement?.querySelector('button:focus-visible')) setActive(index);
      }}
    >
      <Image className="service-card-photo" src={`/photos/${cards[index].image}`} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 45vw" />
      <div className="service-card-shade" />
      <div className="service-card-copy">
        <h3 id={`home-service-title-${index}`}>{cards[index].title}</h3>
        <div className="service-card-detail" id={`home-service-description-${index}`} hidden={active !== index}>
          <p>{service.description}</p>
        </div>
      </div>
      <button
        className="service-card-trigger"
        ref={element => { buttons.current[index] = element; }}
        type="button"
        aria-labelledby={`home-service-title-${index}`}
        aria-expanded={active === index}
        aria-controls={`home-service-description-${index}`}
        onFocus={() => setActive(index)}
        onClick={() => setActive(index)}
        onKeyDown={event => {
          let next = index;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % cards.length;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + cards.length - 1) % cards.length;
          else if (event.key === 'Home') next = 0;
          else if (event.key === 'End') next = cards.length - 1;
          else return;
          event.preventDefault();
          buttons.current[next]?.focus();
        }}
      ><span aria-hidden="true" className="service-card-indicator">{active === index ? '−' : '+'}</span></button>
    </article>)}
  </div>;
}

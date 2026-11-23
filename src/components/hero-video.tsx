'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const media = video.current;
    if (!media) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (preference.matches) media.pause();
      else void media.play().catch(() => {});
    };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  if (failed) return null;

  return <>
    <video
      ref={video}
      className="hero-video"
      loop muted playsInline preload="metadata"
      poster="/photos/mack-truck.webp"
      aria-hidden="true"
      onPlay={() => setPaused(false)}
      onPause={() => setPaused(true)}
      onError={() => setFailed(true)}
    >
      <source src="/videos/kelly-trucking-header.webm" type="video/webm" />
    </video>
    <button className="hero-video-toggle" type="button" onClick={() => {
      const media = video.current;
      if (!media) return;
      if (media.paused) void media.play().catch(() => {});
      else media.pause();
    }}>{paused ? 'Play video' : 'Pause video'}</button>
  </>;
}

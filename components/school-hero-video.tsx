'use client';

import { useEffect, useRef, useState } from 'react';

const mobileQuery = '(max-width: 767px)';

export default function SchoolHeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const selectSource = () => {
      setSrc(media.matches ? '/mobile.mp4' : '/carvid.mp4');
    };

    selectSource();
    media.addEventListener('change', selectSource);

    return () => media.removeEventListener('change', selectSource);
  }, []);

  useEffect(() => {
    if (!src || !video.current) return;
    video.current.load();
    void video.current.play();
  }, [src]);

  return (
    <video
      ref={video}
      className="school-hero-video"
      autoPlay
      muted
      playsInline
      aria-hidden="true"
    >
      {src && <source src={src} type="video/mp4" />}
    </video>
  );
}

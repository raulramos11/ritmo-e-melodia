"use client";

import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SOURCES = [`${basePath}/media/hero-1.mp4`, `${basePath}/media/hero-2.mp4`] as const;
const POSTER = `${basePath}/media/hero-poster.webp`;

/**
 * Plays hero-1 then hero-2 then hero-1... forever. Each clip plays once to the
 * end (never loops individually); on `ended` we crossfade opacity to the other
 * clip and start it. Two stacked absolute <video> elements, one visible at a time.
 */
export function HeroVideo() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  // Which layer (0 = A, 1 = B) is currently the visible/playing one.
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    // Kick off the first clip. Autoplay attribute covers most browsers, but
    // call play() explicitly so a re-mount also resumes.
    videoARef.current?.play().catch(() => {});
  }, []);

  const handleEnded = (justEnded: 0 | 1) => {
    const nextLayer: 0 | 1 = justEnded === 0 ? 1 : 0;
    const nextRef = nextLayer === 0 ? videoARef : videoBRef;
    const nextEl = nextRef.current;
    if (!nextEl) return;
    // Alternate the source on the layer we are about to reveal so the two
    // layers together cycle hero-1 -> hero-2 -> hero-1 ... indefinitely.
    const nextSrc = SOURCES[nextLayer];
    if (!nextEl.currentSrc.endsWith(nextSrc)) {
      nextEl.src = nextSrc;
    }
    nextEl.currentTime = 0;
    nextEl.play().catch(() => {});
    setActive(nextLayer);
  };

  return (
    <>
      <video
        ref={videoARef}
        className="hero-video"
        aria-hidden="true"
        muted
        autoPlay
        playsInline
        preload="auto"
        poster={POSTER}
        tabIndex={-1}
        src={SOURCES[0]}
        onEnded={() => handleEnded(0)}
        style={{ opacity: active === 0 ? 1 : 0 }}
      />
      <video
        ref={videoBRef}
        className="hero-video"
        aria-hidden="true"
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        tabIndex={-1}
        src={SOURCES[1]}
        onEnded={() => handleEnded(1)}
        style={{ opacity: active === 1 ? 1 : 0 }}
      />
    </>
  );
}

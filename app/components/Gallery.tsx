"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { GALLERY } from "../data/site";
import { Reveal } from "./Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Deterministic shuffle (fixed seed) so the order is scrambled but STABLE:
// the same sequence renders on server and client, avoiding a hydration
// mismatch in the static export while still breaking the numbered order.
function shuffled<T>(items: readonly T[]): T[] {
  const out = items.slice();
  let seed = 0x9e3779b9;
  for (let i = out.length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const PHOTOS = shuffled(GALLERY);

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".gallery-item");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.9;
    // one photo per click
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="gallery section shell" id="loja">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">A loja por dentro</p>
          <h2>Um giro pela<br />Ritmo &amp; Melodia.</h2>
        </div>
        <p>
          Instrumentos, acessórios e o ambiente feito para quem vive música —
          de músico pra músico.
        </p>
      </Reveal>

      <div className="gallery-carousel">
        <button
          type="button"
          className="gallery-nav gallery-nav--prev"
          aria-label="Ver fotos anteriores"
          onClick={() => scrollByCards(-1)}
        >
          ‹
        </button>

        <div
          className="gallery-track"
          ref={trackRef}
          role="region"
          aria-label="Galeria de fotos da loja — arraste para o lado para ver todas"
          tabIndex={0}
        >
          {PHOTOS.map((photo, index) => (
            <figure className="gallery-item" key={photo.src}>
              <Image
                src={`${basePath}/media/${photo.src}`}
                alt={photo.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 82vw, 70vw"
                priority={index < 1}
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="gallery-nav gallery-nav--next"
          aria-label="Ver mais fotos"
          onClick={() => scrollByCards(1)}
        >
          ›
        </button>
      </div>

      <p className="gallery-hint">Passe para o lado para ver cada foto →</p>
    </section>
  );
}

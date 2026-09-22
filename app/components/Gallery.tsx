import Image from "next/image";
import { GALLERY } from "../data/site";
import { Reveal } from "./Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Gallery() {
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

      <div className="gallery-grid">
        {GALLERY.map((photo, index) => (
          <Reveal key={photo.src} delay={(index % 4) * 0.04}>
            <figure className="gallery-item">
              <Image
                src={`${basePath}/media/${photo.src}`}
                alt={photo.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { CATEGORIES, CONTACT } from "../data/site";
import { Reveal } from "./Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Categories() {
  return (
    <section className="categories section shell" id="instrumentos">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow dark">O que você encontra</p>
          <h2>Um lugar para<br />todo músico.</h2>
        </div>
        <p>
          Seja para começar, evoluir ou subir no palco, encontre opções para
          continuar fazendo música.
        </p>
      </Reveal>

      <Reveal className="category-photo">
        <Image
          src={`${basePath}/media/loja-instrumentos.webp`}
          alt="Instrumentos e teclados disponíveis na Ritmo e Melodia"
          fill
          unoptimized
          sizes="(max-width: 800px) 100vw, 1240px"
        />
        <span>Instrumentos para diferentes estilos e momentos.</span>
      </Reveal>

      <div className="category-list">
        {CATEGORIES.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <article className="category-card">
              <span>{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${category.title} pelo WhatsApp`}>
                ↗
              </a>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="availability">Consulte modelos e disponibilidade pelo WhatsApp.</p>
    </section>
  );
}

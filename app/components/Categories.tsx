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

      <div className="category-list">
        {CATEGORIES.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <article className="category-card" style={{ backgroundImage: `url(${basePath}/media/${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.7)' }}>
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

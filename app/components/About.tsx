import { DIFFERENTIALS } from "../data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-intro shell">
        <Reveal className="about-title">
          <p className="eyebrow">Nossa história</p>
          <h2>
            Mais que uma loja.
            <br />
            Um ponto de <em>encontro.</em>
          </h2>
        </Reveal>

        <Reveal className="about-story" delay={0.08}>
          <p className="about-lead">
            A Ritmo &amp; Melodia nasceu com o propósito de conectar pessoas à
            música.
          </p>
          <p>
            Acreditamos que cada músico tem uma história única. Por isso, nosso
            atendimento vai além da venda: buscamos entender o momento, o estilo
            e o sonho de cada cliente — dos primeiros acordes à busca pelo timbre
            ideal.
          </p>
        </Reveal>
      </div>

      <div className="about-values shell">
        <Reveal className="values-heading">
          <p className="eyebrow">Nossos diferenciais</p>
          <h3>Lado a lado em cada etapa da jornada musical.</h3>
        </Reveal>

        <div className="values-list">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <article className="value-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mission shell">
        <p className="eyebrow dark">Nossa missão</p>
        <blockquote>
          Levar música para a vida das pessoas, incentivando a paixão e
          fortalecendo a cultura musical.
        </blockquote>
        <p className="mission-note">
          A música transforma, conecta e cria histórias. Aqui você encontra
          mais do que instrumentos — encontra inspiração.
        </p>
      </Reveal>
    </section>
  );
}

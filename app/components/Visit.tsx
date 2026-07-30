import { CONTACT } from "../data/site";
import { Reveal } from "./Reveal";

export function Visit() {
  return (
    <section className="visit section shell" id="visite">
      <Reveal className="visit-title">
        <p className="eyebrow dark">Onde a música encontra você</p>
        <h2>Venha conhecer<br />a Ritmo & Melodia.</h2>
      </Reveal>

      <div className="visit-grid">
        <Reveal className="address-card">
          <span className="pin" aria-hidden="true">⌖</span>
          <div>
            <p>Endereço</p>
            <h3>{CONTACT.address}</h3>
          </div>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">
            Abrir no mapa ↗
          </a>
        </Reveal>
        <Reveal className="contact-card" delay={0.08}>
          <p>Fale com a loja</p>
          <h3>Quer consultar um instrumento ou serviço?</h3>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            (11) 4032-7834 <span>↗</span>
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
            @ritmoemelodiainstrumentos <span>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

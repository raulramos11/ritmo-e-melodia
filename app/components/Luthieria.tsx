import Image from "next/image";
import { CONTACT } from "../data/site";
import { Reveal } from "./Reveal";

export function Luthieria() {
  return (
    <section className="luthieria section" id="luthieria">
      <div className="luthieria-grid shell">
        <Reveal className="workshop-photo">
          <Image
            src="/store-wall.jpg"
            alt="Parede com instrumentos musicais"
            fill
            unoptimized
            sizes="(max-width: 800px) 100vw, 46vw"
          />
          <span>Seu instrumento merece cuidado.</span>
        </Reveal>
        <Reveal className="workshop-copy" delay={0.1}>
          <p className="eyebrow">Luthieria</p>
          <h2>Pronto para<br />o próximo acorde.</h2>
          <p>
            Avaliação, regulagem e cuidados com seu instrumento para você tocar
            com mais conforto e confiança.
          </p>
          <ul>
            <li><span>01</span>Avaliação do instrumento</li>
            <li><span>02</span>Regulagem e ajustes</li>
            <li><span>03</span>Orientação e cuidado</li>
          </ul>
          <a className="button button-light" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            Consultar serviços <span>↗</span>
          </a>
          <small>Consulte os serviços disponíveis.</small>
        </Reveal>
      </div>
    </section>
  );
}

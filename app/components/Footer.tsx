import { CONTACT } from "../data/site";

export function Footer() {
  return (
    <footer>
      <div className="footer-main shell">
        <a className="footer-brand" href="#inicio">Ritmo <i>&</i> Melodia</a>
        <p>Instrumentos musicais e luthieria<br />em Bragança Paulista.</p>
        <div>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={CONTACT.maps} target="_blank" rel="noreferrer">Como chegar ↗</a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2026 Ritmo & Melodia</span>
        <small>
          Fotos ilustrativas: Garden / Wikimedia Commons (domínio público) e
          marilyn cole / Wikimedia Commons (CC BY-SA 2.0).
        </small>
      </div>
    </footer>
  );
}

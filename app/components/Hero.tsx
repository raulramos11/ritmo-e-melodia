"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { CONTACT } from "../data/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const TICKER_ITEMS = [
  "Novos e usados",
  "Cordas",
  "Percussão",
  "Áudio e amplificação",
  "Acessórios",
  "Luthieria",
  "Bragança Paulista",
  "Música que conecta",
  "Do primeiro acorde ao palco",
  "Para tocar. Para criar. Para sentir.",
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "13%"]);

  return (
    <section className="hero" ref={heroRef}>
      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ritmo e Melodia">
          <span>Ritmo</span>
          <i>&</i>
          <span>Melodia</span>
        </a>
        <div className="nav-links">
          <a href="#instrumentos">Instrumentos</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#luthieria">Luthieria</a>
          <a href="#instagram">Instagram</a>
          <a href="#visite">Visite</a>
        </div>
        <a className="nav-cta" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </nav>

      <div className="hero-grid shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Instrumentos musicais • Bragança Paulista</p>
          <h1>Seu som<br />começa <em>aqui.</em></h1>
          <p className="hero-lead">
            Instrumentos novos e usados, acessórios e luthieria para quem vive
            música do primeiro acorde ao palco.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              Consultar pelo WhatsApp <span>↗</span>
            </a>
            <a className="text-link" href="#instrumentos">Conhecer a loja ↓</a>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          style={reduced ? undefined : { y: imageY }}
        >
          <Image
            src={`${basePath}/media/hero-poster.webp`}
            alt="Músico tocando guitarra na Ritmo e Melodia"
            fill
            unoptimized
            priority
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <video
            className="hero-video"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            poster={`${basePath}/media/hero-poster.webp`}
            preload="metadata"
            tabIndex={-1}
          >
            <source src={`${basePath}/media/hero-guitarra.mp4`} type="video/mp4" />
          </video>
          <span className="visual-note">Para tocar. Para criar. Para sentir.</span>
          <span className="disc" aria-hidden="true"><i>R&M</i></span>
        </motion.div>
      </div>

      <div className="ticker" aria-label="Destaques da loja">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div
              className="ticker-group"
              data-ticker-group
              aria-hidden={group === 1 ? "true" : undefined}
              key={group}
            >
              {TICKER_ITEMS.map((item) => (
                <span className="ticker-item" key={item}>
                  <span>{item}</span>
                  <b aria-hidden="true">✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

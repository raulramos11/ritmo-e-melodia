"use client";

import { useEffect, useState } from "react";
import { CONTACT, INSTAGRAM_REELS } from "../data/site";
import { Reveal } from "./Reveal";

const OEMBED_ENDPOINT = "https://graph.facebook.com/v26.0/instagram_oembed";

type InstagramEmbed = {
  html: string;
  provider_name: "Instagram";
  type: "rich";
};

type EmbedState =
  | { status: "loading" }
  | { status: "ready" }
  | { status: "error" };

export function InstagramFeed() {
  const [embeds, setEmbeds] = useState<EmbedState[]>(() =>
    INSTAGRAM_REELS.map(() => ({ status: "loading" })),
  );

  useEffect(() => {
    const controller = new AbortController();

    Promise.all(
      INSTAGRAM_REELS.map(async (reel): Promise<EmbedState> => {
        try {
          const url = `${OEMBED_ENDPOINT}?url=${encodeURIComponent(reel.url)}&hidecaption=true&omitscript=true`;
          const response = await fetch(url, { signal: controller.signal });

          if (!response.ok) {
            throw new Error(`Instagram oEmbed respondeu ${response.status}`);
          }

          const data = (await response.json()) as InstagramEmbed;
          if (data.provider_name !== "Instagram" || !data.html) {
            throw new Error("Resposta inválida do Instagram oEmbed");
          }

          return { status: "ready" };
        } catch {
          return { status: "error" };
        }
      }),
    ).then((results) => {
      if (!controller.signal.aborted) setEmbeds(results);
    });

    return () => controller.abort();
  }, []);

  return (
    <section className="instagram section" id="instagram">
      <div className="shell">
        <div className="instagram-heading">
          <Reveal>
            <p className="eyebrow">Instagram · @ritmoemelodiainstrumentos</p>
            <h2>
              O som que
              <br />
              <em>movimenta.</em>
            </h2>
          </Reveal>

          <Reveal className="instagram-proof" delay={0.08}>
            <strong>160 mil+</strong>
            <p>
              visualizações nos conteúdos que aproximam músicos, artistas e a
              cena local.
            </p>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
              Seguir no Instagram <span>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="instagram-grid">
          {INSTAGRAM_REELS.map((reel, index) => {
            const embed = embeds[index];

            return (
              <Reveal delay={index * 0.06} key={reel.id}>
                <article className="instagram-card">
                  <div className="instagram-embed" aria-live="polite">
                    {embed.status === "loading" && (
                      <div className="instagram-loading">
                        <span aria-hidden="true" />
                        Carregando vídeo do Instagram…
                      </div>
                    )}

                    {embed.status === "ready" && (
                      <iframe
                        src={`${reel.url}embed/`}
                        title={`Reel ${index + 1} da Ritmo e Melodia no Instagram`}
                        loading="lazy"
                        scrolling="no"
                        allow="autoplay; encrypted-media; picture-in-picture"
                      />
                    )}

                    {embed.status === "error" && (
                      <div className="instagram-error">
                        <p>O Instagram não carregou este vídeo agora.</p>
                        <a href={reel.url} target="_blank" rel="noreferrer">
                          Assistir no Instagram ↗
                        </a>
                      </div>
                    )}
                  </div>

                  <a
                    className="instagram-card-link"
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{String(index + 1).padStart(2, "0")} · Reel</span>
                    <span>Ver no Instagram ↗</span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

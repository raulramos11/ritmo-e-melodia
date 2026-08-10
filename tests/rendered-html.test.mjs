import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the business page and verified contact paths", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ritmo &amp; Melodia \| Instrumentos e Luthieria/);
  assert.match(
    html,
    /<link rel="icon" href="[^"]*\/favicon\.png" type="image\/png"/,
  );
  assert.match(html, /Seu som/);
  assert.match(html, /Instrumentos novos e usados/);
  assert.match(html, /Luthieria/);
  assert.match(html, /Mais que uma loja/);
  assert.match(html, /Atendimento personalizado/);
  assert.match(html, /160 mil\+/);
  assert.match(html, /DbscW4GTIkJ/);
  assert.match(html, /DaoLSOUTcM-/);
  assert.match(html, /DaQqBRaTKP1/);
  assert.match(html, /4032-7834/);
  assert.match(html, /Residencial das Ilhas/);
  assert.match(html, /ritmoemelodiainstrumentos/);
  assert.doesNotMatch(html, /Nossa missão|fortalecendo a cultura musical/);
  assert.ok(
    html.indexOf('id="instagram"') < html.indexOf('id="luthieria"'),
    "Instagram should replace the former mission position before luthieria",
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps animation progressive and code modular", async () => {
  const root = new URL("../app/", import.meta.url);
  const components = new URL("../app/components/", import.meta.url);
  const [smooth, reveal, files] = await Promise.all([
    readFile(new URL("SmoothScroll.tsx", components), "utf8"),
    readFile(new URL("Reveal.tsx", components), "utf8"),
    readdir(components),
  ]);

  assert.match(smooth, /prefers-reduced-motion/);
  assert.match(smooth, /new Lenis/);
  assert.match(reveal, /useReducedMotion/);
  assert.match(reveal, /whileInView/);
  assert.ok(files.length >= 7);

  const [hero, heroStyles, baseStyles, aboutStyles] = await Promise.all([
    readFile(new URL("Hero.tsx", components), "utf8"),
    readFile(new URL("styles/hero.css", root), "utf8"),
    readFile(new URL("styles/base.css", root), "utf8"),
    readFile(new URL("styles/about.css", root), "utf8"),
  ]);
  assert.match(hero, /data-ticker-group/);
  assert.match(hero, /Do primeiro acorde ao palco/);
  assert.match(hero, /Para tocar\. Para criar\. Para sentir\./);
  assert.match(heroStyles, /translateX\(-50%\)/);
  assert.match(heroStyles, /min-width: 100vw/);
  assert.match(heroStyles, /writing-mode: vertical-rl/);
  assert.match(baseStyles, /--surface-raised: #1a1713/);
  assert.match(baseStyles, /--text-secondary: #b3aea5/);
  assert.match(baseStyles, /--action: #f14b24/);
  assert.match(baseStyles, /--highlight: #d4f15d/);
  assert.doesNotMatch(baseStyles, /--sage/);
  assert.match(aboutStyles, /var\(--surface\)/);
  assert.doesNotMatch(aboutStyles, /#47584b/);

  const instagram = await readFile(
    new URL("components/InstagramFeed.tsx", root),
    "utf8",
  );
  assert.match(instagram, /graph\.facebook\.com\/v26\.0\/instagram_oembed/);
  assert.match(instagram, /hidecaption=true/);
  assert.match(instagram, /reel\.url}embed\//);
  assert.doesNotMatch(instagram, /dangerouslySetInnerHTML|embed\.js/);

  for (const directory of ["components", "data", "styles"]) {
    for (const file of await readdir(new URL(`${directory}/`, root))) {
      const source = await readFile(new URL(`${directory}/${file}`, root), "utf8");
      assert.ok(source.split(/\r?\n/).length <= 300, `${file} exceeds 300 lines`);
    }
  }
});

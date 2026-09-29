# Ritmo & Melodia

Site oficial da **Ritmo & Melodia Instrumentos Musicais e Luthieria**, loja
física em Bragança Paulista — SP. O site está **em produção** no domínio
[ritmoemelodia.com](https://ritmoemelodia.com) e apresenta as categorias da
loja, seu relacionamento com os músicos, diferenciais, Reels do Instagram,
luthieria e canais de contato.

Projeto real, entregue e mantido: uma landing page institucional de página
única, focada em performance, acessibilidade e uma identidade visual coerente,
que converte visitas em contato direto com a loja pelo WhatsApp.

## Stack e destaques técnicos

- **Next.js 16 + React 19** em arquitetura de componentes de servidor, com
  build estático exportável.
- **TypeScript** em todo o código de aplicação.
- **Tailwind CSS 4** com um sistema de cores documentado e verificado por
  contraste (WCAG) — as regras, os papéis dos tokens e os contrastes medidos
  ficam em [`docs/color-system.md`](docs/color-system.md) e são validados por um
  teste automatizado (`npm run test:colors`).
- **Animações com `motion`** e rolagem suave com `lenis`, respeitando
  `prefers-reduced-motion` para acessibilidade.
- **Vídeo do hero** otimizado com poster e alternância de fontes, mantendo o
  carregamento leve.
- **Integração com o Instagram** via oEmbed oficial da Meta, validada no cliente
  e sem armazenar tokens ou credenciais.
- **Deploy estático automatizado** para GitHub Pages e para o domínio próprio
  via Hostinger, com base path configurável por ambiente.
- **Testes** de renderização de HTML e de contraste de cores no pipeline de
  validação.

## Conteúdo verificado

- instrumentos novos e usados, acessórios e luthieria;
- WhatsApp `(11) 4032-7834`;
- Instagram `@ritmoemelodiainstrumentos`;
- seção de Reels com o oEmbed oficial do Instagram;
- endereço na Av. Dr. Tancredo de Almeida Neves, 436;
- história e diferenciais fornecidos no portfólio institucional da loja.

O site não publica preços, estoque, marcas ou horários não confirmados. A
disponibilidade de modelos e serviços deve ser consultada diretamente com a
loja.

## Desenvolvimento

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Validação completa:

```bash
npm run build
npm run lint
npm run test:colors
node --test tests/rendered-html.test.mjs
```

As regras de aplicação da paleta, os papéis dos tokens e os contrastes medidos
ficam registrados em [`docs/color-system.md`](docs/color-system.md).

Também existe um `Dockerfile` de build para ambientes com Docker disponível:

```bash
docker build -t ritmo-e-melodia .
```

## Conteúdos do Instagram

Os três Reels exibidos na página ficam em `app/data/site.ts`. A seção consulta
o endpoint público `instagram_oembed` da Meta no navegador e valida o conteúdo
antes de renderizar o player oficial, sem armazenar token ou credencial. Para trocar
um vídeo, atualize a URL e o identificador na lista `INSTAGRAM_REELS`.

As legendas são ocultadas com `hidecaption=true` para manter a apresentação
minimalista e coerente com o restante do site.

Uma sincronização automática dos posts mais recentes exigiria a API do
Instagram com Login do Instagram, uma conta profissional e credenciais mantidas
somente no servidor. Essa modalidade não deve expor tokens no GitHub Pages.

## Publicação

O projeto mantém a configuração de hospedagem privada do Sites e uma exportação
estática para GitHub Pages. Os ativos respeitam `NEXT_PUBLIC_BASE_PATH` quando o
site é servido em um subcaminho.

O domínio oficial `https://ritmoemelodia.com` é publicado pela branch gerada
`hostinger`. O workflow `.github/workflows/hostinger.yml` recompila a branch
`main` com base path vazio e envia somente o conteúdo estático de `out/` para
essa branch. No hPanel, a integração Git deve apontar para `hostinger`, com
diretório raiz `public_html`; a branch não deve ser editada manualmente.

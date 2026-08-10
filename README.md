# Ritmo & Melodia

Site institucional da Ritmo & Melodia Instrumentos Musicais, em Bragança
Paulista. A página apresenta as categorias da loja, seu relacionamento com os
músicos, diferenciais, Reels do Instagram, luthieria e canais de contato.

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

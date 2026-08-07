# Ritmo & Melodia

Site institucional da Ritmo & Melodia Instrumentos Musicais, em Bragança
Paulista. A página apresenta as categorias da loja, seu relacionamento com os
músicos, diferenciais, missão, luthieria e canais de contato.

## Conteúdo verificado

- instrumentos novos e usados, acessórios e luthieria;
- WhatsApp `(11) 4032-7834`;
- Instagram `@ritmoemelodiainstrumentos`;
- endereço na Av. Dr. Tancredo de Almeida Neves, 436;
- história, diferenciais e missão fornecidos no portfólio institucional da loja.

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

## Publicação

O projeto mantém a configuração de hospedagem privada do Sites e uma exportação
estática para GitHub Pages. Os ativos respeitam `NEXT_PUBLIC_BASE_PATH` quando o
site é servido em um subcaminho.

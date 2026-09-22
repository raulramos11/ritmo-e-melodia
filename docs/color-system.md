# Sistema de cores

Este documento registra como a paleta da Ritmo & Melodia deve ser aplicada. O
objetivo é sustentar a identidade quente e artesanal da marca — creme, marrom
e terracota, com tipografia serifada — em todas as seções, sem transformar cada
bloco em uma identidade cromática diferente.

## Princípios

1. Use tokens pelo papel que exercem, nunca pelo nome visual da cor.
2. Crie profundidade com pequenas mudanças de luminosidade entre os tons de
   creme; não use uma cor saturada como fundo de uma seção inteira.
3. Reserve a terracota para ações, estados interativos e uma ênfase editorial.
4. Reserve o caramelo para rótulos, números, marcadores e a faixa animada.
5. Não use somente a cor para comunicar interação: links continuam com borda,
   sublinhado, forma de botão ou mudança de fundo.
6. Texto comum deve alcançar ao menos 4,5:1; texto grande e elementos visuais
   necessários para reconhecer controles devem alcançar ao menos 3:1.

## Tokens ativos

| Token | Valor | Papel |
| --- | --- | --- |
| `--background` | `#f6f0e6` | fundo global creme e texto sobre acentos escuros/quentes |
| `--surface` | `#efe6d8` | seção secundária e cartões integrados ao fundo |
| `--surface-raised` | `#e6dac8` | cartão em primeiro plano |
| `--text-primary` | `#3a2418` | títulos e texto principal (marrom-chocolate) |
| `--text-secondary` | `#6b5847` | parágrafos e apoio |
| `--text-tertiary` | `#74604c` | notas pequenas e rodapé |
| `--action` | `#a84a17` | CTA, hover e ênfase principal (terracota) |
| `--action-hover` | `#8f3e12` | estado hover do CTA |
| `--highlight` | `#935f27` | eyebrow, marcador, número e ticker (caramelo) |
| `--border` | `#3a24182e` | divisores decorativos sutis |

## Contrastes medidos

Os valores foram calculados com a fórmula de luminância relativa da WCAG
(`scripts/check-color-contrast.mjs`).

| Par | Razão |
| --- | ---: |
| texto principal / fundo global | 12,82:1 |
| texto principal / superfície | 11,75:1 |
| texto secundário / fundo global | 5,95:1 |
| texto secundário / superfície | 5,46:1 |
| texto terciário / fundo global | 5,26:1 |
| texto terciário / superfície | 4,82:1 |
| terracota / fundo global | 5,07:1 |
| terracota / superfície | 4,64:1 |
| fundo global / terracota | 5,07:1 |
| fundo global / caramelo | 4,74:1 |

Os divisores usam transparência e são decorativos. Bordas necessárias para
identificar um controle devem usar uma cor opaca que alcance 3:1 contra o fundo.

## Tipografia

- Display (títulos, marca, ticker): **Playfair Display** (serifada), espelhando
  o logotipo "Ritmo e Melodia".
- Corpo: **Manrope**.

## Aplicação por seção

- Hero e rodapé: `--background` (creme).
- Categorias e luthieria: `--surface` somente quando for necessário separar a
  camada; títulos permanecem em `--text-primary`.
- História: `--surface` com brilho terracota muito sutil; palavra de maior
  ênfase em `--action`.
- Contato: endereço em `--surface` e contato em `--surface-raised`.
- Fotos: preservar os tons naturais. Caso seja necessário uniformizar, reduzir
  moderadamente a saturação e usar sobreposição quente quase transparente.

## Referências

- [WCAG 2.2 — contraste mínimo](https://www.w3.org/TR/WCAG22/#contrast-minimum)
- [WCAG 2.2 — contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Carbon Design System — visão geral de cor](https://carbondesignsystem.com/elements/color/overview/)
- [Carbon Design System — tokens de cor](https://carbondesignsystem.com/elements/color/tokens/)

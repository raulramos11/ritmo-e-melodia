# Sistema de cores

Este documento registra como a paleta da Ritmo & Melodia deve ser aplicada. O
objetivo é manter a atmosfera escura e editorial do hero em todas as seções,
sem transformar cada bloco em uma identidade cromática diferente.

## Princípios

1. Use tokens pelo papel que exercem, nunca pelo nome visual da cor.
2. Crie profundidade com pequenas mudanças de luminosidade entre fundos
   neutros; não use uma cor saturada como fundo de uma seção inteira.
3. Reserve o laranja para ações, estados interativos e uma ênfase editorial.
4. Reserve o lima para rótulos, números, marcadores e a faixa animada.
5. Não use somente a cor para comunicar interação: links continuam com borda,
   sublinhado, forma de botão ou mudança de fundo.
6. Texto comum deve alcançar ao menos 4,5:1; texto grande e elementos visuais
   necessários para reconhecer controles devem alcançar ao menos 3:1.

## Tokens ativos

| Token | Valor | Papel |
| --- | --- | --- |
| `--background` | `#0b0b0b` | fundo global e texto sobre acentos claros |
| `--surface` | `#12110f` | seção secundária e cartões integrados ao fundo |
| `--surface-raised` | `#1a1713` | cartão em primeiro plano |
| `--text-primary` | `#f3eee4` | títulos e texto principal |
| `--text-secondary` | `#b3aea5` | parágrafos e apoio |
| `--text-tertiary` | `#8f8a82` | notas pequenas e rodapé |
| `--action` | `#f14b24` | CTA, hover e ênfase principal |
| `--action-hover` | `#ff6a43` | estado hover do CTA |
| `--highlight` | `#d4f15d` | eyebrow, marcador, número e ticker |
| `--border` | `#f3eee42e` | divisores decorativos sutis |

## Contrastes medidos

Os valores foram calculados com a fórmula de luminância relativa da WCAG.

| Par | Razão |
| --- | ---: |
| texto principal / fundo global | 17,02:1 |
| texto principal / superfície | 16,32:1 |
| texto secundário / superfície | 8,55:1 |
| texto terciário / superfície | 5,50:1 |
| laranja / fundo global | 5,41:1 |
| laranja / superfície | 5,19:1 |
| fundo global / laranja | 5,41:1 |
| lima / fundo global | 15,50:1 |

Os divisores usam transparência e são decorativos. Bordas necessárias para
identificar um controle devem usar uma cor opaca que alcance 3:1 contra o fundo.

## Aplicação por seção

- Hero e rodapé: `--background`.
- Categorias e luthieria: `--surface` somente quando for necessário separar a
  camada; títulos permanecem em `--text-primary`.
- História: `--surface` com brilho laranja muito sutil; palavra de maior ênfase
  em `--action`.
- Contato: endereço em `--surface` e contato em `--surface-raised`.
- Fotos: preservar os tons naturais. Caso seja necessário uniformizar, reduzir
  moderadamente a saturação e usar sobreposição quente quase transparente.

## Referências

- [WCAG 2.2 — contraste mínimo](https://www.w3.org/TR/WCAG22/#contrast-minimum)
- [WCAG 2.2 — contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Carbon Design System — visão geral de cor](https://carbondesignsystem.com/elements/color/overview/)
- [Carbon Design System — tokens de cor](https://carbondesignsystem.com/elements/color/tokens/)

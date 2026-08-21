# Sistema de cores

Este documento registra como a paleta da Ritmo & Melodia deve ser aplicada. O
objetivo é manter a atmosfera escura e editorial do hero em todas as seções,
sem transformar cada bloco em uma identidade cromática diferente.

## Princípios

1. Use tokens pelo papel que exercem, nunca pelo nome visual da cor.
2. Crie profundidade com pequenas mudanças de luminosidade entre fundos
   neutros; não use uma cor saturada como fundo de uma seção inteira.
3. Reserve o bege médio para ações, estados interativos e ênfase editorial.
4. Use o bege amadeirado em rótulos, números, marcadores e na faixa animada.
5. Não use somente a cor para comunicar interação: links continuam com borda,
   sublinhado, forma de botão ou mudança de fundo.
6. Texto comum deve alcançar ao menos 4,5:1; texto grande e elementos visuais
   necessários para reconhecer controles devem alcançar ao menos 3:1.

## Tokens ativos

| Token | Valor | Papel |
| --- | --- | --- |
| `--background` | `#0e0c0a` | fundo global em preto quente e texto sobre acentos claros |
| `--surface` | `#17130f` | seção secundária em café profundo |
| `--surface-raised` | `#211a14` | cartão em primeiro plano |
| `--text-primary` | `#f4eddf` | títulos e texto principal em bege claro |
| `--text-secondary` | `#cfc2ae` | parágrafos e apoio |
| `--text-tertiary` | `#ad9d87` | notas pequenas e rodapé |
| `--action` | `#d8c4a7` | CTA e ênfase principal |
| `--action-hover` | `#eadbc6` | estado hover do CTA |
| `--highlight` | `#c8ad86` | eyebrow, marcador, número e ticker |
| `--border` | `#f4eddf2e` | divisores decorativos sutis |

## Contrastes medidos

Os valores foram calculados com a fórmula de luminância relativa da WCAG.

| Par | Razão |
| --- | ---: |
| texto principal / fundo global | 16,76:1 |
| texto principal / superfície | 15,86:1 |
| texto secundário / superfície | 10,54:1 |
| texto terciário / superfície | 6,99:1 |
| ação bege / fundo global | 11,50:1 |
| ação bege / superfície | 10,89:1 |
| fundo global / ação bege | 11,50:1 |
| destaque amadeirado / fundo global | 9,09:1 |

Os divisores usam transparência e são decorativos. Bordas necessárias para
identificar um controle devem usar uma cor opaca que alcance 3:1 contra o fundo.

## Aplicação por seção

- Hero e rodapé: `--background`.
- Categorias e luthieria: `--surface` somente quando for necessário separar a
  camada; títulos permanecem em `--text-primary`.
- História: `--surface` com brilho bege muito sutil; palavra de maior ênfase
  em `--action`.
- Contato: endereço em `--surface` e contato em `--surface-raised`.
- Fotos: preservar os tons naturais. Caso seja necessário uniformizar, reduzir
  moderadamente a saturação e usar sobreposição quente quase transparente.

## Referências

- [WCAG 2.2 — contraste mínimo](https://www.w3.org/TR/WCAG22/#contrast-minimum)
- [WCAG 2.2 — contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Carbon Design System — visão geral de cor](https://carbondesignsystem.com/elements/color/overview/)
- [Carbon Design System — tokens de cor](https://carbondesignsystem.com/elements/color/tokens/)

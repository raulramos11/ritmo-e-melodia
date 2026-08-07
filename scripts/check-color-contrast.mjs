import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const baseStyles = await readFile(
  new URL("../app/styles/base.css", import.meta.url),
  "utf8",
);

const tokens = new Map(
  [...baseStyles.matchAll(/--([\w-]+):\s*(#[\da-f]{6});/gi)].map(
    ([, name, value]) => [name, value.toLowerCase()],
  ),
);

function relativeLuminance(hex) {
  const channels = hex
    .match(/[\da-f]{2}/gi)
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground, background) {
  const values = [relativeLuminance(foreground), relativeLuminance(background)];
  const lighter = Math.max(...values);
  const darker = Math.min(...values);
  return (lighter + 0.05) / (darker + 0.05);
}

const requiredPairs = [
  ["text-primary", "background", 4.5],
  ["text-primary", "surface", 4.5],
  ["text-secondary", "background", 4.5],
  ["text-secondary", "surface", 4.5],
  ["text-tertiary", "background", 4.5],
  ["text-tertiary", "surface", 4.5],
  ["action", "background", 4.5],
  ["action", "surface", 4.5],
  ["background", "action", 4.5],
  ["background", "highlight", 4.5],
];

for (const [foregroundName, backgroundName, minimum] of requiredPairs) {
  const foreground = tokens.get(foregroundName);
  const background = tokens.get(backgroundName);
  assert.ok(foreground, `Missing --${foregroundName}`);
  assert.ok(background, `Missing --${backgroundName}`);

  const ratio = contrastRatio(foreground, background);
  assert.ok(
    ratio >= minimum,
    `--${foregroundName} on --${backgroundName} is ${ratio.toFixed(2)}:1; expected ${minimum}:1`,
  );
  console.log(
    `PASS --${foregroundName} / --${backgroundName}: ${ratio.toFixed(2)}:1`,
  );
}

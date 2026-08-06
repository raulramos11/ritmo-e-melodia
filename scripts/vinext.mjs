import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const command = process.argv[2];

if (!command) {
  throw new Error("Informe o comando do Vinext: dev, build ou start.");
}

const cli = fileURLToPath(
  new URL("../node_modules/vinext/dist/cli.js", import.meta.url),
);

const result = spawnSync(process.execPath, [cli, command], {
  env: {
    ...process.env,
    WRANGLER_LOG_PATH:
      process.env.WRANGLER_LOG_PATH ?? ".wrangler/wrangler.log",
  },
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

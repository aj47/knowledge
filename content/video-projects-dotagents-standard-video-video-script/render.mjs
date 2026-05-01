import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("Bundling...");
const bundled = await bundle({
  entryPoint: path.join(__dirname, "src/index.ts"),
  webpackOverride: (config) => config,
  publicDir: path.join(__dirname, "public"),
});

console.log("Bundle ready:", bundled);
console.log("Selecting composition...");

const composition = await selectComposition({
  serveUrl: bundled,
  id: "Combined",
});

console.log(`Composition: ${composition.id} — ${composition.durationInFrames} frames @ ${composition.fps}fps (${composition.width}x${composition.height})`);

const outputPath = path.join(__dirname, "Combined_Output.mp4");

console.log(`Rendering to ${outputPath}...`);

await renderMedia({
  composition,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: outputPath,
  onProgress: ({ progress }) => {
    process.stdout.write(`\r  Rendering: ${Math.round(progress * 100)}%`);
  },
});

console.log(`\nDone! Output: ${outputPath}`);

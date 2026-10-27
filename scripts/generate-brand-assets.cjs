const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const root = path.resolve(__dirname, "..");
  const publicDir = path.join(root, "public");
  const source = await fs.readFile(path.join(publicDir, "brand/open-loop.svg"), "utf8");
  const mark = source.slice(source.indexOf(">") + 1, source.lastIndexOf("</svg>"));
  const navy = "#0b2238";
  const ink = "#f5f1e8";
  const icon = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="28" fill="${navy}"/><g transform="translate(7 29)" color="${ink}">${mark}</g></svg>`);
  await fs.writeFile(path.join(publicDir, "favicon.svg"), icon);

  for (const [name, size] of [
    ["favicon-16x16.png", 16],
    ["favicon-32x32.png", 32],
    ["apple-touch-icon.png", 180],
    ["android-chrome-192x192.png", 192],
    ["android-chrome-512x512.png", 512],
  ]) {
    await sharp(icon).resize(size, size).png().toFile(path.join(publicDir, name));
  }

  // ICO supports PNG-compressed entries, keeping every size crisp and lossless.
  const sizes = [16, 32, 48, 64, 128, 256];
  const images = await Promise.all(sizes.map((size) => sharp(icon).resize(size, size).png().toBuffer()));
  const directory = Buffer.alloc(6 + sizes.length * 16);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(sizes.length, 4);
  let offset = directory.length;
  images.forEach((image, index) => {
    const entry = 6 + index * 16;
    directory[entry] = sizes[index] === 256 ? 0 : sizes[index];
    directory[entry + 1] = directory[entry];
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(image.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += image.length;
  });
  await fs.writeFile(path.join(publicDir, "favicon.ico"), Buffer.concat([directory, ...images]));

  const social = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="${ink}" stroke-opacity=".07"/></pattern></defs>
    <rect width="1200" height="630" fill="${navy}"/><rect width="1200" height="630" fill="url(#grid)"/>
    <g transform="translate(67 65) scale(1.7)" color="${ink}">${mark}</g>
    <g fill="${ink}" font-family="Segoe UI, Arial, sans-serif">
      <text x="84" y="315" font-size="76" letter-spacing="-3">an ongoing</text>
      <text x="84" y="400" font-size="76" letter-spacing="-3">experiment</text>
      <text x="88" y="511" font-size="25" fill="#d4dfeb">Chandan Verma · Full-stack developer &amp; product builder</text>
      <text x="88" y="565" font-size="19" fill="#f1d47d">chandanverma.space</text>
    </g>
  </svg>`);
  await sharp(social).png().toFile(path.join(publicDir, "brand/social-preview.png"));
  console.log("Generated open-loop browser icons and social preview.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

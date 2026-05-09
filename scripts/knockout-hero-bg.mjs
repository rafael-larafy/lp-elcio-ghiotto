/**
 * Torna transparentes regiões de fundo preto conectadas à borda da imagem
 * (flood fill a partir das bordas), preservando o recorte no interior.
 */
import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROOT = join(__dirname, "..");
const FILES = ["hero-waldir.png", "hero-elcio.png"].map((f) =>
  join(ROOT, "public/img", f)
);

function lum(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function sat(r, g, b) {
  return Math.max(r, g, b) - Math.min(r, g, b);
}

/** Pixel na borda que inicia o preenchimento (fundo quase puro preto). */
function isSeed(r, g, b) {
  return r <= 14 && g <= 14 && b <= 14;
}

/** Expande para tons escuros e pouco saturados (fundo de estúdio). */
function isExpand(r, g, b) {
  return lum(r, g, b) < 32 && sat(r, g, b) < 40;
}

async function processFile(absPath) {
  const img = sharp(absPath);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  const w = info.width;
  const h = info.height;
  const stride = 4;
  const n = w * h;
  const vis = new Uint8Array(n);
  const qx = new Int32Array(n);
  const qy = new Int32Array(n);
  let qh = 0;
  let qt = 0;

  const push = (x, y) => {
    const i = y * w + x;
    if (vis[i]) return;
    vis[i] = 1;
    qx[qt] = x;
    qy[qt] = y;
    qt++;
  };

  const at = (x, y) => {
    const o = (y * w + x) * stride;
    return [data[o], data[o + 1], data[o + 2]];
  };

  for (let x = 0; x < w; x++) {
    const [r0, g0, b0] = at(x, 0);
    if (isSeed(r0, g0, b0)) push(x, 0);
    const [r1, g1, b1] = at(x, h - 1);
    if (isSeed(r1, g1, b1)) push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    const [r0, g0, b0] = at(0, y);
    if (isSeed(r0, g0, b0)) push(0, y);
    const [r1, g1, b1] = at(w - 1, y);
    if (isSeed(r1, g1, b1)) push(w - 1, y);
  }

  const neigh = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (qh < qt) {
    const x = qx[qh];
    const y = qy[qh];
    qh++;

    for (const [dx, dy] of neigh) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const ni = ny * w + nx;
      if (vis[ni]) continue;
      const [r, g, b] = at(nx, ny);
      if (!isExpand(r, g, b)) continue;
      vis[ni] = 1;
      qx[qt] = nx;
      qy[qt] = ny;
      qt++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (!vis[i]) continue;
    const o = i * stride;
    data[o + 3] = 0;
  }

  await sharp(data, {
    raw: { width: w, height: h, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(absPath + ".tmp");

  const fs = await import("fs/promises");
  await fs.rename(absPath + ".tmp", absPath);
  console.warn("OK", absPath);
}

for (const f of FILES) {
  await processFile(f);
}

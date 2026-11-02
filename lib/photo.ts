/* Server-only helper: use our own photo from /public/images when it exists,
   otherwise fall back to the Unsplash stock image. */
import fs from "node:fs";
import path from "node:path";
import { img, type ImgKey } from "./site";

const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

/** photo("hero", "hero") → "/images/hero.jpg" if the file exists, else the stock URL */
export function photo(name: string, fallback: ImgKey, w = 1200) {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", name + ext))) return `/images/${name}${ext}`;
  }
  return img(fallback, w);
}

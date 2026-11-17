import imageManifest from "./imageManifest.json";

export function imageSources(src) {
  const image = imageManifest[src];
  if (!image) throw new Error(`Missing optimized image: ${src}`);
  return {
    width: image.width,
    height: image.height,
    webp: image.versions.map((v) => `${v.webp} ${v.width}w`).join(", "),
    fallback: image.versions.map((v) => `${v.fallback} ${v.width}w`).join(", "),
    src: image.versions.at(-1).fallback,
  };
}

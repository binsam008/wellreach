import { imageSources } from "../imageSources";

export default function ResponsiveImage({ src, sizes, alt, loading = "lazy", pictureClassName, ...props }) {
  const image = imageSources(src);
  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={image.webp} sizes={sizes} />
      <img
        src={image.src}
        srcSet={image.fallback}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={alt}
        loading={loading}
        decoding="async"
        {...props}
      />
    </picture>
  );
}

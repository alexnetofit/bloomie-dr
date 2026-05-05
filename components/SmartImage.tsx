"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** fallback bg color shown until/if image fails */
  fallback?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Image with a tinted fallback. We use plain <img> for /public assets the
 * user might not have uploaded yet (so a 404 just shows the colored bg
 * instead of breaking the build); next/image for remote unsplash photos.
 */
export function SmartImage({
  src,
  alt,
  className = "",
  fallback = "#fbe1dc",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  const isRemote = src.startsWith("http");
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: fallback }}
    >
      {isRemote ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        // user-supplied /public asset — silent fallback if missing
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "0";
          }}
        />
      )}
    </div>
  );
}

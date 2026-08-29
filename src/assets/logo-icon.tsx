import type { ImgHTMLAttributes } from "react";

type LogoIconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt?: string;
  /** Use "black" for light backgrounds where the white logo would vanish. */
  variant?: "white" | "black";
};

/**
 * Venturescape brand logo. Defaults to the white variant per client's
 * preference; pass variant="black" only on sections with a light background
 * where the white logo would be invisible.
 */
export default function LogoIcon({
  className,
  alt = "Venturescape",
  variant = "white",
  ...rest
}: LogoIconProps) {
  const src = variant === "black" ? "/logo-black.png" : "/logo-white.png";
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`object-contain ${className ?? ""}`}
      {...rest}
    />
  );
}

import type { ImgHTMLAttributes } from "react";

type LogoIconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt?: string;
  /** "white" for dark backgrounds, "black" for light backgrounds. */
  variant?: "white" | "black";
};

/**
 * Venturescape brand logo. Renders the real logo image the client supplied
 * so their kerning / typography is preserved exactly. `className` controls
 * the height (e.g. `h-9 w-auto`).
 */
export default function LogoIcon({
  className,
  alt = "Venturescape Trading",
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

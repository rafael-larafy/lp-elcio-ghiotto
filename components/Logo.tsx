import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  /**
   * Visual height of the logo in pixels (preserves aspect ratio to the default 265×30).
   * Defaults to 30 — fits the 80px-tall navbar comfortably.
   */
  height?: number;
};

/** Default rendered size (matches design / SVG preview). Intrinsic SVG: 380 × 49 */
const DISPLAY_W = 265;
const DISPLAY_H = 30;

const Logo = ({ className, height = DISPLAY_H }: LogoProps) => {
  const width = Math.round((height * DISPLAY_W) / DISPLAY_H);

  return (
    <div className={clsx("flex items-center", className)}>
      <Image
        src="/img/logo.svg"
        alt="LaraTax"
        width={width}
        height={height}
        priority
        className="h-auto w-auto select-none"
        style={{ height, width }}
      />
    </div>
  );
};

export default Logo;

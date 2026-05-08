import Image from "next/image";
import clsx from "clsx";

import logoImage from "../public/img/logo.png";

type LogoProps = {
  className?: string;
  /**
   * Visual height of the logo in pixels (preserves aspect ratio).
   * Defaults to 36 — fits the 80px-tall navbar comfortably.
   */
  height?: number;
};

const Logo = ({ className, height = 36 }: LogoProps) => {
  // intrinsic dimensions: 612 × 131  →  aspect 612 / 131
  const width = Math.round((height * 612) / 131);

  return (
    <div className={clsx("flex items-center", className)}>
      <Image
        src={logoImage}
        alt="Lorem ipsum"
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

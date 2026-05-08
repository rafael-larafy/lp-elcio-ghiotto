"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  id?: string;
  title: ReactNode;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  variant?: "cyan" | "ghost";
  className?: string;
  href?: string;
  onClick?: () => void;
};

/**
 * Cyan pill CTA used across the landing page.
 * - `cyan` variant: filled gradient pill (primary CTA on every section)
 * - `ghost` variant: outlined cyan border (secondary CTA)
 */
const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  variant = "cyan",
  className,
  href,
  onClick,
}: ButtonProps) => {
  const classes = clsx(
    "group",
    variant === "cyan" ? "btn-cyan" : "btn-cyan-ghost",
    className
  );

  const inner = (
    <>
      {leftIcon && <span className="text-sm">{leftIcon}</span>}
      <span className="relative inline-flex items-center overflow-hidden">
        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-[140%]">
          {title}
        </span>
        <span className="absolute inset-0 translate-y-[140%] transition-transform duration-500 ease-out group-hover:translate-y-0">
          {title}
        </span>
      </span>
      {rightIcon && <span className="text-sm">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a id={id} href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
};

export default Button;

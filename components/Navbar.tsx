"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

import Button from "./Button";
import Logo from "./Logo";

const navItems = [
  { label: "O Hub", href: "#pain" },
  { label: "Mentes tributárias", href: "#what-is" },
  { label: "Como funciona", href: "#for-whom" },
  { label: "Diagnóstico", href: "#pricing" },
];

const NavBar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const { y: scrollY } = useWindowScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    if (scrollY === 0) {
      setIsVisible(true);
      setHasShadow(false);
    } else {
      setHasShadow(true);
      if (scrollY > lastY && scrollY > 120) setIsVisible(false);
      else if (scrollY < lastY) setIsVisible(true);
    }
    setLastY(scrollY);
  }, [scrollY, lastY]);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -120,
      opacity: isVisible ? 1 : 0,
      duration: 0.35,
      ease: "power3.out",
    });
  }, [isVisible]);

  return (
    <div
      ref={navRef}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        hasShadow
          ? "bg-[#012e43]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <header className="container-page flex h-20 items-center justify-between">
        <a href="#top" aria-label="LaraTax — voltar ao topo">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-white/70
                         transition-colors duration-200 hover:text-[#9aebff]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          title="Quero meu diagnóstico"
          href="#pricing"
          className="hidden sm:inline-flex"
        />
      </header>
    </div>
  );
};

export default NavBar;

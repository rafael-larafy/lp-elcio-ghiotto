"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TiArrowRight, TiTickOutline } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { label: "Lorem ipsum dolor sit amet", price: "R$ 1.997,00" },
  { label: "Consectetur adipiscing elit", price: "R$ 497,00" },
  { label: "Sed do eiusmod tempor", price: "R$ 497,00" },
  { label: "Ut labore et dolore magna", price: "R$ 497,00" },
  { label: "Ut enim ad minim veniam quis", price: "R$ 497,00" },
];

const Pricing = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".pr-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pr-row", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".pr-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pr-price", {
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".pr-price",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative overflow-hidden bg-[#012e43] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />

      {/* Background cyan chart */}
      <svg
        viewBox="0 0 600 400"
        className="pointer-events-none absolute right-0 top-1/2 h-[80%] w-[55%] -translate-y-1/2 opacity-20"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <g fill="none" stroke="#77e4ff" strokeWidth="1.4">
          <line x1="0" y1="350" x2="600" y2="350" />
          <line x1="0" y1="280" x2="600" y2="280" />
          <line x1="0" y1="210" x2="600" y2="210" />
          <line x1="0" y1="140" x2="600" y2="140" />
          <line x1="0" y1="70" x2="600" y2="70" />
        </g>
        <polyline
          points="0,310 80,280 160,290 240,220 320,200 400,140 480,90 560,40"
          fill="none"
          stroke="#77e4ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl">
          <div className="card-cyan-border mx-auto p-8 md:p-12">
            <div className="text-center">
              <h2 className="pr-title font-display text-3xl font-extrabold leading-tight md:text-4xl">
                Lorem ipsum dolor <br />
                sit <span className="cyan-text">amet consectetur?</span>
              </h2>
              <p className="pr-title mt-3 text-xs uppercase tracking-[0.25em] text-white/55">
                Sed do eiusmod tempor incididunt
              </p>
            </div>

            <ul className="pr-list mt-10 space-y-3">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="pr-row flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm md:text-base"
                >
                  <span className="flex items-center gap-3 text-white/85">
                    <TiTickOutline className="text-lg text-[#77e4ff]" />
                    {item.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#77e4ff] line-through opacity-90 md:text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <p className="text-sm text-white/60">
                Lorem{" "}
                <span className="line-through decoration-[#77e4ff]">
                  R$ 3.985,00
                </span>
              </p>

              <div className="pr-price mx-auto mt-4 inline-flex items-end gap-3 rounded-2xl px-8 py-5"
                style={{
                  background:
                    "linear-gradient(180deg, #b8f1ff 0%, #77e4ff 60%, #3eb8e6 100%)",
                  boxShadow:
                    "0 30px 60px -20px rgba(119,228,255,0.45), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                <span className="font-display text-2xl font-extrabold text-[#012e43] md:text-3xl">
                  10x
                </span>
                <span className="font-display text-5xl font-extrabold leading-none text-[#012e43] md:text-6xl">
                  R$ 99,90
                </span>
              </div>

              <p className="mt-4 text-xs text-white/55">
                Ou <span className="font-semibold text-white">R$ 997,00</span>{" "}
                lorem ipsum dolor.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  title="Lorem ipsum"
                  rightIcon={<TiArrowRight />}
                  href="#"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] text-white/45">
                <span>✓ Lorem ipsum dolor</span>
                <span className="hidden md:inline">·</span>
                <span>✓ Sit amet consectetur</span>
                <span className="hidden md:inline">·</span>
                <span>✓ Adipiscing elit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

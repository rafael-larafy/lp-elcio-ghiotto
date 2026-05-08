"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-headline-line",
          { y: 60, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          { y: 18, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-image",
          { x: 80, opacity: 0, duration: 1.1, ease: "power4.out" },
          "-=1"
        )
        .from(
          ".hero-image--small",
          { x: -40, y: 30, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          ".hero-chart-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "power2.inOut",
            stagger: 0.08,
          },
          "-=1"
        )
        .from(
          ".hero-floating",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.12,
          },
          "-=1.2"
        );

      // continuous subtle floating motion on numbers
      gsap.to(".hero-floating", {
        y: "+=10",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.6, repeat: -1, yoyo: true },
      });

      // grid + chart parallax on scroll
      gsap.to(".hero-bg-grid", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative isolate overflow-hidden bg-[#012e43] pt-32 pb-24 md:pt-36 md:pb-32"
    >
      {/* grid background */}
      <div className="hero-bg-grid pointer-events-none absolute inset-0 -z-10 bg-grid-fade" />

      {/* cyan ambient glow on the right */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[640px] w-[640px] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(119,228,255,0.35) 0%, rgba(119,228,255,0) 70%)",
        }}
      />

      {/* faint financial chart bars on the right */}
      <svg
        viewBox="0 0 600 400"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[80%] w-[55%] -translate-y-1/2 opacity-30"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <g fill="none" stroke="#77e4ff" strokeWidth="1.5">
          <line className="hero-chart-line" x1="0" y1="350" x2="600" y2="350" />
          <line className="hero-chart-line" x1="0" y1="300" x2="600" y2="300" />
          <line className="hero-chart-line" x1="0" y1="250" x2="600" y2="250" />
          <line className="hero-chart-line" x1="0" y1="200" x2="600" y2="200" />
          <line className="hero-chart-line" x1="0" y1="150" x2="600" y2="150" />
          <line className="hero-chart-line" x1="0" y1="100" x2="600" y2="100" />
          <line className="hero-chart-line" x1="0" y1="50" x2="600" y2="50" />
        </g>
        <polyline
          className="hero-chart-line"
          points="0,310 80,280 160,290 240,220 320,200 400,140 480,90 560,40"
          fill="none"
          stroke="#77e4ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* TEXT COLUMN */}
        <div className="lg:col-span-6">
          <div className="hero-eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#77e4ff]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9aebff]">
              Lorem ipsum dolor
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[3.6rem]">
            <span className="hero-headline-line block">Lorem ipsum </span>
            <span className="hero-headline-line block">
              <span className="text-white">dolor sit</span>
            </span>
            <span className="hero-headline-line block">
              amet consectetur
            </span>
            <span className="hero-headline-line block">adipiscing elit</span>
            <span className="hero-headline-line block">
              sed <span className="gold-text">eiusmod</span> do
            </span>
            <span className="hero-headline-line block">tempor incididunt.</span>
          </h1>

          <p className="hero-sub mt-7 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            <span className="font-semibold text-white">Lorem</span> ipsum dolor
            sit amet, consectetur adipiscing elit, sed do{" "}
            <span className="font-semibold text-white">eiusmod tempor</span>{" "}
            incididunt.
          </p>

          <div className="hero-cta mt-9">
            <Button
              title="Lorem ipsum"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
            {/* floating revenue numbers */}
            <span
              className="hero-floating absolute -top-2 right-6 font-display text-3xl font-extrabold tracking-wider text-[#77e4ff]/80 md:text-5xl"
              aria-hidden="true"
            >
              26.417
            </span>
            <span
              className="hero-floating absolute -bottom-4 left-2 font-display text-2xl font-extrabold tracking-wider text-[#77e4ff]/70 md:text-4xl"
              aria-hidden="true"
            >
              06.381
            </span>
            <span
              className="hero-floating absolute right-2 top-1/2 font-display text-xl font-bold tracking-widest text-[#77e4ff]/60 md:text-2xl"
              aria-hidden="true"
            >
              26
            </span>

            {/* big colour photo */}
            <div className="hero-image absolute inset-0 z-10 overflow-hidden rounded-[28px]">
              <Image
                src="https://placehold.co/700x900/024260/77e4ff?text=Lorem+ipsum"
                alt="Lorem ipsum"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012e43]/40 via-transparent to-[#012e43]/10" />
            </div>

            {/* secondary portrait */}
            <div className="hero-image--small absolute -left-6 bottom-10 z-20 hidden h-44 w-32 overflow-hidden rounded-2xl ring-2 ring-[#012e43] sm:block md:h-56 md:w-40">
              <Image
                src="https://placehold.co/200x300/012e43/9aebff?text=Dolor"
                alt="Dolor sit"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* small cyan corner accents */}
            <span
              aria-hidden="true"
              className="hero-floating absolute -bottom-3 -right-3 z-30 h-12 w-12 rounded-md bg-[#77e4ff]"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
            <span
              aria-hidden="true"
              className="hero-floating absolute -top-4 -right-1 z-30 h-8 w-8 rounded-md bg-[#77e4ff]/80"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* yellow scrolling marquee strip */}
      <div className="relative mt-24 overflow-hidden border-y border-white/5">
        <div className="flex w-max marquee py-3">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <div
              key={repeat}
              className="flex shrink-0 items-center gap-12 px-6 text-xs font-bold uppercase tracking-[0.3em] text-[#77e4ff]"
            >
              {[
                "Lorem ipsum dolor sit amet…",
                "+ consectetur adipiscing",
                "Sed do eiusmod tempor",
                "Ut enim ad minim",
                "Duis aute irure dolor",
                "+ excepteur sint occaecat",
              ].map((text, idx) => (
                <span key={idx} className="flex items-center gap-12">
                  <span>{text}</span>
                  <span className="text-[#77e4ff]/50">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

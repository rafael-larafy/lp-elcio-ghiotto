"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const HERO_DUO_SRC = `/img/${encodeURIComponent("Frame 4-5.png")}`;
/** Dimensões intrínsecas do ficheiro (next/image usa isto para aspect ratio e srcset; tem de bater com o PNG real). */
const HERO_DUO_WIDTH = 1649;
const HERO_DUO_HEIGHT = 1140;

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
          ".hero-portrait",
          {
            x: 56,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.15,
          },
          "-=0.85"
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
        );

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
      className="relative isolate overflow-x-visible overflow-y-visible bg-[linear-gradient(180deg,rgba(1,46,67,1)_16%,rgba(119,228,255,1)_100%)] pt-32 pb-24 md:pt-36 md:pb-32"
    >
      {/* grid background */}
      <div className="hero-bg-grid pointer-events-none absolute inset-0 -z-10 bg-grid-fade" />

      {/* cyan ambient glow on the right */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-black opacity-60 blur-3xl"
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
        {/* TEXT COLUMN — 5 colunas para liberar mais largura à imagem (+500px) */}
        <div className="lg:col-span-5">
          <div className="hero-eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#77e4ff]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9aebff]">
              LaraTAX
            </span>
          </div>

          <h1 className="hero-headline font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[3.6rem] lg:leading-[1.05]">
            <span className="hero-headline-line">Menos planilhas, </span>
            <span className="hero-headline-line">
              <span className="cyan-text">mais resultado</span> tributário
            </span>
          </h1>

          <ul className="hero-sub mt-8 max-w-md space-y-5 text-[15px] leading-relaxed text-white/75 md:text-base">
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#77e4ff]/30 bg-[#77e4ff]/10 text-lg shadow-[0_0_24px_-8px_rgba(119,228,255,0.6)]"
              >
                ⏰
              </span>
              <div className="border-l border-white/10 pl-4">
                <p className="font-semibold tracking-tight text-white">
                  5 anos em 40 minutos
                </p>
                <p className="mt-1">
                  Diagnóstico completo de oportunidades tributárias dos últimos
                  5 anos em até 40 minutos.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#77e4ff]/30 bg-[#77e4ff]/10 text-lg shadow-[0_0_24px_-8px_rgba(119,228,255,0.6)]"
              >
                🤖
              </span>
              <div className="border-l border-white/10 pl-4">
                <p className="font-semibold tracking-tight text-white">
                  O fim da era manual
                </p>
                <p className="mt-1">
                  Automatização de recuperação de tributos feita por
                  Inteligência Artificial. Sem trabalho manual.
                </p>
              </div>
            </li>
          </ul>

          <div className="hero-cta mt-9">
            <Button
              title="Quero meu diagnóstico"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>

        {/* Waldir + Elcio — arte única à direita do texto */}
        <div className="absolute flex min-h-0 min-w-0 items-center justify-center lg:col-span-7 lg:justify-end lg:overflow-visible pl-140">
          <div className="hero-portrait w-full max-w-xl sm:max-w-2xl lg:mx-0 lg:w-[1065px] lg:max-w-[750px] lg:shrink-0">
            <Image
              src={HERO_DUO_SRC}
              alt="Waldir de Lara e Elcio Ghioto — sócios LaraTax"
              width={HERO_DUO_WIDTH}
              height={HERO_DUO_HEIGHT}
              priority
              unoptimized
              className="h-auto w-full select-none object-contain drop-shadow-[0_14px_32px_rgba(0,0,0,0.28)]"
            />
          </div>
        </div>
      </div>

      {/* word marquee — pain-point pills (mesmo X dos itens da seção PainPoints) */}
      <div className="relative mt-24 overflow-hidden">
        <div className="flex w-max marquee items-center gap-3 py-3">
          {(() => {
            const words = [
              "Limite de dados",
              "Impossível escalar",
              "Operação inconsistente",
              "Muitos erros humanos",
              "Processos manuais",
              "Falta de visibilidade",
              "Risco operacional",
              "Retrabalho constante",
            ];
            return [...words, ...words].map((text, idx) => (
              <span
                key={idx}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#77e4ff]/40 bg-white/95 px-4 py-2 text-[13px] font-semibold leading-none text-[#012e43] shadow-[0_10px_28px_-14px_rgba(1,46,67,0.55)] backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#012e43] text-[#77e4ff]"
                >
                  <svg
                    viewBox="0 0 14 14"
                    width="8"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M2 2 L12 12 M12 2 L2 12" />
                  </svg>
                </span>
                <span>{text}</span>
              </span>
            ));
          })()}
        </div>
      </div>

    </section>
  );
};

export default Hero;

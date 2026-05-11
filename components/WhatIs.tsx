"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const WhatIs = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".wi-eyebrow, .wi-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".wi-paragraph", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".wi-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".wi-cta", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".wi-cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="what-is"
      className="relative overflow-hidden bg-[#00091a] py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

      {/* cyan ambient */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(4, 173, 229,0.55) 0%, rgba(4, 173, 229,0) 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="wi-content mx-auto max-w-4xl text-center">
          <p className="wi-eyebrow text-xs font-bold uppercase tracking-[0.32em] text-white/60">
            As maiores mentes tributárias
          </p>
          <h2 className="wi-title mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Quem tem a missão de eliminar as{" "}
            <span className="cyan-text">planilhas tributárias</span> no Brasil
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-white/75 md:text-lg">
            <p className="wi-paragraph text-center">
              <span className="mb-1 block font-bold text-white">
                Waldir de Lara
              </span>
              Criador do LaraTAX e uma das maiores mentes tributárias do
              Brasil, Waldir já recuperou{" "}
              <span className="font-bold text-white">
                mais de 1.8 bilhões de reais
              </span>{" "}
              em 20 anos de carreira e antecipou os impactos da{" "}
              <span className="font-bold text-[#04ADE5]">
                Reforma Tributária
              </span>
              .
            </p>

            <p className="wi-paragraph text-center">
              <span className="mb-1 block font-bold text-white">
                Elcio Ghioto
              </span>
              Com mais de 20 anos de experiência em consultoria tributária e
              passagem de{" "}
              <span className="font-bold text-white">
                11 anos pela KPMG Brasil
              </span>
              , Elcio se consolidou como uma referência nacional em estratégia
              fiscal, recuperação de créditos e planejamento tributário.
            </p>
          </div>

          <div className="wi-cta mt-12 flex justify-center">
            <Button
              title="Trabalhe com as maiores mentes tributárias"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;

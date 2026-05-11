"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import LeadForm from "./LeadForm";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".pr-eyebrow, .pr-title, .pr-sub", {
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

      gsap.from(".pr-form", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pr-form",
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
      className="relative overflow-hidden bg-[#00091a] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />

      {/* Background cyan chart */}
      <svg
        viewBox="0 0 600 400"
        className="pointer-events-none absolute right-0 top-1/2 h-[80%] w-[55%] -translate-y-1/2 opacity-20"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <g fill="none" stroke="#04ADE5" strokeWidth="1.4">
          <line x1="0" y1="350" x2="600" y2="350" />
          <line x1="0" y1="280" x2="600" y2="280" />
          <line x1="0" y1="210" x2="600" y2="210" />
          <line x1="0" y1="140" x2="600" y2="140" />
          <line x1="0" y1="70" x2="600" y2="70" />
        </g>
        <polyline
          points="0,310 80,280 160,290 240,220 320,200 400,140 480,90 560,40"
          fill="none"
          stroke="#04ADE5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Heading column */}
          <div className="lg:col-span-6">
            <p className="pr-eyebrow text-xs font-bold uppercase tracking-[0.32em] text-[#04ADE5]">
              Fature com o tributário
            </p>
            <h2 className="pr-title mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Quem já preencheu esse formulário{" "}
              <span className="cyan-text">
                não voltou para as planilhas
              </span>
            </h2>
            <p className="pr-sub mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              Em poucos minutos, descubra quanto seu escritório pode faturar com recuperação de
              tributos.
            </p>

            <ul className="pr-sub mt-8 space-y-3 text-sm text-white/65 md:text-base">
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-3 shrink-0 bg-[#04ADE5]" />
                Análise dos últimos 5 anos em até 40 minutos
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-3 shrink-0 bg-[#04ADE5]" />
                Diagnóstico completo de oportunidades fiscais
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-3 shrink-0 bg-[#04ADE5]" />
                Atendimento por especialistas tributários
              </li>
            </ul>
          </div>

          {/* Form column */}
          <div className="pr-form lg:col-span-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

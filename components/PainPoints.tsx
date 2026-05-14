"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import clsx from "clsx";
import { TiArrowRight } from "react-icons/ti";

import { kodeMono } from "@/lib/fonts";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  num: string;
  title: string;
  sub: string;
};

const jurassicSteps: Step[] = [
  {
    num: "01",
    title: "Baixa manual",
    sub: "Retificações puxadas à mão, fonte por fonte.",
  },
  {
    num: "02",
    title: "Importa em software",
    sub: "SAP e similares sem capacidade real de processamento.",
  },
  {
    num: "03",
    title: "Planilhas por tributo",
    sub: "EFD-C, EFD-F, DCT-F, PGTO, PER/DCOMP, FONTES PGTO, E-PROCESSOS.",
  },
  {
    num: "04",
    title: "Cruzamentos no Excel",
    sub: "PROCV, SOMASES, CONCATENAR… e mais um turno extra.",
  },
  {
    num: "05",
    title: "Regras de cruzamento",
    sub: "CFOP, NCM, campo social de base, e tem muito mais.",
  },
  {
    num: "06",
    title: "Alguém revisa",
    sub: "E volta com uma pilha de críticas.",
  },
  {
    num: "07",
    title: "Corrige as críticas",
    sub: "E volta para mais uma rodada de validação.",
  },
  {
    num: "08",
    title: "Monta a apresentação",
    sub: "Se tudo der certo, prepara a entrega para o cliente.",
  },
];

const laraSteps: Step[] = [
  {
    num: "01",
    title: "Baixa automática",
    sub: "Você ca o CNPJ e o certificado digital. A plataforma baixa todas as obrigações sozinha.",
  },
  {
    num: "02",
    title: "IA cruza em minutos",
    sub: "Materialidade, oportunidades e regras processadas com inteligência artificial e motor de regras 2.1 BI de cenários tributários.",
  },
  {
    num: "03",
    title: "Diagnóstico + retificação",
    sub: "Você tem 74 dashboards para análise e retificação direta pelo sistema, sem burocracia.",
  },
];

function JurassicStepCard({
  step,
  className,
}: {
  step: Step;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "pp-j-node relative flex h-full min-h-0 flex-col rounded-xl border border-[#94a3b8]/25 bg-[#0a1330]/70 p-4 backdrop-blur-sm transition-colors duration-500 hover:border-[#94a3b8]/60",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#94a3b8]/40 bg-[#0a1330] font-display text-sm font-extrabold tabular-nums text-[#94a3b8]"
      >
        {step.num}
      </span>
      <h4 className="mt-3 shrink-0 font-display text-sm font-extrabold leading-tight text-white md:text-base">
        {step.title}
      </h4>
      <p className="mt-1 min-h-0 flex-1 text-xs leading-relaxed text-white/60 md:text-[13px]">
        {step.sub}
      </p>
    </div>
  );
}

const PainPoints = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".pp-eyebrow, .pp-title, .pp-sub", {
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

      // JURASSIC TIMELINE — scroll-linked sequential reveal
      gsap.from(".pp-j-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".pp-j-head",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(".pp-j-rail", { scaleX: 0 });
      gsap.set(".pp-j-node", { opacity: 0, y: 60, scale: 0.88 });
      gsap.set(".pp-j-outcome", { opacity: 0, y: 40, scale: 0.92 });

      const jurassicTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pp-j-timeline",
          start: "top 95%",
          end: "bottom 30%",
          scrub: 2,
        },
      });

      jurassicTl
        .to(".pp-j-rail", { scaleX: 1, ease: "none", duration: 6 }, 0)
        .to(
          ".pp-j-node",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.7,
          },
          0
        );

      gsap.to(".pp-j-outcome", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".pp-j-outcome",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      // DIVIDER
      gsap.from(".pp-divider > *", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".pp-divider",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // LARA TIMELINE — scroll-linked sequential reveal
      gsap.from(".pp-l-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".pp-l-head",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(".pp-l-rail", { scaleX: 0 });
      gsap.set(".pp-l-node", { opacity: 0, y: 80, scale: 0.88 });
      gsap.set(".pp-l-outcome", { opacity: 0, y: 40, scale: 0.92 });

      const laraTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pp-l",
          start: "top 95%",
          end: "bottom 40%",
          scrub: 2,
        },
      });

      laraTl
        .to(".pp-l-rail", { scaleX: 1, ease: "none", duration: 4 }, 0)
        .to(
          ".pp-l-node",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 1.2,
          },
          0
        );

      gsap.to(".pp-l-outcome", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".pp-l-outcome",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pp-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pp-cta",
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="pain"
      className="relative overflow-hidden bg-[#00091a] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />

      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 122, 69, 0.35) 0%, rgba(255, 122, 69, 0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-[10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 173, 229, 0.35) 0%, rgba(4, 173, 229, 0) 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`${kodeMono.className} pp-eyebrow text-[20px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
          >
            O contraste
          </p>
          <h2 className="pp-title mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Da{" "}
            <span className="text-[#94a3b8]">era jurássica tributária</span>{" "}
            para a <span className="cyan-text">era LaraTax</span>
          </h2>
          <p className="pp-sub mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Compare a maratona das planilhas com o fluxo automatizado que entrega
            resultado em horas.
          </p>
        </div>

        {/* JURASSIC TIMELINE */}
        <div className="pp-j mt-20">
          <div className="pp-j-head flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span
                className={`${kodeMono.className} rounded-full border border-[#94a3b8]/40 bg-[#94a3b8]/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.3em] text-[#94a3b8]`}
              >
                Era jurássica
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#94a3b8]/50 via-[#94a3b8]/15 to-transparent" />
            </div>
            <h3 className="font-display text-2xl font-extrabold leading-tight md:text-3xl">
              Como ainda é feito por aí —{" "}
              <span className="text-[#94a3b8]">8 etapas manuais</span>
            </h3>
          </div>

          <div className="pp-j-timeline relative mt-10 space-y-10 md:space-y-12">
            <div className="relative">
              <span
                aria-hidden="true"
                className="pp-j-rail pointer-events-none absolute left-0 right-0 top-9 z-0 hidden h-[2px] origin-left bg-gradient-to-r from-[#94a3b8]/50 via-[#94a3b8]/25 to-[#94a3b8]/50 xl:block"
              />
              <div className="pp-j-grid relative z-[1] grid grid-cols-1 items-stretch gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {jurassicSteps.slice(0, 5).map((s) => (
                  <JurassicStepCard key={s.num} step={s} />
                ))}
              </div>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <span
                aria-hidden="true"
                className="pp-j-rail pointer-events-none absolute left-0 right-0 top-9 z-0 hidden h-[2px] origin-left bg-gradient-to-r from-[#94a3b8]/50 via-[#94a3b8]/25 to-[#94a3b8]/50 xl:block"
              />
              <div className="pp-j-grid relative z-[1] grid grid-cols-1 items-stretch gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                {jurassicSteps.slice(5).map((s) => (
                  <JurassicStepCard
                    key={s.num}
                    step={s}
                    className="min-h-[11.25rem] sm:min-h-[14rem] md:min-h-[15rem] lg:min-h-[11.5rem]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pp-j-outcome mx-auto mt-10 max-w-md rounded-2xl border border-[#94a3b8]/40 bg-[#94a3b8]/5 p-5 text-center">
            <p
              className={`${kodeMono.className} text-[11px] font-bold uppercase tracking-[0.3em] text-[#94a3b8]`}
            >
              Tempo médio por trabalho
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              45 a 90 dias{" "}
              <span className="text-[#94a3b8]">por trabalho</span>
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="pp-divider mx-auto my-16 flex max-w-md flex-col items-center gap-3">
          <span className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-[#04ADE5]" />
          <span
            className={`${kodeMono.className} rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[25px] font-bold uppercase tracking-[0.3em] text-[#77e4ff]`}
          >
            E com a LaraTax
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-[#04ADE5] via-white/30 to-transparent" />
        </div>

        {/* LARA TIMELINE */}
        <div className="pp-l">
          <div className="pp-l-head flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span
                className={`${kodeMono.className} rounded-full border border-[#04ADE5]/40 bg-[#04ADE5]/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
              >
                Era LaraTax
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#04ADE5]/60 via-[#04ADE5]/20 to-transparent" />
            </div>
            <h3 className="font-display text-2xl font-extrabold leading-tight md:text-3xl">
              Como é com a gente —{" "}
              <span className="cyan-text">apenas 3 etapas</span>
            </h3>
          </div>

          <div className="relative mt-10">
            <span
              aria-hidden="true"
              className="pp-l-rail absolute left-0 right-0 top-12 hidden h-[2px] origin-left bg-gradient-to-r from-[#04ADE5] via-[#04ADE5]/50 to-[#04ADE5] md:block"
            />
            <div className="pp-l-grid relative grid grid-cols-1 gap-6 md:grid-cols-3">
              {laraSteps.map((s, i) => (
                <div
                  key={i}
                  className="pp-l-node card-cyan-border relative h-full rounded-2xl border-2 border-[#04ADE5]/40 bg-[#020615]/85 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-[#04ADE5] hover:shadow-[0_0_40px_-12px_rgba(4,173,229,0.6)] md:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#04ADE5] bg-[#04ADE5] font-display text-lg font-black tabular-nums text-[#00091a]"
                  >
                    {s.num}
                  </span>
                  <h4 className="mt-5 font-display text-xl font-extrabold leading-tight text-white md:text-2xl">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-l-outcome mx-auto mt-10 max-w-md rounded-2xl border-2 border-[#04ADE5]/60 bg-gradient-to-br from-[#04ADE5]/15 via-[#04ADE5]/5 to-transparent p-5 text-center shadow-[0_0_40px_-8px_rgba(4,173,229,0.5)]">
            <p
              className={`${kodeMono.className} text-[11px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
            >
              Tempo médio por trabalho
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              Minutos, não <span className="cyan-text">dias</span>
            </p>
            <p className="text-[11px] pt-2 text-white/70">
              *em media 40 minutos o tempo de processamento
            </p>
          </div>
        </div>

        <div className="pp-cta mt-16 flex justify-center">
          <Button
            title="Quero o fim das minhas planilhas"
            rightIcon={<TiArrowRight />}
            href="#pricing"
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

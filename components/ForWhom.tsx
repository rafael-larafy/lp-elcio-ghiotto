"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TiArrowRight, TiPlus } from "react-icons/ti";

import { kodeMono } from "@/lib/fonts";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

type Point = {
  title: string;
  rest: string;
  video: string;
};

const points: Point[] = [
  {
    title: "Procuração e certificados",
    rest: "Registre o CNPJ do cliente e efetue o upload do certificado digital ou da procuração eletrônica.",
    video: "/videos/feature-1.mp4",
  },
  {
    title: "Download de obrigações",
    rest: "Documentos são capturados automaticamente a partir de fontes oficiais por meio de inteligência artificial.",
    video: "/videos/feature-2.mp4",
  },
  {
    title: "Estruturação dos dados",
    rest: "Os dados e documentos coletados são processados e padronizados com um sistema de validação integrado.",
    video: "/videos/feature-3.mp4",
  },
  {
    title: "Processamento e cruzamento",
    rest: "O cruzamento dos dados, cálculo de materialidade e a identificação de oportunidades são realizados com o uso de inteligência artificial e motor de regras.",
    video: "/videos/feature-4.mp4",
  },
  {
    title: "Diagnósticos & Dashboards",
    rest: "São construídos 74 painéis de análise de oportunidade com base em todo o cruzamento de dados.",
    video: "/videos/feature-5.mp4",
  },
  {
    title: "Análise do consultor",
    rest: "Consultor analisa os insights através dos painéis e cria a estratégia de recuperação dos melhores tributos.",
    video: "/videos/feature-1.mp4",
  },
  {
    title: "Retificação integrada",
    rest: "Após a análise, já realize a retificação diretamente pelo sistema, sem burocracia.",
    video: "/videos/feature-2.mp4",
  },
];

type ItemProps = {
  point: Point;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

const ForWhomItem = ({ point, index, isOpen, onToggle }: ItemProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const body = bodyRef.current;
      const inner = innerRef.current;
      if (!body || !inner) return;

      const reveals = inner.querySelectorAll(".fw-reveal");
      const videoWrap = inner.querySelector(".fw-video-wrap");

      const tl = gsap.timeline({ paused: true, defaults: { overwrite: "auto" } });

      tl.to(
        body,
        {
          gridTemplateRows: "1fr",
          duration: 0.55,
          ease: "power3.inOut",
        },
        0
      )
        .fromTo(
          reveals,
          { y: 24, autoAlpha: 0, filter: "blur(6px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.07,
          },
          0.18
        )
        .fromTo(
          videoWrap,
          { clipPath: "inset(0% 100% 0% 0%)", scale: 1.04 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          0.22
        );

      tlRef.current = tl;
    },
    { scope: cardRef }
  );

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    const video = videoRef.current;
    if (isOpen) {
      tl.play();
      if (video) {
        try {
          video.currentTime = 0;
        } catch {
          /* noop */
        }
        const promise = video.play();
        if (promise && typeof promise.catch === "function") {
          promise.catch(() => {
            /* autoplay rejected — ignore */
          });
        }
      }
    } else {
      tl.reverse();
      if (video) video.pause();
    }
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className={`fw-card group relative overflow-hidden rounded-2xl border bg-[#020615]/80 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${
        isOpen
          ? "border-[#04ADE5]/60 shadow-[0_0_44px_-12px_rgba(4,173,229,0.55)]"
          : "border-white/10 hover:border-[#04ADE5]/40"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-[#04ADE5] to-transparent transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        className="relative flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5">
          <span
            aria-hidden="true"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-base font-extrabold tabular-nums transition-colors duration-500 md:h-14 md:w-14 md:text-lg ${
              isOpen
                ? "border-[#04ADE5] bg-[#04ADE5] text-[#00091a]"
                : "border-[#04ADE5]/40 bg-[#04ADE5]/10 text-[#04ADE5]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-display text-lg font-extrabold leading-tight transition-colors duration-500 md:text-2xl ${
              isOpen ? "text-white" : "text-white/85 group-hover:text-white"
            }`}
          >
            {point.title}
          </h3>
        </div>

        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,border-color,color,background-color] duration-500 ${
            isOpen
              ? "rotate-45 border-[#04ADE5] bg-[#04ADE5]/15 text-[#04ADE5]"
              : "border-white/15 text-white/70 group-hover:border-white/40 group-hover:text-white"
          }`}
        >
          <TiPlus />
        </span>
      </button>

      <div
        ref={bodyRef}
        className="grid"
        style={{ gridTemplateRows: "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            ref={innerRef}
            className="grid grid-cols-1 gap-8 border-t border-white/10 p-6 md:grid-cols-2 md:gap-10 md:p-8"
          >
            <div className="flex flex-col justify-center">
              <p
                className={`${kodeMono.className} fw-reveal text-[12px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
              >
                Etapa {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="fw-reveal mt-3 font-display text-2xl font-extrabold leading-tight text-white md:text-3xl">
                {point.title}
              </h4>
              <p className="fw-reveal mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                {point.rest}
              </p>
            </div>

            <div className="fw-reveal fw-video-wrap relative aspect-video w-full overflow-hidden rounded-xl border border-[#04ADE5]/25 bg-black">
              <video
                ref={videoRef}
                src={point.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#04ADE5]/15"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 bg-[#04ADE5]"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 -left-2 h-6 w-6 bg-[#04ADE5]/80"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForWhom = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useGSAP(
    () => {
      gsap.from(".fw-eyebrow, .fw-title, .fw-sub", {
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

      gsap.from(".fw-card", {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".fw-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".fw-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fw-cta",
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
      id="for-whom"
      className="relative overflow-hidden bg-[#00091a] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`${kodeMono.className} fw-eyebrow text-[20px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
          >
            Como funciona
          </p>
          <h2 className="fw-title mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Faça parte do time dos{" "}
            <span className="cyan-text">tributaristas revolucionários</span>
          </h2>
          <p className="fw-sub mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Entenda o processo de quem já revolucionou muitos negócios.
          </p>
        </div>

        <div className="fw-list mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4">
          {points.map((p, idx) => (
            <ForWhomItem
              key={idx}
              point={p}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() =>
                setOpenIndex((current) => (current === idx ? -1 : idx))
              }
            />
          ))}
        </div>

        <div className="fw-cta mt-14 flex justify-center">
          <Button
            title="Quero ser um tributarista revolucionário"
            rightIcon={<TiArrowRight />}
            href="#pricing"
          />
        </div>
      </div>
    </section>
  );
};

export default ForWhom;

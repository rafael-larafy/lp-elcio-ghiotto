"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import { kodeMono } from "@/lib/fonts";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

/** Asset em public/img — espaço no nome → URL codificado */
const FOR_WHOM_IMAGE_SRC = `/img/${encodeURIComponent("Group 5.png")}`;

const points = [
  {
    title: "Procuração e certificados",
    rest: "Registre o CNPJ do cliente e efetue o upload do certificado digital ou da procuração eletrônica.",
  },
  {
    title: "Download de obrigações",
    rest: "Documentos são capturados automaticamente a partir de fontes oficiais por meio de inteligência artificial.",
  },
  {
    title: "Estruturação dos dados",
    rest: "Os dados e documentos coletados são processados e padronizados com um sistema de validação integrado.",
  },
  {
    title: "Processamento e cruzamento",
    rest: "O cruzamento dos dados, cálculo de materialidade e a identificação de oportunidades são realizados com o uso de inteligência artificial e motor de regras.",
  },
  {
    title: "Diagnósticos & Dashboards",
    rest: "São construídos 74 painéis de análise de oportunidade com base em todo o cruzamento de dados.",
  },
  {
    title: "Análise do consultor",
    rest: "Consultor analisa os insights através dos painéis e cria a estratégia de recuperação dos melhores tributos.",
  },
  {
    title: "Retificação integrada",
    rest: "Após a análise, já realize a retificação diretamente pelo sistema, sem burocracia.",
  },
];

const ForWhom = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".fw-eyebrow, .fw-title", {
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

      gsap.from(".fw-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".fw-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".fw-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fw-image",
          start: "top 80%",
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

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-7">
          <p
            className={`${kodeMono.className} fw-eyebrow text-[20px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
          >
            Como funciona
          </p>
          <h2 className="fw-title mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Faça parte do time dos{" "}
            <span className="cyan-text">tributaristas revolucionários</span>
          </h2>
          <p className="fw-eyebrow mt-4 text-base text-white/70 md:text-lg">
            Entenda o processo de quem já revolucionou muitos negócios.
          </p>

          <ul className="fw-list mt-10 space-y-5">
            {points.map((p, idx) => (
              <li
                key={idx}
                className="fw-item flex items-start gap-4 text-base text-white/75 md:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#04ADE5]/40 bg-[#04ADE5]/10 font-display text-sm font-extrabold tabular-nums text-[#04ADE5]"
                >
                  {idx + 1}
                </span>
                <span>
                  <span className="block font-semibold text-white">
                    {p.title}
                  </span>
                  <span className="mt-1 block">{p.rest}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              title="Quero ser um tributarista revolucionário"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5">
          <div className="fw-image relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[28px]">
            <Image
              src={FOR_WHOM_IMAGE_SRC}
              alt="Palestrante com microfone em fundo azul"
              fill
              sizes="(max-width: 1024px) 80vw, (max-width: 1280px) 35vw, 448px"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00091a]/50 via-transparent to-transparent" />

            {/* cyan accents */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 z-10 h-14 w-14 bg-[#04ADE5]"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
            <span
              aria-hidden="true"
              className="absolute -top-2 -left-2 z-10 h-8 w-8 bg-[#04ADE5]/80"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;

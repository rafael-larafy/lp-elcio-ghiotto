"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TiArrowRight } from "react-icons/ti";

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
    video: "/videos/Composição 1.mp4",
  },
  {
    title: "Download de obrigações",
    rest: "Documentos são capturados automaticamente a partir de fontes oficiais por meio de inteligência artificial.",
    video: "/videos/Composição 2.mp4",
  },
  {
    title: "Estruturação dos dados",
    rest: "Os dados e documentos coletados são processados e padronizados com um sistema de validação integrado.",
    video: "/videos/Composição 3.mp4",
  },
  {
    title: "Processamento e cruzamento",
    rest: "O cruzamento dos dados, cálculo de materialidade e a identificação de oportunidades são realizados com o uso de inteligência artificial e motor de regras.",
    video: "/videos/Composição 4.mp4",
  },
  {
    title: "Diagnósticos & Dashboards",
    rest: "São construídos 74 painéis de análise de oportunidade com base em todo o cruzamento de dados.",
    video: "/videos/Composição 5.mp4",
  },
  {
    title: "Análise do consultor",
    rest: "Consultor analisa os insights através dos painéis e cria a estratégia de recuperação dos melhores tributos.",
    video: "/videos/Composição 6.mp4",
  },
  {
    title: "Retificação integrada",
    rest: "Após a análise, já realize a retificação diretamente pelo sistema, sem burocracia.",
    video: "/videos/Composição 7.mp4",
  },
];

const ForWhom = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stepListRef = useRef<HTMLUListElement | null>(null);
  const previousIndexRef = useRef<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const active = points[activeIndex];

  // Crossfade the stage content when the active step changes.
  useEffect(() => {
    const previous = previousIndexRef.current;
    previousIndexRef.current = activeIndex;
    if (previous === activeIndex) return;

    const stage = stageRef.current;
    if (!stage) return;

    const reveals = stage.querySelectorAll<HTMLElement>(".fw-fade");
    gsap.fromTo(
      reveals,
      { autoAlpha: 0, y: 14, filter: "blur(6px)" },
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.05,
        overwrite: "auto",
      }
    );

    const videoWrap = stage.querySelector<HTMLElement>(".fw-video-wrap");
    if (videoWrap) {
      gsap.fromTo(
        videoWrap,
        { clipPath: "inset(0% 100% 0% 0%)", scale: 1.04 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 0.85,
          ease: "power4.out",
          overwrite: "auto",
        }
      );
    }

    const v = videoRef.current;
    if (v) {
      try {
        v.currentTime = 0;
      } catch {
        /* noop */
      }
      const promise = v.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          /* autoplay rejected — ignore */
        });
      }
    }
  }, [activeIndex]);

  // Keep the active step visible inside its scrolling container (mobile strip).
  useEffect(() => {
    const list = stepListRef.current;
    if (!list) return;
    const item = list.children[activeIndex] as HTMLElement | undefined;
    if (!item) return;
    item.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeIndex]);

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

      gsap.from(".fw-step", {
        x: -16,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".fw-steps",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".fw-stage", {
        opacity: 0,
        x: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fw-stage",
          start: "top 80%",
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

        <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.45fr)] md:gap-10 lg:gap-14">
          <aside className="fw-steps md:sticky md:top-28 md:self-start">
            <p
              className={`${kodeMono.className} mb-4 hidden text-[12px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]/70 md:block`}
            >
              Etapas
            </p>

            <ul
              ref={stepListRef}
              className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-col md:gap-1 md:overflow-visible md:px-0 md:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {points.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    key={i}
                    className="fw-step shrink-0 snap-start md:shrink"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-current={isActive ? "step" : undefined}
                      className="group relative flex w-full items-center gap-3 rounded-xl py-3 pl-4 pr-3 text-left transition-colors duration-500 md:gap-4 md:rounded-none md:py-4 md:pl-6"
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute left-0 top-2 bottom-2 hidden w-[3px] rounded-full transition-all duration-500 md:block ${
                          isActive
                            ? "scale-y-100 bg-[#04ADE5]"
                            : "scale-y-50 bg-white/10"
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-display text-sm font-extrabold tabular-nums transition-colors duration-500 md:h-10 md:w-10 ${
                          isActive
                            ? "border-[#04ADE5] bg-[#04ADE5] text-[#00091a]"
                            : "border-white/15 bg-white/[0.02] text-white/55 group-hover:border-[#04ADE5]/40 group-hover:text-[#04ADE5]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`whitespace-nowrap font-display text-sm font-bold leading-tight transition-colors duration-500 md:whitespace-normal md:text-base ${
                          isActive
                            ? "text-white"
                            : "text-white/55 group-hover:text-white/85"
                        }`}
                      >
                        {p.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div
            ref={stageRef}
            className="fw-stage relative overflow-hidden rounded-2xl border border-[#04ADE5]/25 bg-[#020615]/80 p-5 backdrop-blur-sm md:p-7"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-[#04ADE5] to-transparent"
            />

            <div className="fw-fade fw-video-wrap relative aspect-video w-full overflow-hidden rounded-xl border border-[#04ADE5]/25 bg-black">
              <video
                ref={videoRef}
                key={active.video}
                src={active.video}
                muted
                loop
                playsInline
                autoPlay
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

            <div className="mt-6 md:mt-7">
              <p
                className={`${kodeMono.className} fw-fade text-[12px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
              >
                Etapa {String(activeIndex + 1).padStart(2, "0")} ·{" "}
                {String(points.length).padStart(2, "0")}
              </p>
              <h3 className="fw-fade mt-3 font-display text-2xl font-extrabold leading-tight text-white md:text-3xl">
                {active.title}
              </h3>
              <p className="fw-fade mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                {active.rest}
              </p>

              <div className="fw-fade mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) => Math.max(0, i - 1))
                  }
                  disabled={activeIndex === 0}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:border-[#04ADE5]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-white/75"
                  aria-label="Etapa anterior"
                >
                  <TiArrowRight className="rotate-180" />
                  Anterior
                </button>

                <span className="font-display text-xs font-bold tabular-nums text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(points.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) =>
                      Math.min(points.length - 1, i + 1)
                    )
                  }
                  disabled={activeIndex === points.length - 1}
                  className="inline-flex items-center gap-2 rounded-full border border-[#04ADE5]/40 bg-[#04ADE5]/10 px-4 py-2 text-sm font-semibold text-[#04ADE5] transition-colors duration-300 hover:border-[#04ADE5] hover:bg-[#04ADE5]/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#04ADE5]/40 disabled:hover:bg-[#04ADE5]/10"
                  aria-label="Próxima etapa"
                >
                  Próxima
                  <TiArrowRight />
                </button>
              </div>
            </div>
          </div>
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

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import { kodeMono } from "@/lib/fonts";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const PAIN_POINTS_VIDEO_SRC = `/img/${encodeURIComponent("Video LP (V2).mp4")}`;

const painPoints = [
  "Baixa automática.",
  "Processamento e cruzamento.",
  "Controle de PER/DCOMP.",
  "Painéis e diagnósticos.",
  "Potencial de retificação de tributos.",
];

const PainPoints = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".pp-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pp-item", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".pp-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(videoRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
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
      id="pain"
      className="relative overflow-hidden bg-[#ffffff] py-24 text-[#00091a]"
    >
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 9, 26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 9, 26,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <p
            className={`${kodeMono.className} pp-headline mb-3 text-[20px] font-bold uppercase tracking-[0.3em] text-[#04ADE5]`}
          >
            O hub tributário
          </p>
          <h2 className="pp-headline font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Que transforma{" "}
            <span className="relative inline-block">
              <span className="relative z-10">caos fiscal em lucro</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#04ADE5]/70"
              />
            </span>
          </h2>

          <ul className="pp-list mt-10 space-y-5">
            {painPoints.map((text, idx) => (
              <li
                key={idx}
                className="pp-item flex items-start gap-4 text-base text-[#00091a]/85 md:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00091a] text-[#04ADE5]"
                >
                  <svg
                    viewBox="0 0 14 14"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 7.5 L6 11 L12 3" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              title="Quero o fim das minhas planilhas"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>

        {/* vídeo */}
        <div ref={videoRef} className="relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#00091a] ring-2 ring-[#00091a]/20 shadow-[0_30px_60px_-20px_rgba(0, 9, 26,0.45)]">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Vídeo de apresentação LaraTax"
            >
              <source src={PAIN_POINTS_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>

          {/* cyan accent shape */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-16 w-16 rounded-md bg-[#04ADE5]"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  TiArrowRight,
  TiTime,
  TiMediaPlay,
  TiSpanner,
  TiFolderOpen,
} from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: <TiTime />, label: "Lorem ipsum", subtitle: "dolor sit" },
  { icon: <TiMediaPlay />, label: "Sed eiusmod", subtitle: "tempor" },
  { icon: <TiSpanner />, label: "Adipiscing", subtitle: "consectetur" },
  { icon: <TiFolderOpen />, label: "Magna aliqua", subtitle: "ut labore" },
];

const CourseAccess = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".ca-title, .ca-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".ca-card", {
        y: 40,
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        ease: "back.out(1.4)",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".ca-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".ca-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".ca-cta",
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
      className="relative overflow-hidden bg-[#012e43] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />

      <div className="container-page relative">
        <div className="text-center">
          <h2 className="ca-title font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Lorem ipsum dolor{" "}
            <span className="gold-text">sit amet consectetur</span>
            <br className="hidden sm:block" /> adipiscing elit eiusmod!
          </h2>
          <p className="ca-sub mx-auto mt-4 max-w-md text-base text-white/60 md:text-lg">
            Sed do <span className="font-bold text-white">eiusmod tempor</span>{" "}
            incididunt ut labore.
          </p>
        </div>

        <div className="ca-grid mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="ca-card card-gold-border flex flex-col items-center justify-center gap-2 p-7 text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <span className="flex-center mb-3 h-14 w-14 rounded-xl bg-[#77e4ff]/15 text-3xl text-[#77e4ff]">
                {c.icon}
              </span>
              <p className="font-display text-base font-extrabold text-white md:text-lg">
                {c.label}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {c.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="ca-cta mt-14 flex justify-center">
          <Button
            title="Lorem ipsum"
            rightIcon={<TiArrowRight />}
            href="#pricing"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseAccess;

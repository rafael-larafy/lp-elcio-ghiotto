"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    bold: "lorem ipsum",
    rest: "dolor sit amet, consectetur adipiscing elit.",
  },
  {
    bold: "sed do eiusmod",
    rest: "tempor incididunt ut labore et dolore magna.",
  },
  {
    bold: "ut enim ad minim",
    rest: "veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    bold: "duis aute irure",
    rest: "dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    bold: "excepteur sint",
    rest: "occaecat cupidatat non proident, sunt in culpa qui officia.",
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
      className="relative overflow-hidden bg-[#012e43] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-7">
          <p className="fw-eyebrow text-xs font-bold uppercase tracking-[0.3em] text-[#9aebff]">
            Lorem ipsum dolor
          </p>
          <h2 className="fw-title mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Sit amet consectetur <br className="hidden md:block" />
            <span className="cyan-text">adipiscing elit?</span>
          </h2>

          <ul className="fw-list mt-10 space-y-6">
            {points.map((p, idx) => (
              <li
                key={idx}
                className="fw-item flex items-start gap-4 text-base text-white/75 md:text-lg"
              >
                <span className="mt-2 inline-block h-1.5 w-3 shrink-0 bg-[#77e4ff]" />
                <span>
                  Sed ut perspiciatis{" "}
                  <span className="font-semibold text-white">{p.bold}</span>{" "}
                  {p.rest}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              title="Lorem ipsum"
              rightIcon={<TiArrowRight />}
              href="#pricing"
            />
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5">
          <div className="fw-image relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[28px]">
            <Image
              src="https://placehold.co/600x800/024260/77e4ff?text=Lorem+ipsum"
              alt="Lorem ipsum"
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012e43]/50 via-transparent to-transparent" />

            {/* cyan accents */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 z-10 h-14 w-14 bg-[#77e4ff]"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
            <span
              aria-hidden="true"
              className="absolute -top-2 -left-2 z-10 h-8 w-8 bg-[#77e4ff]/80"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;

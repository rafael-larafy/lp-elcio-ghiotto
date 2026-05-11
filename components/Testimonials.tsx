"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  TiArrowLeft,
  TiArrowRight,
  TiStarFullOutline,
} from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Lorem Ipsum",
    role: "Dolor — sit amet",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    avatar: "https://placehold.co/200x200/024260/77e4ff?text=L1",
  },
  {
    name: "Consectetur Adipiscing",
    role: "Tempor — incididunt",
    quote:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    avatar: "https://placehold.co/200x200/024260/77e4ff?text=L2",
  },
  {
    name: "Sed Do Eiusmod",
    role: "Magna — aliqua",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
    avatar: "https://placehold.co/200x200/024260/77e4ff?text=L3",
  },
  {
    name: "Ut Labore Dolore",
    role: "Veniam — quis",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
    avatar: "https://placehold.co/200x200/024260/77e4ff?text=L4",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useGSAP(
    () => {
      gsap.from(".tt-title, .tt-sub", {
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
    },
    { scope: containerRef }
  );

  const goTo = (next: number) => {
    const total = testimonials.length;
    const newIndex = (next + total) % total;
    setIndex(newIndex);
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: `-${newIndex * 100}%`,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative overflow-hidden bg-[#00091a] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />

      <div className="container-page relative">
        <div className="text-center">
          <p className="tt-sub mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#04ADE5]">
            Lorem ipsum
          </p>
          <h2 className="tt-title font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Sed ut{" "}
            <span className="cyan-text">perspiciatis</span> unde
            <br className="hidden md:block" /> omnis iste natus error sit.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={trackRef}
              className="flex w-full"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="card-cyan-border flex flex-col items-center gap-6 p-8 text-center md:p-12">
                    <div className="flex gap-1 text-[#04ADE5]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <TiStarFullOutline key={idx} className="text-xl" />
                      ))}
                    </div>
                    <p className="text-base leading-relaxed text-white/85 md:text-lg">
                      “{t.quote}”
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#04ADE5]/40">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-display font-extrabold text-white">
                          {t.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Depoimento anterior"
              className="flex-center h-11 w-11 rounded-full border border-white/15 text-white/80 transition hover:border-[#04ADE5] hover:text-[#04ADE5]"
            >
              <TiArrowLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-[#04ADE5]"
                      : "w-3 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próximo depoimento"
              className="flex-center h-11 w-11 rounded-full border border-white/15 text-white/80 transition hover:border-[#04ADE5] hover:text-[#04ADE5]"
            >
              <TiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { TiArrowRight, TiPlus } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

type Module = {
  number: string;
  title: string;
  topics: string[];
};

const modules: Module[] = [
  {
    number: "00",
    title: "Lorem ipsum dolor sit amet",
    topics: [
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam quis nostrud",
      "Exercitation ullamco laboris nisi ut aliquip",
      "Ex ea commodo consequat",
      "Duis aute irure dolor in reprehenderit",
    ],
  },
  {
    number: "01",
    title: "Consectetur adipiscing elit",
    topics: [
      "Voluptate velit esse cillum dolore",
      "Eu fugiat nulla pariatur",
      "Excepteur sint occaecat cupidatat",
      "Non proident sunt in culpa",
      "Qui officia deserunt mollit anim",
      "Id est laborum sed ut perspiciatis",
      "Unde omnis iste natus error",
    ],
  },
  {
    number: "02",
    title: "Sed do eiusmod tempor incididunt",
    topics: [
      "Voluptatem accusantium doloremque",
      "Laudantium totam rem aperiam",
      "Eaque ipsa quae ab illo inventore",
      "Veritatis et quasi architecto",
      "Beatae vitae dicta sunt explicabo",
    ],
  },
  {
    number: "03",
    title: "Ut labore et dolore magna aliqua",
    topics: [
      "Nemo enim ipsam voluptatem",
      "Quia voluptas sit aspernatur",
      "Aut odit aut fugit sed quia",
      "Consequuntur magni dolores eos",
      "Qui ratione voluptatem sequi",
      "Nesciunt neque porro quisquam",
    ],
  },
  {
    number: "04",
    title: "Ut enim ad minim veniam",
    topics: [
      "Est qui dolorem ipsum",
      "Quia dolor sit amet",
      "Consectetur adipisci velit",
      "Sed quia non numquam",
      "Eius modi tempora incidunt",
      "Ut labore et dolore",
      "Magnam aliquam quaerat",
    ],
  },
  {
    number: "05",
    title: "Quis nostrud exercitation ullamco",
    topics: [
      "Voluptatem ut enim ad minima",
      "Veniam quis nostrum exercitationem",
      "Ullam corporis suscipit laboriosam",
      "Nisi ut aliquid ex ea commodi",
      "Consequatur quis autem vel eum",
    ],
  },
  {
    number: "06",
    title: "Laboris nisi ut aliquip ex ea",
    topics: [
      "Iure reprehenderit qui in ea",
      "Voluptate velit esse quam nihil",
      "Molestiae consequatur vel illum",
      "Qui dolorem eum fugiat quo",
    ],
  },
  {
    number: "07",
    title: "Commodo consequat duis aute",
    topics: [
      "At vero eos et accusamus",
      "Et iusto odio dignissimos",
      "Ducimus qui blanditiis praesentium",
      "Voluptatum deleniti atque corrupti",
    ],
  },
  {
    number: "08",
    title: "Irure dolor in reprehenderit",
    topics: [
      "Quos dolores et quas molestias",
      "Excepturi sint occaecati cupiditate",
      "Non provident similique sunt",
      "In culpa qui officia deserunt",
    ],
  },
  {
    number: "09",
    title: "In voluptate velit esse cillum",
    topics: [
      "Mollitia animi id est laborum",
      "Et dolorum fuga harum quidem",
      "Rerum facilis est et expedita",
      "Distinctio nam libero tempore",
    ],
  },
];

const ModuleCard = ({ mod, index }: { mod: Module; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="ca-mod-card card-gold-border overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span
            aria-hidden="true"
            className="flex-center h-11 w-11 shrink-0 rounded-md bg-[#77e4ff]/15 font-display text-sm font-extrabold text-[#77e4ff]"
          >
            {mod.number}
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9aebff]">
              Lorem {mod.number}
            </p>
            <h3 className="mt-1 font-display text-base font-extrabold text-white md:text-lg">
              {mod.title}
            </h3>
          </div>
        </div>
        <span
          className={`flex-center h-9 w-9 shrink-0 rounded-full border border-white/15 text-white/70 transition-transform duration-300 ${
            open ? "rotate-45 border-[#77e4ff] text-[#77e4ff]" : ""
          }`}
        >
          <TiPlus />
        </span>
      </button>

      <div
        ref={contentRef}
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-white/10 px-6 py-5 md:px-8 md:py-7">
            {mod.topics.map((topic, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 py-1.5 text-sm text-white/75 md:text-base"
              >
                <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-[#77e4ff]" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Modules = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".mods-eyebrow, .mods-title, .mods-sub", {
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

      gsap.from(".ca-mod-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".mods-grid",
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
      id="modules"
      className="relative overflow-hidden bg-[#012e43] py-24 text-white md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mods-eyebrow text-xs font-bold uppercase tracking-[0.32em] text-[#9aebff]">
            Lorem ipsum dolor
          </p>
          <h2 className="mods-title mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Sit <span className="gold-text">amet consectetur</span> adipiscing!
          </h2>
          <p className="mods-sub mx-auto mt-5 max-w-xl text-sm text-white/65 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
            <span className="font-bold text-white">magna aliqua</span>:
          </p>
        </div>

        <div className="mods-grid mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4">
          {modules.map((m, i) => (
            <ModuleCard key={m.number} mod={m} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="btn-gold group inline-flex items-center gap-2"
          >
            <span className="relative inline-flex items-center overflow-hidden">
              <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-[140%]">
                Lorem ipsum
              </span>
              <span className="absolute inset-0 translate-y-[140%] transition-transform duration-500 ease-out group-hover:translate-y-0">
                Lorem ipsum
              </span>
            </span>
            <TiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Modules;

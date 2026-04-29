"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

export default function Histoire() {
  return (
    <section id="histoire" className="relative z-[2] px-14 py-[140px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
            {/* Visuel : portrait + mockups satellites */}
            <div className="relative mx-auto aspect-square w-full max-w-[580px]">
              {/* Portrait fondateur */}
              <div className="absolute left-1/2 top-1/2 z-[2] w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[14px] border border-border shadow-xl" style={{ aspectRatio: "4/5" }}>
                <Image src="/charles-portrait.jpg" alt="Fondateur Prodia" fill className="object-cover" style={{ objectPosition: "center 25%" }} sizes="(max-width: 768px) 80vw, 35vw" />
              </div>

              {/* App B2C — haut droite */}
              <figure className="absolute top-[1%] right-[1%] z-[3] m-0 w-[24%]" style={{ transform: "rotate(5deg)", filter: "drop-shadow(0 10px 20px rgba(40,25,10,0.18))" }}>
                <div className="overflow-hidden rounded-2xl border-2 border-white/80 bg-white shadow-md" style={{ aspectRatio: "9/19" }}>
                  <Image src="/work-b2c-app.png" alt="App B2C" fill className="object-cover" sizes="160px" />
                </div>
                <figcaption className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-[9px] py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white" style={{ transform: "translateX(-50%) rotate(-5deg)" }}>App B2C</figcaption>
              </figure>

              {/* App B2B — haut gauche */}
              <figure className="absolute top-[5%] left-[-2%] z-[3] m-0 w-[36%]" style={{ transform: "rotate(-4deg)", filter: "drop-shadow(0 10px 20px rgba(40,25,10,0.18))" }}>
                <div className="overflow-hidden rounded-2xl border-2 border-white/80 bg-white shadow-md" style={{ aspectRatio: "16/9" }}>
                  <Image src="/work-b2b-app.png" alt="App B2B" fill className="object-cover" sizes="220px" />
                </div>
                <figcaption className="absolute -top-3 left-2.5 whitespace-nowrap rounded-full bg-ink px-[9px] py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white" style={{ transform: "rotate(4deg)" }}>App B2B</figcaption>
              </figure>

              {/* Logiciel B2B — bas droite */}
              <figure className="absolute right-[2%] bottom-[12%] z-[3] m-0 w-[48%]" style={{ transform: "rotate(3deg)", filter: "drop-shadow(0 12px 24px rgba(40,25,10,0.20))" }}>
                <div className="overflow-hidden rounded-2xl border-2 border-white/80 bg-white p-1 shadow-md" style={{ aspectRatio: "16/10" }}>
                  <Image src="/work-b2b-saas.png" alt="Logiciel B2B" fill className="rounded-xl object-cover" style={{ objectPosition: "left top" }} sizes="300px" />
                </div>
                <figcaption className="absolute -top-3 left-3.5 whitespace-nowrap rounded-full bg-orange-500 px-[9px] py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white" style={{ transform: "rotate(-3deg)" }}>Logiciel B2B</figcaption>
              </figure>

              {/* Fintech SaaS — bas gauche */}
              <figure className="absolute bottom-[2%] left-[-1%] z-[3] m-0 w-[42%]" style={{ transform: "rotate(-3deg)", filter: "drop-shadow(0 12px 24px rgba(40,25,10,0.20))" }}>
                <div className="overflow-hidden rounded-2xl border-2 border-white/80 bg-white p-1 shadow-md" style={{ aspectRatio: "16/10" }}>
                  <Image src="/work-fintech-saas.png" alt="Fintech SaaS" fill className="rounded-xl object-cover" style={{ objectPosition: "left top" }} sizes="260px" />
                </div>
                <figcaption className="absolute -top-3 right-3.5 whitespace-nowrap rounded-full bg-ink px-[9px] py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white" style={{ transform: "rotate(3deg)" }}>Fintech SaaS</figcaption>
              </figure>
            </div>

            {/* Texte */}
            <div>
              <Eyebrow>NOTRE HISTOIRE</Eyebrow>
              <h2 className="mt-5 text-[clamp(36px,4.5vw,60px)] font-normal leading-[0.96] tracking-[-0.04em] text-ink">
                On vient du <span className="font-serif italic">produit</span>.<br />
                Pas du prompt.
              </h2>
              <div className="mt-8 flex flex-col gap-[22px]">
                <p className="m-0 text-[17px] leading-[1.6] text-ink">
                  5 ans à concevoir des produits B2C, B2B et des logiciels métier. Plus de 60 produits passés entre nos mains. Ça change la façon dont on aborde un projet IA : on commence par comprendre le besoin métier, on conçoit un outil que l&apos;utilisateur a vraiment envie d&apos;utiliser, et on le construit avec lui.
                </p>
                <p className="m-0 text-base leading-[1.6] text-ink-soft">
                  On en a tiré une conviction : intégrer l&apos;IA est facile. <span className="font-medium text-ink">Aligner une équipe entière avec un nouvel outil, beaucoup moins.</span> Le dirigeant adhère vite. Les opérationnels, c&apos;est plus long.
                </p>
                <p className="m-0 text-base leading-[1.6] text-ink-soft">
                  Notre métier de designer produit, c&apos;est exactement ça : faire des outils que les gens veulent utiliser. C&apos;est ce qu&apos;on apporte à chaque agent qu&apos;on livre.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-7" style={{ borderColor: "oklch(0.85 0.005 75 / 0.5)" }}>
                {[
                  { v: "5 ans", l: "d'XP en UX/UI" },
                  { v: "60+", l: "produits conçus" },
                  { v: "B2C · B2B", l: "+ logiciels métier" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-[28px] font-medium leading-[1.1] tracking-[-0.025em] text-ink">{s.v}</div>
                    <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

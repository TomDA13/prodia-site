"use client";

import { motion } from "framer-motion";

const ADVANTAGES = [
  { n: "01", t: "On vient voir votre métier", d: "On ne vend rien sans avoir vu comment vous travaillez. Premier échange gratuit de 30 min, et si on continue, on vient sur place.", vs: "vs. les agences qui vendent des prompts" },
  { n: "02", t: "On s'intègre à vos outils", d: "Slack, Notion, Excel, votre CRM. On branche l'agent dans votre stack. On n'ajoute un nouvel outil que si c'est vraiment utile.", vs: "vs. les plateformes propriétaires" },
  { n: "03", t: "On livre, on n'expérimente pas", d: "On met une première brique en production rapidement, puis on étend. Pas de système complet en démo qui ne sortira jamais des slides.", vs: "vs. les POC qui dorment" },
  { n: "04", t: "On embarque vos équipes", d: "L'IA n'a de valeur que si elle est utilisée. On aligne les opérationnels dès la construction, pour qu'ils aient envie de s'en servir.", vs: "vs. les démos faites au CODIR" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

export default function Avantages() {
  return (
    <section className="relative z-[2] px-14 py-[140px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14">
            <Eyebrow>POURQUOI PRODIA</Eyebrow>
            <h2 className="mt-5 max-w-[1000px] text-[clamp(36px,5vw,64px)] font-normal leading-[0.95] tracking-[-0.04em] text-ink">
              Quatre choix qu&apos;on assume <span className="font-serif italic text-orange-500">contre le marché</span>.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ADVANTAGES.map((c) => (
              <div key={c.n} className="rounded-[14px] border border-border/70 bg-white/65 p-9 backdrop-blur-[20px]">
                <div className="flex items-start gap-7">
                  <div className="shrink-0 font-serif text-[64px] italic leading-none text-orange-500">{c.n}</div>
                  <div className="flex-1">
                    <div className="mb-3 text-[26px] font-medium leading-[1.25] tracking-[-0.025em] text-ink">{c.t}</div>
                    <div className="mb-4 text-[14.5px] leading-[1.55] text-ink-soft">{c.d}</div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-orange-700">↳ {c.vs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

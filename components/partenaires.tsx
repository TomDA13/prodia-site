"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PARTNER_LOGOS = [
  { src: "/logos/localizz.png", name: "Localizz" },
  { src: "/logos/irce.png", name: "IRCE" },
  { src: "/logos/cpe-lyon.png", name: "CPE Lyon" },
  { src: "/logos/pepite.png", name: "Pépite Provence" },
  { src: "/logos/jogl.png", name: "JOGL" },
  { src: "/logos/galadrim.png", name: "Galadrim" },
  { src: "/logos/baggr.png", name: "Baggr" },
  { src: "/logos/gotchaaa.png", name: "Gotchaaa" },
  { src: "/logos/nowk.png", name: "Nowk" },
  { src: "/logos/rookie.png", name: "Rookie Agency" },
  { src: "/logos/pillar.png", name: "Pillar" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

export default function Partenaires() {
  return (
    <section className="relative z-[2] px-14 py-[120px] max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 text-center">
            <Eyebrow>ILS NOUS FONT CONFIANCE</Eyebrow>
            <h2 className="mt-5 text-[clamp(32px,4vw,48px)] font-normal leading-none tracking-[-0.035em] text-ink">
              Partenaires & <span className="font-serif italic text-orange-500">clients</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-3 items-center justify-items-center gap-x-12 gap-y-8 border-y py-9 md:grid-cols-6"
            style={{ borderColor: "oklch(0.85 0.005 75 / 0.4)" }}
          >
            {PARTNER_LOGOS.map((l, i) => (
              <div key={i} className="flex h-16 w-full items-center justify-center">
                <Image
                  src={l.src}
                  alt={l.name}
                  title={l.name}
                  width={140}
                  height={56}
                  className="h-auto max-h-14 w-auto object-contain opacity-[0.78] mix-blend-multiply grayscale contrast-[1.05]"
                />
              </div>
            ))}
            <div className="flex h-16 items-center justify-center font-serif text-[22px] italic text-ink-soft">
              + d&apos;autres
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

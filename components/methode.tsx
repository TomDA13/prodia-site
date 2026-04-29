"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    t: "Comprendre",
    w: "Semaine 1",
    mode: "Sur place ou à distance",
    d: "Premier échange gratuit de 30 minutes pour cadrer. Si on continue, on passe du temps chez vous : on parle aux équipes, on capte vos process, vos valeurs, vos habitudes. À la fin, on chiffre.",
    illu: "comprendre" as const,
  },
  {
    n: "02",
    t: "Construire",
    w: "Sem. 2-5",
    mode: "En binôme avec un référent interne",
    d: "On crée l'agent : on lui donne les bonnes logiques, on connecte vos outils. Vous l'utilisez, on itère, on améliore. Pas de version finale livrée à l'aveugle.",
    illu: "construire" as const,
  },
  {
    n: "03",
    t: "Intégrer",
    w: "Semaine 6",
    mode: "Mise en flux + suivi",
    d: "L'agent rentre dans vos flux quotidiens. Le résultat est là. On reste disponibles : un agent qui s'adapte au métier dans le temps, ça se cultive.",
    illu: "integrer" as const,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

function StepIllustration({ kind }: { kind: "comprendre" | "construire" | "integrer" }) {
  const stroke = "var(--color-orange-500)";
  const ink = "var(--color-ink)";
  const muted = "oklch(0.75 0.02 60)";

  if (kind === "comprendre") {
    return (
      <div className="flex w-full items-center justify-center overflow-hidden rounded-[10px] border" style={{ aspectRatio: "16/7", background: "oklch(0.97 0.01 70)", borderColor: "oklch(0.91 0.01 70)" }}>
        <svg viewBox="0 0 320 140" width="100%" height="100%" aria-hidden="true">
          <line x1="20" y1="120" x2="300" y2="120" stroke={muted} strokeWidth="0.8" strokeDasharray="2 3" />
          <circle cx="80" cy="55" r="11" fill="none" stroke={ink} strokeWidth="1.4" />
          <path d="M 65 120 L 65 90 Q 65 78 80 78 Q 95 78 95 90 L 95 120" fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 102 50 L 145 50 Q 152 50 152 57 L 152 72 Q 152 79 145 79 L 118 79 L 110 86 L 113 79 L 102 79 Q 95 79 95 72 L 95 57 Q 95 50 102 50 Z" fill="white" stroke={stroke} strokeWidth="1.3" />
          <line x1="106" y1="60" x2="142" y2="60" stroke={muted} strokeWidth="1" />
          <line x1="106" y1="66" x2="138" y2="66" stroke={muted} strokeWidth="1" />
          <line x1="106" y1="72" x2="128" y2="72" stroke={muted} strokeWidth="1" />
          <circle cx="240" cy="55" r="11" fill="none" stroke={stroke} strokeWidth="1.6" />
          <path d="M 225 120 L 225 90 Q 225 78 240 78 Q 255 78 255 90 L 255 120" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="200" y="82" width="22" height="28" rx="2" fill="white" stroke={ink} strokeWidth="1.3" />
          <line x1="204" y1="89" x2="218" y2="89" stroke={muted} strokeWidth="0.9" />
          <line x1="204" y1="94" x2="218" y2="94" stroke={muted} strokeWidth="0.9" />
          <line x1="204" y1="99" x2="216" y2="99" stroke={muted} strokeWidth="0.9" />
          <g transform="translate(170 30)">
            <path d="M 0 -7 L 2 -2 L 7 -2 L 3 1 L 5 6 L 0 3 L -5 6 L -3 1 L -7 -2 L -2 -2 Z" fill={stroke} />
          </g>
        </svg>
      </div>
    );
  }

  if (kind === "construire") {
    return (
      <div className="flex w-full items-center justify-center overflow-hidden rounded-[10px] border" style={{ aspectRatio: "16/7", background: "oklch(0.97 0.01 70)", borderColor: "oklch(0.91 0.01 70)" }}>
        <svg viewBox="0 0 320 140" width="100%" height="100%" aria-hidden="true">
          <rect x="120" y="45" width="80" height="55" rx="6" fill="white" stroke={ink} strokeWidth="1.5" />
          <text x="160" y="68" fontSize="9" fill={ink} textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="1">AGENT</text>
          <circle cx="148" cy="82" r="3" fill={stroke} />
          <circle cx="160" cy="82" r="3" fill="none" stroke={stroke} strokeWidth="1" />
          <circle cx="172" cy="82" r="3" fill="none" stroke={muted} strokeWidth="1" />
          <rect x="30" y="22" width="40" height="26" rx="4" fill="white" stroke={muted} strokeWidth="1.2" />
          <line x1="36" y1="32" x2="64" y2="32" stroke={muted} strokeWidth="0.9" />
          <line x1="36" y1="38" x2="58" y2="38" stroke={muted} strokeWidth="0.9" />
          <path d="M 70 38 Q 95 50 120 60" fill="none" stroke={stroke} strokeWidth="1.3" strokeDasharray="2 2" />
          <rect x="30" y="92" width="40" height="26" rx="4" fill="white" stroke={muted} strokeWidth="1.2" />
          <line x1="36" y1="102" x2="64" y2="102" stroke={muted} strokeWidth="0.9" />
          <path d="M 70 100 Q 95 92 120 86" fill="none" stroke={stroke} strokeWidth="1.3" strokeDasharray="2 2" />
          <rect x="250" y="22" width="40" height="26" rx="4" fill="white" stroke={muted} strokeWidth="1.2" />
          <line x1="256" y1="32" x2="284" y2="32" stroke={muted} strokeWidth="0.9" />
          <path d="M 250 38 Q 225 50 200 60" fill="none" stroke={stroke} strokeWidth="1.3" strokeDasharray="2 2" />
          <rect x="250" y="92" width="40" height="26" rx="4" fill="white" stroke={muted} strokeWidth="1.2" />
          <line x1="256" y1="102" x2="284" y2="102" stroke={muted} strokeWidth="0.9" />
          <path d="M 250 100 Q 225 92 200 86" fill="none" stroke={stroke} strokeWidth="1.3" strokeDasharray="2 2" />
          <g transform="translate(195 38) rotate(35)">
            <circle cx="0" cy="0" r="4" fill="none" stroke={stroke} strokeWidth="1.4" />
            <line x1="0" y1="4" x2="0" y2="14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="-2" y1="14" x2="2" y2="14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-[10px] border" style={{ aspectRatio: "16/7", background: "oklch(0.97 0.01 70)", borderColor: "oklch(0.91 0.01 70)" }}>
      <svg viewBox="0 0 320 140" width="100%" height="100%" aria-hidden="true">
        <rect x="20" y="22" width="56" height="18" rx="3" fill="white" stroke={muted} strokeWidth="1.1" />
        <text x="48" y="34" fontSize="7.5" fill={muted} textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.5">MAIL</text>
        <rect x="20" y="60" width="56" height="18" rx="3" fill="white" stroke={muted} strokeWidth="1.1" />
        <text x="48" y="72" fontSize="7.5" fill={muted} textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.5">SLACK</text>
        <rect x="20" y="98" width="56" height="18" rx="3" fill="white" stroke={muted} strokeWidth="1.1" />
        <text x="48" y="110" fontSize="7.5" fill={muted} textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.5">VOIX</text>
        <path d="M 76 31 Q 110 35 140 60" fill="none" stroke={stroke} strokeWidth="1.3" />
        <path d="M 76 69 L 140 69" fill="none" stroke={stroke} strokeWidth="1.3" />
        <path d="M 76 107 Q 110 100 140 78" fill="none" stroke={stroke} strokeWidth="1.3" />
        <circle cx="160" cy="69" r="22" fill="white" stroke={ink} strokeWidth="1.5" />
        <circle cx="160" cy="69" r="14" fill="none" stroke={stroke} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="160" cy="69" r="4" fill={stroke} />
        <path d="M 180 60 Q 210 50 244 35" fill="none" stroke={stroke} strokeWidth="1.3" />
        <path d="M 182 69 L 244 69" fill="none" stroke={stroke} strokeWidth="1.3" />
        <path d="M 180 78 Q 210 90 244 103" fill="none" stroke={stroke} strokeWidth="1.3" />
        <rect x="244" y="22" width="60" height="22" rx="3" fill={ink} />
        <text x="274" y="36" fontSize="8" fill="white" textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.6">DEVIS ✓</text>
        <rect x="244" y="58" width="60" height="22" rx="3" fill={ink} />
        <text x="274" y="72" fontSize="8" fill="white" textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.6">RDV ✓</text>
        <rect x="244" y="94" width="60" height="22" rx="3" fill={ink} />
        <text x="274" y="108" fontSize="8" fill="white" textAnchor="middle" fontFamily="ui-monospace, monospace" letterSpacing="0.6">RELANCE ✓</text>
      </svg>
    </div>
  );
}

export default function Methode() {
  return (
    <section id="methode" className="relative z-[2] px-14 py-[120px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14">
            <Eyebrow>COMMENT ÇA MARCHE</Eyebrow>
            <h2 className="mt-5 max-w-[900px] text-[clamp(36px,5vw,72px)] font-normal leading-[0.94] tracking-[-0.045em] text-ink">
              Trois étapes. <span className="font-serif italic text-orange-500">Six semaines.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-[14px] border border-border/70 bg-white/65 p-9 backdrop-blur-[20px]"
              >
                <div className="mb-[18px] flex items-baseline justify-between">
                  <span className="font-serif text-[64px] italic leading-none text-orange-500">{s.n}</span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-text-muted">{s.w}</span>
                </div>
                <StepIllustration kind={s.illu} />
                <div className="mt-[22px] mb-1.5 text-[28px] font-medium tracking-[-0.025em] text-ink">{s.t}</div>
                <div className="mb-3.5 font-serif text-[15px] italic text-orange-700">{s.mode}</div>
                <div className="text-[14.5px] leading-[1.55] text-ink-soft">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Note adoption */}
          <div className="mt-9 max-w-[820px] border-l-2 border-orange-500 py-0 pl-7">
            <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-orange-700">↳ NOTE SUR L&apos;ADOPTION</div>
            <div className="text-[15px] leading-[1.6] text-ink-soft">
              La plupart des projets IA échouent au moment de l&apos;adoption. C&apos;est pour ça qu&apos;on prend le temps de comprendre votre métier <em>avant</em> de construire, et qu&apos;on itère <em>avec</em> vous, pas devant vous. Les équipes utilisent vraiment l&apos;agent, sinon ce n&apos;est pas livré.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

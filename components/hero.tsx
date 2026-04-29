"use client";

import { motion } from "framer-motion";

/* ============================================
   Constants
   ============================================ */
const SECTORS = [
  { key: "commerce", label: "E-commerce & marques" },
  { key: "distrib", label: "Distributeurs & négoce" },
  { key: "industrie", label: "Fabricants & industriels" },
  { key: "agence", label: "Agences & studios" },
] as const;

const STATS = [
  { v: "15–20h", l: "récupérées / semaine\nen moyenne par entreprise" },
  { v: "− 20%", l: "coûts opérationnels" },
  { v: "6 sem.", l: "diagnostic → adoption" },
];

/* ============================================
   Sub-components
   ============================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full px-5 py-[11px] text-[13.5px] font-medium transition-all duration-250 tracking-[-0.005em] font-sans ${
        active
          ? "border border-transparent bg-ink text-white"
          : "border border-border-strong bg-white/70 text-ink hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

/* ============================================
   Hero Mockup — Avant / Après (Variante C)
   ============================================ */

const BEFORE_TASKS = [
  "Refaire le devis Mme Lambert",
  "Répondre aux 12 mails SAV",
  "Ressaisir la commande dans Sage",
  "Relancer 5 devis sans réponse",
  "Préparer la réponse à l'AO",
  "Mettre à jour les prix fournisseurs",
  "Reformater le bon de livraison",
];

const AFTER_TASKS = [
  { txt: "Valider 3 devis (3 min)", done: true },
  { txt: "Visite chantier — terrain", done: false },
  { txt: "Décider du recrutement Q4", done: false },
];

const AGENT_DID = [
  "12 mails SAV répondus",
  "3 devis générés et envoyés",
  "1 AO public qualifié",
  "Sage à jour, prix synchronisés",
];

function HeroMockupSplit() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      <div
        className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-10"
        style={{ perspective: "1400px" }}
      >
        {/* === Séparateur central === */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-10px] bottom-[-10px] left-1/2 z-[4] hidden w-14 -translate-x-1/2 items-center justify-center md:flex"
        >
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2"
            style={{
              width: 0,
              borderLeft: "2px dashed oklch(0.78 0.04 60)",
            }}
          />
          <div
            className="relative z-[2] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-orange-500 text-[22px] font-semibold text-white"
            style={{
              boxShadow:
                "0 14px 32px -8px oklch(0.65 0.22 38 / 0.55), 0 0 0 6px white",
            }}
          >
            →
          </div>
        </div>

        {/* ============ AVANT ============ */}
        <div>
          <div className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted md:hidden">Aujourd&apos;hui</div>
        <div
          className="relative rounded-2xl p-4 md:p-[22px] md:pb-6 md:rotate-[-2deg]"
          style={{
            background: "oklch(0.97 0.005 75)",
            border: "1.5px dashed oklch(0.78 0.01 75)",
            boxShadow:
              "0 26px 60px -22px rgba(60,40,20,0.20), 0 10px 24px -16px rgba(60,40,20,0.10)",
          }}
        >
          <div className="mb-[18px] flex items-baseline justify-between">
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Avant
            </span>
            <span className="font-serif text-base italic text-text-muted">
              lundi, 9h12
            </span>
          </div>
          <div className="mb-3.5 text-[17px] font-medium tracking-[-0.01em] text-ink">
            Votre todo
          </div>
          {BEFORE_TASKS.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 py-[7px] text-sm leading-[1.4] text-ink-soft"
            >
              <span
                className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-[3px]"
                style={{ border: "1.5px solid oklch(0.72 0.01 75)" }}
              />
              <span>{t}</span>
            </div>
          ))}
          <div
            className="mt-4 pt-3.5 font-serif text-base italic leading-[1.4] text-text-muted"
            style={{ borderTop: "1.5px dashed oklch(0.82 0.01 75)" }}
          >
            …et il est déjà 11h.
          </div>
        </div>
        </div>

        {/* ============ APRÈS ============ */}
        <div>
          <div className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-orange-700 md:hidden">Après 6 semaines</div>
        <div
          className="relative rounded-2xl bg-ink p-4 md:p-[22px] md:pb-6 text-white md:rotate-[1.5deg]"
          style={{
            boxShadow:
              "0 40px 80px -16px rgba(15,12,8,0.36), 0 20px 40px -16px rgba(15,12,8,0.24)",
          }}
        >
          <div className="mb-[18px] flex items-baseline justify-between">
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-orange-400">
              Après
            </span>
            <span className="font-serif text-base italic text-white/55">
              lundi, 9h12
            </span>
          </div>
          <div className="mb-3.5 text-[17px] font-medium tracking-[-0.01em] text-white">
            Votre todo
          </div>
          {AFTER_TASKS.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 py-[7px] text-sm leading-[1.4] text-white/[0.92]"
            >
              <span
                className="mt-[3px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px]"
                style={{
                  border: `1.5px solid ${
                    t.done
                      ? "var(--color-orange-500)"
                      : "rgba(255,255,255,0.45)"
                  }`,
                  background: t.done
                    ? "var(--color-orange-500)"
                    : "transparent",
                }}
              >
                {t.done && (
                  <span className="text-[10px] font-bold leading-none text-ink">
                    ✓
                  </span>
                )}
              </span>
              <span
                style={{
                  textDecoration: t.done ? "line-through" : "none",
                  textDecorationColor: "rgba(255,255,255,0.5)",
                }}
              >
                {t.txt}
              </span>
            </div>
          ))}
          <div className="mt-4 border-t border-white/[0.18] pt-3.5">
            <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
              L&apos;agent a fait, ce matin
            </div>
            {AGENT_DID.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-2 py-[3px] text-[12.5px] leading-[1.4] text-white/[0.82]"
              >
                <span className="shrink-0 text-orange-400">●</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Légende */}
      <div className="mt-[18px] hidden grid-cols-2 gap-10 md:grid">
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          Aujourd&apos;hui
        </div>
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-orange-700">
          Après 6 semaines
        </div>
      </div>

      {/* Footer "+18h" */}
      <div
        className="mt-[22px] flex items-center justify-between gap-4 rounded-[14px] border border-border bg-white px-5 py-4 shadow-sm"
        style={{ transform: "rotate(0.6deg)" }}
      >
        <div className="font-serif text-[17px] italic leading-[1.3] text-ink-soft">
          Ce que vous récupérez :
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-medium leading-none tracking-[-0.04em] text-ink">
            +18h
          </span>
          <span className="text-sm text-text-muted">par semaine</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Background (mesh gradient blobs)
   ============================================ */
function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "oklch(0.985 0.008 75)" }}
    >
      <div
        className="absolute -top-[20%] -left-[15%] h-[1200px] w-[1200px] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.94 0.07 55 / 0.45), transparent 70%)",
          animation: "meshA 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-[25%] -right-[15%] h-[1100px] w-[1100px] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.92 0.09 42 / 0.32), transparent 70%)",
          animation: "meshB 24s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[30%] left-[30%] h-[1100px] w-[1100px] blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.97 0.04 70 / 0.35), transparent 70%)",
          animation: "meshC 28s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[25%] -left-[10%] h-[1050px] w-[1050px] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.93 0.06 35 / 0.30), transparent 70%)",
          animation: "meshD 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[15%] h-[1150px] w-[1150px] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.93 0.08 50 / 0.32), transparent 70%)",
          animation: "meshE 22s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ============================================
   Ground Plane (perspective grid)
   ============================================ */
function GroundPlane() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[1100px] overflow-hidden"
    >
      <div className="absolute inset-0" style={{ perspective: "800px" }}>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-50%",
            right: "-50%",
            height: "70%",
            backgroundImage:
              "linear-gradient(oklch(0.65 0.20 38 / 0.22) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.20 38 / 0.22) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            transform: "rotateX(72deg)",
            transformOrigin: "50% 100%",
            maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-[558px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.85 0.18 40 / 0.6), transparent)",
          boxShadow: "0 0 40px oklch(0.85 0.18 40 / 0.5)",
        }}
      />
    </div>
  );
}

/* ============================================
   HERO — Main Export
   ============================================ */
interface HeroProps {
  activeSector: string;
  setActiveSector: (s: string) => void;
}

export default function Hero({ activeSector, setActiveSector }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <GlobalBackground />
      <GroundPlane />

      <div className="relative z-10 mx-auto max-w-[1280px] px-14 pt-28 max-md:px-5 max-md:pt-20">
        {/* Grid: texte + mockup */}
        <div className="grid items-center gap-12 pt-5 lg:grid-cols-[1.1fr_1fr]">
          {/* Colonne gauche : texte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>AGENCE IA · POUR LES TPE/PME</Eyebrow>

            <h1 className="mt-6 text-[clamp(36px,6.2vw,80px)] font-normal leading-[0.98] tracking-[-0.045em] text-ink">
              Une solution IA{" "}
              <span className="font-serif italic text-orange-500">
                taillée
              </span>
              <br />
              pour votre métier.
            </h1>

            <p className="mt-7 max-w-[540px] text-[19px] leading-[1.6] text-ink-soft max-md:text-base">
              Finis les tâches répétitives qui dévorent vos journées : devis à
              refaire, mails qui s&apos;empilent, relances oubliées, données à
              saisir à la main{" "}
              <a
                href="#sector-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("sector-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="whitespace-nowrap border-b border-current font-serif text-lg italic text-orange-700 no-underline"
              >
                voir plus →
              </a>
              .
              <br />
              <br />
              Vos équipes récupèrent{" "}
              <strong className="font-medium text-ink">
                15 à 20 heures par semaine
              </strong>{" "}
              pour ce qui crée vraiment de la valeur. Et vous, dirigeant, vous
              retrouvez l&apos;espace pour piloter, développer, faire la
              stratégie.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-9 border-t border-border-strong/40 pt-6">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="whitespace-nowrap text-[28px] font-medium tracking-[-0.025em] text-ink">
                    {s.v}
                  </div>
                  <div className="mt-1.5 whitespace-pre-line font-mono text-[10.5px] uppercase leading-[1.4] tracking-[0.1em] text-text-muted">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite : mockup */}
          <motion.div
            className="flex justify-center max-lg:mt-0 min-w-0"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <HeroMockupSplit />
          </motion.div>
        </div>

        {/* Sélecteur de secteur */}
        <motion.div
          className="relative z-[2] mx-auto mt-[120px] max-w-[1280px] text-center max-md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 font-serif text-2xl italic text-ink-soft">
            Vous êtes dans quel secteur ?
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {SECTORS.map((s) => (
              <Pill
                key={s.key}
                active={activeSector === s.key}
                onClick={() => {
                  setActiveSector(s.key);
                  setTimeout(
                    () =>
                      document
                        .getElementById("sector-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        }),
                    50
                  );
                }}
              >
                {s.label}
              </Pill>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

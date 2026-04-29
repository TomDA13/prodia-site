"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/tom-da-rold/30-minute-meeting-clone";

/* ============================================
   Data
   ============================================ */
interface Feature {
  title: string;
  desc: string;
  mockup: {
    channel: string;
    ago: string;
    label: string;
    lines: React.ReactNode;
    cta: string;
    ctaSecondary?: string;
  };
}

interface SectorData {
  title: string;
  kicker: string;
  sub: string;
  hue: number;
  photoUrl: string;
  photoCredit: string;
  tools: string[];
  features: Feature[];
}

const SECTOR_DATA: Record<string, SectorData> = {
  commerce: {
    title: "E-commerce & marques",
    kicker: "SAV multilingue, veille concurrentielle",
    sub: "Marques DTC, sites de vente, retail digital. L'agent gère le SAV dans le ton de la marque et surveille vos concurrents en continu.",
    hue: 50,
    photoUrl: "/ecom-photo.png",
    photoCredit: "Atelier de packaging · marque DTC",
    tools: ["Shopify", "Gorgias", "Zendesk", "Klaviyo", "Instagram", "Meta Ads", "Google Analytics", "Amazon"],
    features: [
      {
        title: "SAV multilingue",
        desc: "Drafts dans le ton de la marque, 6 langues, vérif commande Shopify avant réponse. Vous validez d'un clic.",
        mockup: {
          channel: "#sav", ago: "il y a 22 sec",
          label: "Mail · Sofia M. (italien)",
          lines: <>
            <em className="text-text-muted">« Ho ordinato la S ma vorrei la M »</em><br /><br />
            Vérif Shopify : commande <strong>L</strong>, pas S. Draft empathique préparé qui rappelle la taille réelle + propose renvoi.
          </>,
          cta: "Relire le draft", ctaSecondary: "Notifier action"
        }
      },
      {
        title: "Veille concurrentielle",
        desc: "Prix, nouveautés, promos, posts des marques que vous suivez. Synthèse hebdo dans votre boîte.",
        mockup: {
          channel: "#veille", ago: "lundi 09:00",
          label: "Synthèse · 7 marques suivies",
          lines: <>
            <strong>3 baisses de prix</strong> détectées (− 12% en moy.) · <strong>2 nouveaux produits</strong> chez Maison K. · 1 promo flash chez votre n°1.<br /><br />
            Détail dans le Sheet partagé.
          </>,
          cta: "Ouvrir la synthèse"
        }
      }
    ]
  },
  distrib: {
    title: "Distributeurs & négoce",
    kicker: "AO publics, devis express",
    sub: "Vos commerciaux passent leurs journées à trier des AO et faire des devis. L'agent reprend ces tâches, eux retournent vendre.",
    hue: 35,
    photoUrl: "/distrib-photo.png",
    photoCredit: "Plateau commercial · distributeur B2B",
    tools: ["BOAMP", "TED", "Sage", "EBP", "Pennylane", "Excel", "Outlook", "EDI"],
    features: [
      {
        title: "Veille appels d'offres",
        desc: "BOAMP scanné en continu, score de fit calculé, brouillon de réponse prêt à relire.",
        mockup: {
          channel: "#ao-veille", ago: "il y a 38 sec",
          label: "Mairie de Roubaix · AO publié",
          lines: <>
            <strong>Fit 87/100</strong> · 240 k€ · deadline 18 j.<br />
            J&apos;ai pioché dans 3 dossiers similaires gagnés. Brouillon de réponse prêt.
          </>,
          cta: "Ouvrir le brouillon", ctaSecondary: "Pas pour nous"
        }
      },
      {
        title: "Devis express",
        desc: "Depuis un mail ou un appel client : devis prérempli en 30 sec aux grilles maison.",
        mockup: {
          channel: "#devis", ago: "il y a 1 min",
          label: "Mail · Mr. Lambert · DemandeDevis",
          lines: <>
            <em className="text-text-muted">« 200 ml de tube cuivre Ø22, livraison Lyon »</em><br /><br />
            Devis prérempli : <strong>1 840 € HT</strong> · délai 4 j · grille Plomberie 2026.
          </>,
          cta: "Relire & envoyer"
        }
      }
    ]
  },
  industrie: {
    title: "Fabricants & industriels",
    kicker: "Devis techniques, marchés cadres",
    sub: "PME industrielles, ateliers, sous-traitants. L'agent lit vos cahiers des charges et candidate aux marchés publics adaptés.",
    hue: 25,
    photoUrl: "/industrie-photo.png",
    photoCredit: "Atelier de production · PME industrielle",
    tools: ["SolidWorks", "Sage", "BOAMP", "Achatpublic", "Notion", "SharePoint", "Excel", "Outlook"],
    features: [
      {
        title: "Devis techniques complexes",
        desc: "Depuis un cahier des charges PDF : devis chiffré aux grilles maison, plan de charge à jour.",
        mockup: {
          channel: "#devis-tech", ago: "il y a 3 min",
          label: "CdC reçu · Pièce mécanique X-240",
          lines: <>
            PDF 14 pages analysé · <strong>32 références</strong> identifiées · matière : alu 6082-T6.<br />
            Devis chiffré : <strong>18 420 € HT</strong> · délai 6 sem.
          </>,
          cta: "Ouvrir le devis"
        }
      },
      {
        title: "AO industriels & marchés cadres",
        desc: "Veille ciblée sur vos métiers, qualification, dossiers de candidature préremplis.",
        mockup: {
          channel: "#marches", ago: "il y a 1 h",
          label: "SNCF Réseau · AO marché-cadre",
          lines: <>
            Pièces de rechange · <strong>fit 92/100</strong> · 4 ans · 1,2 M€.<br />
            Dossier admin prérempli depuis vos références. Plus que la partie technique à compléter.
          </>,
          cta: "Voir le dossier"
        }
      }
    ]
  },
  agence: {
    title: "Agences & studios",
    kicker: "Suivi de projet, compte-rendu de réu",
    sub: "Agences créa, studios, conseil. L'agent capte tout ce qui se dit et sait où en est chaque projet, vous arrivez en réu avec tout en main.",
    hue: 280,
    photoUrl: "/agence-photo.png",
    photoCredit: "Studio créatif · plateau ouvert",
    tools: ["Notion", "Slack", "Asana", "Linear", "Google Meet", "Zoom", "Gmail", "Calendly"],
    features: [
      {
        title: "Suivi de projet intelligent",
        desc: "L'agent capte mails, Slack, réunions. Il sait où on en est, ce qui bloque, qui doit faire quoi sur chaque projet.",
        mockup: {
          channel: "#projets", ago: "ce matin 09:12",
          label: "Brief · Refonte Maison K.",
          lines: <>
            Statut : <strong>en attente</strong> · bloqué côté client (validation maquette V3, 6 jours).<br />
            Aurélien a relancé hier. À pousser ce matin.
          </>,
          cta: "Voir le projet"
        }
      },
      {
        title: "Génération de leads semi-automatique",
        desc: "L'agent fait tourner votre process de prospection sur vos outils existants. Recap hebdo dans votre boîte. Vous n'avez plus qu'à appeler.",
        mockup: {
          channel: "#leads", ago: "lundi 09:00",
          label: "Recap hebdo · 12 nouveaux leads qualifiés",
          lines: <>
            Process de prospection joué sur vos outils habituels (LinkedIn, Apollo, CRM). <strong>12 leads qualifiés</strong> selon vos critères, score de fit calculé.<br /><br />
            Plus qu&apos;à prospecter.
          </>,
          cta: "Ouvrir la liste"
        }
      }
    ]
  },
};

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

function ActionCard({
  channel, label, ago, lines, cta, ctaSecondary,
}: {
  channel: string; label: string; ago: string;
  lines: React.ReactNode; cta: string; ctaSecondary?: string;
}) {
  return (
    <div className="w-[340px] max-w-full rounded-xl border border-border bg-white p-4 shadow-lg">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-ink">
          <div className="h-3 w-3 rounded-[3px] bg-orange-500" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[12.5px] font-semibold text-ink">
            Agent Prodia <span className="font-mono text-[10px] font-medium text-orange-700">{channel}</span>
          </div>
          <div className="font-mono text-[9.5px] tracking-[0.04em] text-text-muted">{ago}</div>
        </div>
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: "oklch(0.62 0.14 150)", boxShadow: "0 0 0 3px oklch(0.62 0.14 150 / 0.18)" }} />
      </div>
      {label && <div className="mb-2 text-[13.5px] font-medium tracking-[-0.01em] text-ink">{label}</div>}
      <div className="text-[12.5px] leading-[1.55] text-text">{lines}</div>
      {(cta || ctaSecondary) && (
        <div className="mt-3 flex gap-1.5 border-t border-border pt-3">
          {cta && <span className="rounded-full bg-ink px-[11px] py-1.5 text-[11px] font-medium text-white">{cta}</span>}
          {ctaSecondary && <span className="rounded-full border border-border bg-bg-subtle px-[11px] py-1.5 text-[11px] font-medium text-ink">{ctaSecondary}</span>}
        </div>
      )}
    </div>
  );
}

function PhotoPlaceholder({ label, hue, src }: { label: string; hue: number; src: string }) {
  return (
    <div
      className="relative w-full rounded-[18px] p-2.5"
      style={{
        aspectRatio: "16/10",
        background: `linear-gradient(135deg, oklch(0.78 0.10 ${hue}), oklch(0.55 0.16 ${hue - 5}) 60%, oklch(0.32 0.10 ${hue - 10}))`,
        boxShadow: `0 30px 60px -25px oklch(0.50 0.16 ${hue - 5} / 0.55)`,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[11px]" style={{ background: `oklch(0.20 0.02 60)` }}>
        <Image src={src} alt={label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, transparent 60%, oklch(0.20 0.10 ${hue - 5} / 0.35))` }} />
        <div className="absolute left-3.5 bottom-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/[0.92]" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          ◯ {label}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Main
   ============================================ */
export default function SectorSection({ activeSector }: { activeSector: string }) {
  const d = SECTOR_DATA[activeSector];
  if (!d) return null;

  return (
    <section id="sector-section" className="relative z-[2] px-14 py-[140px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Intro */}
        <motion.div
          key={activeSector}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 grid items-end gap-16 lg:grid-cols-[1fr_1.1fr]">
            <PhotoPlaceholder label={d.photoCredit} hue={d.hue} src={d.photoUrl} />
            <div>
              <Eyebrow>SECTEUR · {d.kicker.toUpperCase()}</Eyebrow>
              <h2 className="mt-[18px] text-[clamp(36px,5vw,64px)] font-normal leading-[0.95] tracking-[-0.04em] text-ink">
                {d.title}
              </h2>
              <p className="mt-[22px] max-w-[520px] text-[17px] leading-[1.6] text-ink-soft">{d.sub}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12">
            <div className="mb-3 flex flex-wrap items-baseline gap-3.5">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-text-muted">◯ EXEMPLES · 2 CAS PARMI D&apos;AUTRES</span>
              <span className="font-serif text-[17px] italic text-ink-soft">juste pour donner une idée. On part toujours de votre quotidien.</span>
            </div>
            {d.features.map((f, i) => (
              <div
                key={i}
                className="grid items-center gap-12 border-t py-11 lg:grid-cols-2"
                style={{ borderColor: "oklch(0.88 0.005 75 / 0.6)" }}
              >
                <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                  <div className="mb-3.5 flex items-baseline gap-3.5">
                    <span className="font-serif text-[40px] italic leading-none text-orange-500">0{i + 1}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">EXEMPLE {i + 1} / 2</span>
                  </div>
                  <div className="mb-3.5 text-[30px] font-medium leading-[1.15] tracking-[-0.025em] text-ink">{f.title}</div>
                  <div className="max-w-[440px] text-[15.5px] leading-[1.6] text-ink-soft">{f.desc}</div>
                </div>
                <div style={{ order: i % 2 === 1 ? 1 : 2, transform: i % 2 === 1 ? "rotate(-1deg)" : "rotate(1deg)" }}>
                  <ActionCard {...f.mockup} />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-16 rounded-[14px] border border-border/70 bg-white/55 px-9 py-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_2fr]">
              <div>
                <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-text-muted">OUTILS INTÉGRÉS</div>
                <div className="text-lg font-medium tracking-[-0.015em] text-ink">L&apos;agent pilote vos outils existants.</div>
                <div className="mt-1.5 text-sm text-ink-soft">Pas de nouveau SaaS, pas de migration.</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.tools.map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-[6px] border border-border/80 bg-white/70 px-2.5 py-[5px] font-mono text-[11.5px] tracking-[-0.005em] text-ink">
                    <span className="h-[5px] w-[5px] rounded-full bg-orange-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-ink px-7 py-4 text-[14.5px] font-medium text-white no-underline transition-opacity hover:opacity-90">
              Discuter de mon cas →
            </a>
            <span className="font-serif text-base italic text-ink-soft">30 min · sans engagement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

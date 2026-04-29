"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/tom-da-rold/30-minute-meeting-clone";

/* ============================================
   Data
   ============================================ */
interface KPI { value: string; label: string; }
interface Deliverable { t: string; d: string; }
interface Result { k: string; l: string; v: string; }
interface DetailSection {
  title: string;
  lead?: string;
  body?: string[];
  deliverables?: Deliverable[];
  results?: Result[];
}
interface CaseData {
  id: string;
  brand: string;
  sector: string;
  tagline: string;
  leader: string;
  role: string;
  portrait: string;
  teamPhoto: string;
  teamPhotoPosition: string;
  accroche: string;
  tags: string[];
  kpis: KPI[];
  detail: {
    title: string;
    subtitle: string;
    sections: DetailSection[];
    quote?: { text: string };
  };
}

const CASE_DATA: CaseData[] = [
  {
    id: "localizz",
    brand: "Localizz",
    sector: "Approvisionnement local · Restauration",
    tagline: "Distributeur de produits locaux · restauration collective",
    leader: "Olivier Da Rold",
    role: "Fondateur",
    portrait: "/localizz-portrait.png",
    teamPhoto: "/localizz-team.png",
    teamPhotoPosition: "center 60%",
    accroche: "9 personnes, 250+ AO traités par an. On a libéré le commerce de la paperasse.",
    tags: ["Veille AO", "Catalogue", "Newsletter", "+4"],
    kpis: [
      { value: "30h", label: "gagnées / mois" },
      { value: "250+", label: "AO traités" },
      { value: "9", label: "salariés" },
    ],
    detail: {
      title: "30 heures par mois rendues au commerce.",
      subtitle: "Distributeur spécialisé en circuits courts. Trop de paperasse, trop de tableurs, trop d'AO ratés faute de temps. On a redonné aux commerciaux le temps de vendre.",
      sections: [
        {
          title: "Le contexte",
          lead: "Localizz distribue des produits locaux à des cantines, restaurants et collectivités du Sud-Est. Une équipe de 9, dont 2 commerciaux qui passent leurs journées entre devis, suivi de catalogue, AO et relances clients.",
          body: [
            "Localizz connecte les producteurs locaux de la région PACA avec les restaurateurs, cantines et collectivités. Une équipe de 9 personnes qui jongle entre veille des AO, gestion catalogue, suivi commande et relation client.",
            "Le constat à notre arrivée : la structure commerciale tournait, mais le commerce lui-même se faisait par à-coups. Chaque AO publié représentait un dossier de plusieurs heures à monter. La data fournisseur arrivait par mail dans des formats incohérents, ressaisie à la main dans Excel. Les newsletters mensuelles étaient repoussées de semaine en semaine.",
            "L'enjeu n'était pas de remplacer les humains. C'était de leur rendre le temps de faire le métier qu'ils étaient censés faire : vendre, conseiller, fidéliser.",
          ],
        },
        {
          title: "Ce qu'on a mis en place",
          lead: "Sept agents, déployés en 6 semaines, branchés directement aux outils existants. Pas de SaaS supplémentaire, pas de nouvelle interface à apprendre.",
          deliverables: [
            { t: "Veille & qualif AO", d: "BOAMP scanné en continu. L'agent score chaque AO sur le fit Localizz et alerte sur Slack uniquement les pertinents." },
            { t: "Aide à la réponse", d: "Pour les AO qualifiés, l'agent prépare un brouillon de réponse avec les pièces administratives et un chiffrage initial." },
            { t: "Catalogue + devis", d: "Synchro quotidienne avec les fournisseurs. Devis prérempli en 30 secondes depuis un mail ou un appel." },
            { t: "Notifications intelligentes", d: "Alertes commerciales contextualisées : ruptures, hausses de prix, opportunités saisonnières." },
            { t: "Exploitation de data", d: "Tableaux Excel remplis automatiquement à partir de sources hétérogènes (mails fournisseurs, exports logiciels métier)." },
            { t: "Dashboard prévisionnel", d: "Vue claire des volumes attendus, des marges par client, des AO en cours et de leur deadline." },
            { t: "Newsletter & relances", d: "Rédaction et envoi des newsletters dans le ton maison. Relances clients automatisées après devis." },
          ],
        },
        {
          title: "Les résultats",
          lead: "Les commerciaux ont retrouvé leur métier. Le dirigeant pilote sur des chiffres au lieu de courir après l'info.",
          results: [
            { k: "Temps", l: "Heures rendues au commerce, par mois", v: "30 h" },
            { k: "Volume", l: "Appels d'offres traités sur l'année", v: "250+" },
            { k: "Catalogue", l: "Mise à jour fournisseurs", v: "1×/jour" },
            { k: "Newsletter", l: "Avant : 1/mois (parfois). Après :", v: "4/sem" },
            { k: "Adoption", l: "Salariés qui utilisent l'agent au quotidien", v: "9/9" },
          ],
        },
      ],
      quote: { text: "On a arrêté de subir les AO. Maintenant on choisit ceux qu'on prend. Mes commerciaux passent enfin leurs journées à parler aux clients." },
    },
  },
  {
    id: "rookie",
    brand: "Rookie Agency",
    sector: "Marketing d'influence",
    tagline: "Agence de marketing d'influence",
    leader: "Antoine Morot",
    role: "Fondateur",
    portrait: "/rookie-portrait.png",
    teamPhoto: "/rookie-team.jpg",
    teamPhotoPosition: "center center",
    accroche: "40 leads qualifiés chaque semaine, sans qu'un humain ne touche au process.",
    tags: ["Lead gen", "Pipedrive", "Suivi projet"],
    kpis: [
      { value: "10h", label: "gagnées / sem" },
      { value: "40", label: "leads / sem" },
      { value: "100%", label: "automatisé" },
    ],
    detail: {
      title: "Une machine à leads, et un cerveau de projet qui n'oublie rien.",
      subtitle: "Agence créa qui scale ses marques DTC. La prospection mangeait des journées entières, et chaque projet client glissait entre WhatsApp, mails et réunions. On a tout ramené en un endroit.",
      sections: [
        {
          title: "Le contexte",
          lead: "Rookie Agency est une agence de marketing d'influence qui orchestre des campagnes créateurs pour des marques DTC. Petite équipe, beaucoup de prospection en amont, et énormément d'inputs hétérogènes par projet une fois les campagnes lancées.",
          body: [
            "Deux problèmes critiques à notre arrivée : la prospection commerciale prenait plusieurs jours par semaine, à cheval sur 3-4 outils différents, et reposait entièrement sur la disponibilité du fondateur. Et côté delivery, chaque projet client générait un flux d'infos ingérable : briefs sur WhatsApp, fichiers par mail, retours en réunion, validations sur Slack. Rien n'était centralisé, et il fallait constamment relancer pour ne rien oublier.",
            "L'objectif : faire tourner la machine sans le fondateur, et sécuriser la qualité de delivery sur chaque projet.",
          ],
        },
        {
          title: "Ce qu'on a mis en place",
          lead: "Deux agents, deux problèmes résolus. L'un côté commerce, l'autre côté delivery.",
          deliverables: [
            { t: "Generation de lead automatisée", d: "Un process qui prenait plusieurs jours par semaine, déclenché tous les jours à heure fixe. L'agent identifie les bonnes cibles via un premier SaaS." },
            { t: "Enrichissement LinkedIn", d: "Pour chaque lead, l'agent retrouve les contacts les plus pertinents de la marque sur LinkedIn et qualifie le décideur." },
            { t: "Push Pipedrive", d: "Les leads enrichis sont écrits directement dans Pipedrive, prêts pour le cold call. Le commercial ouvre son CRM, tout est déjà là." },
            { t: "Architecture de suivi de projet", d: "Toutes les inputs d'un projet (WhatsApp, mail, Slack, réunions) remontent en un endroit. L'agent met à jour, alerte sur les actions à mener, creuse quand il manque un info." },
          ],
        },
        {
          title: "Les résultats",
          lead: "La prospection tourne sans intervention humaine. Et plus aucun projet ne déraille faute d'info.",
          results: [
            { k: "Temps", l: "Heures rendues au business par semaine", v: "10 h" },
            { k: "Volume", l: "Leads enrichis chaque semaine", v: "40" },
            { k: "Process", l: "Du sourcing à la fiche Pipedrive", v: "100%" },
            { k: "Conversion", l: "Le commercial part sur des fiches qualifiées", v: "↑↑" },
            { k: "Suivi projet", l: "Inputs centralisés, plus rien ne glisse", v: "1 hub" },
          ],
        },
      ],
      quote: { text: "Je passais mes lundis matin à monter ma liste de prospects. Maintenant ma liste est prête à 8h, qualifiée et dans Pipedrive. Je commence ma semaine en appelant." },
    },
  },
];

/* ============================================
   Overlay
   ============================================ */
function CaseDetailOverlay({ data, onClose }: { data: CaseData; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => { if (e.key === "Escape") onClose(); }, [onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [handleKey]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-5 pt-10 backdrop-blur-[6px]" style={{ background: "rgba(20,15,8,0.55)" }} onClick={onClose}>
      <div className="relative mb-15 w-full max-w-[1100px] rounded-[18px] shadow-2xl" style={{ background: "oklch(0.985 0.008 75)" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="fixed top-7 right-7 z-[110] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-none bg-ink text-xl text-white shadow-lg">×</button>

        {/* Hero */}
        <div className="px-16 pt-14 max-md:px-6">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-orange-700">◯ ÉTUDE DE CAS · {data.brand.toUpperCase()}</div>
          <h1 className="m-0 max-w-[800px] text-[clamp(32px,4.5vw,60px)] font-normal leading-[0.96] tracking-[-0.04em] text-ink">{data.detail.title}</h1>
          <p className="mt-6 max-w-[720px] font-serif text-[22px] italic leading-[1.4] tracking-[-0.005em] text-ink-soft">{data.detail.subtitle}</p>
          <div className="mt-12 grid gap-6 border-y border-border py-8" style={{ gridTemplateColumns: `repeat(${data.kpis.length}, 1fr)` }}>
            {data.kpis.map((k, i) => (
              <div key={i}>
                <div className="font-serif text-[56px] italic leading-none tracking-[-0.02em] text-orange-500">{k.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">{k.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="px-16 pt-15 max-md:px-6">
          {data.detail.sections.map((s, i) => (
            <section key={i} className="mb-16 grid items-start gap-8 lg:grid-cols-[120px_1fr]">
              <div className="font-serif text-[64px] italic leading-none tracking-[-0.02em] text-orange-500">0{i + 1}</div>
              <div>
                <h2 className="mt-2 mb-[18px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ink">{s.title}</h2>
                {s.lead && <p className="mb-[22px] max-w-[720px] text-[17px] leading-[1.6] text-ink">{s.lead}</p>}
                {s.body?.map((p, j) => <p key={j} className="mb-3.5 max-w-[720px] text-[15.5px] leading-[1.65] text-ink-soft">{p}</p>)}
                {s.deliverables && (
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {s.deliverables.map((d, j) => (
                      <div key={j} className="rounded-[10px] border border-border bg-white p-4">
                        <div className="mb-1.5 flex items-baseline gap-2">
                          <span className="font-mono text-[10px] tracking-[0.12em] text-orange-700">↳ {String(j + 1).padStart(2, "0")}</span>
                          <span className="text-[15px] font-medium text-ink">{d.t}</span>
                        </div>
                        <div className="text-[13px] leading-[1.5] text-ink-soft">{d.d}</div>
                      </div>
                    ))}
                  </div>
                )}
                {s.results && (
                  <div className="mt-5 flex flex-col">
                    {s.results.map((r, j) => (
                      <div key={j} className="grid items-baseline gap-[18px] border-b border-border py-4 last:border-0" style={{ gridTemplateColumns: "auto 1fr auto" }}>
                        <span className="w-20 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">↳ {r.k}</span>
                        <span className="text-[15px] text-ink">{r.l}</span>
                        <span className="font-serif text-[28px] italic leading-none tracking-[-0.02em] text-orange-500">{r.v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Quote */}
        {data.detail.quote && (
          <div className="mx-16 mb-15 rounded-[14px] bg-ink p-14 text-white max-md:mx-6 max-md:p-8">
            <blockquote className="m-0 max-w-[800px] font-serif text-[28px] italic leading-[1.4] tracking-[-0.015em]">
              « {data.detail.quote.text} »
            </blockquote>
            <div className="mt-7 flex items-center gap-3.5">
              <Image src={data.portrait} alt={data.leader} width={44} height={44} className="rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">{data.leader}</div>
                <div className="mt-0.5 font-mono text-[10.5px] tracking-[0.08em] text-white/55">{data.role} · {data.brand}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================
   Card
   ============================================ */
function CaseCard({ data, onOpen }: { data: CaseData; onOpen: (id: string) => void }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-transform duration-250 hover:-translate-y-[3px] hover:shadow-xl">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10", background: "oklch(0.95 0.01 70)" }}>
        <Image src={data.teamPhoto} alt={`Équipe ${data.brand}`} fill className="object-cover" style={{ objectPosition: data.teamPhotoPosition }} sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute top-4 left-4 rounded-full bg-white/[0.94] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink backdrop-blur-[6px]">
          ◯ {data.sector}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[22px] p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="text-[30px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">{data.brand}</div>
            <div className="mt-1 text-sm text-ink-soft">{data.tagline}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Image src={data.portrait} alt={data.leader} width={44} height={44} className="rounded-full border-2 border-white object-cover shadow-sm" />
            <div className="text-[11.5px] leading-[1.3]">
              <div className="font-medium text-ink">{data.leader}</div>
              <div className="text-text-muted">{data.role}</div>
            </div>
          </div>
        </div>
        <p className="m-0 font-serif text-[22px] italic leading-[1.35] tracking-[-0.01em] text-ink">« {data.accroche} »</p>
        <div className="grid gap-3.5 border-y border-border py-5" style={{ gridTemplateColumns: `repeat(${data.kpis.length}, 1fr)` }}>
          {data.kpis.map((k, i) => (
            <div key={i}>
              <div className="font-serif text-4xl italic leading-none tracking-[-0.02em] text-orange-500">{k.value}</div>
              <div className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-text-muted">{k.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {data.tags.slice(0, 3).map((t, i) => (
              <span key={i} className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 font-mono text-[10px] tracking-[0.04em] text-ink-soft">{t}</span>
            ))}
          </div>
          <button onClick={() => onOpen(data.id)} className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border-none bg-ink px-[18px] py-2.5 text-[13px] font-medium text-white">
            Voir le détail <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ============================================
   Main
   ============================================ */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

export default function CaseStudiesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const opened = openId ? CASE_DATA.find((c) => c.id === openId) : null;

  return (
    <section id="case-studies" className="relative z-[2] px-14 py-[140px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>ÉTUDES DE CAS</Eyebrow>
              <h2 className="mt-5 max-w-[900px] text-[clamp(36px,5vw,64px)] font-normal leading-[0.96] tracking-[-0.04em] text-ink">
                <span className="font-serif italic">Deux PME</span>, deux métiers,<br />une même méthode.
              </h2>
            </div>
            <div className="text-right font-mono text-[11px] uppercase leading-[1.6] tracking-[0.14em] text-text-muted">
              ↳ Cliquez pour le détail<br />
              <span className="text-orange-700">2 cas affichés</span> · plus à venir
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CASE_DATA.map((c) => <CaseCard key={c.id} data={c} onOpen={setOpenId} />)}
          </div>

          {/* CTA */}
          <div className="mt-16 grid items-center gap-10 rounded-2xl bg-ink p-14 text-white max-md:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-orange-400">↳ ET VOUS ?</div>
              <h3 className="m-0 max-w-[700px] text-[clamp(28px,3.5vw,44px)] font-normal leading-none tracking-[-0.03em]">
                Je veux <span className="font-serif italic text-orange-400">faire partie</span> de la prochaine étude de cas.
              </h3>
              <p className="mt-[18px] max-w-[580px] text-base leading-[1.55] text-white/[0.72]">
                On démarre par un échange de 30 minutes, gratuit. À la fin, vous saurez si Prodia peut vraiment faire quelque chose pour votre métier, et on vous propose la suite.
              </p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-orange-500 px-[30px] py-[18px] text-[15.5px] font-medium text-white no-underline shadow-orange">
              Je passe à l&apos;action <span className="text-[17px]">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {opened && <CaseDetailOverlay data={opened} onClose={() => setOpenId(null)} />}
    </section>
  );
}

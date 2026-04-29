import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Prodia",
  description: "Mentions légales, politique de confidentialité et conditions d'utilisation du site prodia.io.",
};

export default function MentionsLegales() {
  return (
    <div className="relative z-10 min-h-screen bg-bg">
      {/* Nav simple */}
      <nav className="flex items-center justify-between px-14 py-7 max-md:px-5">
        <Link href="/" className="text-[19px] font-semibold tracking-[-0.025em] text-ink no-underline">
          Prodia<span className="text-orange-500">.</span>
        </Link>
        <Link href="/" className="text-sm text-ink no-underline transition-colors hover:text-orange-700">
          ← Retour au site
        </Link>
      </nav>

      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-8">
        <h1 className="mb-2 text-[clamp(32px,5vw,48px)] font-normal leading-[1] tracking-[-0.035em] text-ink">
          Mentions légales
        </h1>
        <p className="mb-16 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
          Dernière mise à jour : 29 avril 2026
        </p>

        {/* ---- 1. Éditeur ---- */}
        <Section n="01" title="Éditeur du site">
          <p>Le site <strong>prodia.io</strong> est édité par :</p>
          <ul className="mt-3 space-y-1.5">
            <li><strong>Dénomination :</strong> Prodia Lab</li>
            <li><strong>Statut :</strong> Entreprise individuelle (auto-entrepreneur)</li>
            <li><strong>Responsable de la publication :</strong> Tom Da Rold</li>
            <li><strong>SIRET :</strong> 978 397 297 000 18</li>
            <li><strong>Adresse :</strong> disponible sur demande — <a href="mailto:tom.darold6@gmail.com" className="text-orange-700 no-underline hover:underline">tom.darold6@gmail.com</a></li>
            <li><strong>Téléphone :</strong> <a href="tel:+33627160669" className="text-orange-700 no-underline hover:underline">+33 6 27 16 06 69</a></li>
            <li><strong>Email :</strong> <a href="mailto:tom.darold6@gmail.com" className="text-orange-700 no-underline hover:underline">tom.darold6@gmail.com</a></li>
          </ul>
        </Section>

        {/* ---- 2. Hébergeur ---- */}
        <Section n="02" title="Hébergement">
          <p>Le site est hébergé par :</p>
          <ul className="mt-3 space-y-1.5">
            <li><strong>Vercel Inc.</strong></li>
            <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange-700 no-underline hover:underline">vercel.com</a></li>
          </ul>
        </Section>

        {/* ---- 3. Activité ---- */}
        <Section n="03" title="Activité">
          <p>
            Prodia Lab est une agence spécialisée dans la conception, le développement et l&apos;intégration de solutions d&apos;intelligence artificielle (agents IA, automatisation de processus, outils métier) à destination des TPE et PME.
          </p>
          <p>
            Les prestations incluent notamment : audit et diagnostic IA, conception d&apos;agents intelligents sur-mesure, intégration aux outils existants (CRM, ERP, messagerie, etc.), formation des équipes et accompagnement à l&apos;adoption.
          </p>
          <p>
            En tant qu&apos;auto-entrepreneur, Prodia Lab n&apos;est pas assujetti à la TVA (article 293 B du CGI). Les prix affichés sont donc des prix nets.
          </p>
        </Section>

        {/* ---- 4. Propriété intellectuelle ---- */}
        <Section n="04" title="Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu du site prodia.io (textes, images, illustrations, maquettes, logos, icônes, code source, design) est la propriété exclusive de Prodia Lab / Tom Da Rold, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation écrite préalable de Prodia Lab.
          </p>
          <p>
            Les logos et marques de tiers (clients, partenaires, outils) mentionnés sur le site sont la propriété de leurs détenteurs respectifs et sont utilisés à titre informatif.
          </p>
        </Section>

        {/* ---- 5. Données personnelles ---- */}
        <Section n="05" title="Protection des données personnelles">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-medium text-ink">Données collectées</h3>
          <p>Le site peut collecter les données suivantes :</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li><strong>Via le lien de contact (mailto) :</strong> nom, adresse email, contenu du message — uniquement si vous nous contactez volontairement.</li>
            <li><strong>Via Calendly :</strong> nom, email, créneau choisi — lors de la prise de rendez-vous. Ces données sont traitées par Calendly LLC conformément à leur propre politique de confidentialité.</li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-medium text-ink">Finalité du traitement</h3>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Répondre à vos demandes de contact</li>
            <li>Organiser et gérer les rendez-vous</li>
            <li>Assurer le suivi commercial des prestations</li>
          </ul>
          <p className="mt-3">
            Aucune donnée personnelle n&apos;est vendue, cédée ou transmise à des tiers à des fins commerciales.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-medium text-ink">Durée de conservation</h3>
          <p>
            Les données de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier échange, sauf obligation légale contraire.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-medium text-ink">Exercer vos droits</h3>
          <p>
            Pour exercer vos droits (accès, rectification, suppression, opposition), contactez-nous à : <a href="mailto:tom.darold6@gmail.com" className="text-orange-700 no-underline hover:underline">tom.darold6@gmail.com</a>.
          </p>
          <p>
            En cas de litige, vous pouvez saisir la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-orange-700 no-underline hover:underline">www.cnil.fr</a>.
          </p>
        </Section>

        {/* ---- 6. Cookies & Analytics ---- */}
        <Section n="06" title="Cookies & mesure d'audience">
          <p>
            Le site utilise <strong>Plausible Analytics</strong>, un outil de mesure d&apos;audience respectueux de la vie privée, qui <strong>ne dépose aucun cookie</strong> et <strong>ne collecte aucune donnée personnelle</strong>.
          </p>
          <p>
            Plausible est conforme au RGPD et aux recommandations de la CNIL. Il ne nécessite pas de bandeau de consentement cookies.
          </p>
          <p>
            Les données mesurées sont agrégées et anonymes : pages vues, sources de trafic, pays, appareil. Aucun tracking individuel n&apos;est effectué.
          </p>
          <p>
            Le widget Calendly intégré peut utiliser ses propres cookies pour assurer son fonctionnement. Consultez la <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-700 no-underline hover:underline">politique de confidentialité de Calendly</a> pour plus d&apos;informations.
          </p>
        </Section>

        {/* ---- 7. Responsabilité ---- */}
        <Section n="07" title="Limitation de responsabilité">
          <p>
            Les informations présentes sur le site sont fournies à titre indicatif et sont susceptibles d&apos;évoluer. Prodia Lab s&apos;efforce de les maintenir à jour mais ne saurait garantir l&apos;exactitude, la complétude ou l&apos;actualité de l&apos;ensemble des informations.
          </p>
          <p>
            Prodia Lab décline toute responsabilité en cas d&apos;interruption du site, de bugs ou d&apos;incompatibilités techniques.
          </p>
          <p>
            Les résultats présentés dans les études de cas sont spécifiques aux clients concernés et ne constituent pas une garantie de résultats similaires.
          </p>
        </Section>

        {/* ---- 8. Liens ---- */}
        <Section n="08" title="Liens externes">
          <p>
            Le site peut contenir des liens vers des sites tiers (Calendly, LinkedIn, etc.). Prodia Lab n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de protection des données.
          </p>
        </Section>

        {/* ---- 9. Droit applicable ---- */}
        <Section n="09" title="Droit applicable">
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de Prodia Lab.
          </p>
        </Section>

        {/* Footer */}
        <div className="mt-20 border-t pt-8 font-mono text-[11px] tracking-[0.06em] text-text-muted" style={{ borderColor: "oklch(0.85 0.005 75 / 0.5)" }}>
          © 2026 Prodia Lab · Tom Da Rold
        </div>
      </main>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-serif text-[40px] italic leading-none text-orange-500">{n}</span>
        <h2 className="text-[24px] font-medium tracking-[-0.02em] text-ink">{title}</h2>
      </div>
      <div className="space-y-3 text-[15px] leading-[1.65] text-ink-soft">
        {children}
      </div>
    </section>
  );
}

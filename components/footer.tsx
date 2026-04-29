"use client";

const CALENDLY_URL = "https://calendly.com/tom-da-rold/30-minute-meeting-clone";
const LINKEDIN_URL = "https://www.linkedin.com/in/tom-da-rold-20177b1b9/";
const CONTACT_EMAIL = "tom.darold6@gmail.com";
const CONTACT_PHONE = "+33 6 27 16 06 69";
const CONTACT_PHONE_HREF = "+33627160669";

function smoothTo(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
}

export default function Footer() {
  const linkClass = "mb-2.5 block text-sm text-ink no-underline transition-colors hover:text-orange-700";

  return (
    <footer className="relative z-[2] px-14 pb-10 pt-15 max-md:px-5">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Marque */}
          <div>
            <span className="text-[22px] font-semibold tracking-[-0.025em] text-ink">
              Prodia<span className="text-orange-500">.</span>
            </span>
            <p className="mt-3.5 max-w-[320px] text-[13.5px] leading-[1.6] text-ink-soft">
              Agence IA pour TPE & PME.<br />
              Région PACA · interventions à distance partout en France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-[18px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-text-muted">Navigation</div>
            <a href="#methode" onClick={smoothTo("methode")} className={linkClass}>Méthode</a>
            <a href="#sector-section" onClick={smoothTo("sector-section")} className={linkClass}>Secteurs</a>
            <a href="#case-studies" onClick={smoothTo("case-studies")} className={linkClass}>Cas client</a>
            <a href="#histoire" onClick={smoothTo("histoire")} className={linkClass}>Histoire</a>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-[18px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-text-muted">Contact</div>
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE_HREF}`} className={linkClass}>{CONTACT_PHONE}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn ↗</a>
          </div>

          {/* RDV */}
          <div>
            <div className="mb-[18px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-text-muted">Rendez-vous</div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              Audit gratuit · 30 min →
            </a>
            <div className="mt-3 font-serif text-xs italic text-text-muted">Sans engagement.</div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t pt-6 font-mono text-[11px] tracking-[0.06em] text-text-muted" style={{ borderColor: "oklch(0.85 0.005 75 / 0.5)" }}>
          <span>© 2026 Prodia · Tom Da Rold</span>
          <span>Mentions légales · Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}

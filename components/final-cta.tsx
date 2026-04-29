"use client";

import Script from "next/script";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/tom-da-rold/30-minute-meeting-clone";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section className="relative z-[2] overflow-hidden px-14 py-[180px] max-md:px-5 max-md:py-24">
      {/* Grid perspective inversée */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ perspective: "800px" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-50%",
            right: "-50%",
            height: "70%",
            backgroundImage: "linear-gradient(oklch(0.65 0.20 38 / 0.22) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.20 38 / 0.22) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            transform: "rotateX(-72deg)",
            transformOrigin: "50% 0%",
            maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>DERNIÈRE ÉTAPE</Eyebrow>
          <h2 className="mt-6 text-[clamp(48px,7vw,92px)] font-normal leading-[0.94] tracking-[-0.045em] text-ink">
            Audit <span className="font-serif italic text-orange-500">gratuit</span>.<br />
            30 minutes.
          </h2>

          {/* Calendly inline widget */}
          <div className="mx-auto mt-12 max-w-[700px]">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
              style={{ minWidth: 320, height: 700 }}
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </div>

          {/* Fallback button */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-white no-underline transition-opacity hover:opacity-90">
              Réserver mon créneau →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

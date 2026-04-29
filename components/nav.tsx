"use client";

const CALENDLY_URL =
  "https://calendly.com/tom-da-rold/30-minute-meeting-clone";
const CONTACT_EMAIL = "tom.darold6@gmail.com";

function smoothTo(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 20,
        behavior: "smooth",
      });
  };
}

export default function Nav() {
  return (
    <nav className="absolute top-7 left-14 right-14 z-30 flex items-center justify-between text-[13.5px] text-ink max-md:left-5 max-md:right-5 max-md:top-4">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-[19px] font-semibold tracking-[-0.025em] text-ink no-underline"
      >
        Prodia<span className="text-orange-500">.</span>
      </a>

      <div className="hidden gap-7 whitespace-nowrap md:flex">
        <a
          href="#methode"
          onClick={smoothTo("methode")}
          className="text-ink no-underline transition-colors hover:text-orange-700"
        >
          Méthode
        </a>
        <a
          href="#case-studies"
          onClick={smoothTo("case-studies")}
          className="text-ink no-underline transition-colors hover:text-orange-700"
        >
          Cas client
        </a>
        <a
          href="#histoire"
          onClick={smoothTo("histoire")}
          className="text-ink no-underline transition-colors hover:text-orange-700"
        >
          Histoire
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink no-underline transition-colors hover:text-orange-700"
        >
          Contact
        </a>
      </div>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-ink px-4 py-[9px] text-[13px] font-medium text-white no-underline transition-opacity hover:opacity-90"
      >
        Réserver →
      </a>
    </nav>
  );
}

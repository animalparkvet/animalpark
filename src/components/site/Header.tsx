import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/animal-park-logo.png";

export const NAV: { label: string; hash?: string; to?: "/blog" }[] = [
  { label: "Home", hash: "top" },
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Our Vets", hash: "vets" },
  { label: "Pet Advice", hash: "advice" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", hash: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-80 flex items-center justify-between gap-6">
        <Link to="/" hash="top" aria-label="Animal Park Veterinary Surgery — home" className="shrink-0" onClick={close}>
          <img
            src={logo}
            alt="Animal Park Veterinary Surgery"
            width={442}
            height={384}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-16 py-1 lg:h-20" : "h-24 pt-2 lg:h-36 lg:pt-3"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {NAV.map((n) =>
            n.to ? (
              <Link key={n.label} to={n.to} className="text-[0.95rem] font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>
                {n.label}
              </Link>
            ) : (
              <Link key={n.label} to="/" hash={n.hash} className="text-[0.95rem] font-medium text-foreground/80 hover:text-primary">
                {n.label}
              </Link>
            ),
          )}
          <Link to="/" hash="book" className="btn btn-primary">
            Request Appointment
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background/90 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[var(--hdr,6rem)] z-40 overflow-y-auto border-t border-border bg-background xl:hidden" style={{ top: scrolled ? "4.1rem" : "6rem" }}>
          <nav className="container-80 flex flex-col py-6" aria-label="Mobile">
            {NAV.map((n) =>
              n.to ? (
                <Link key={n.label} to={n.to} onClick={close} className="border-b border-border py-4 font-display text-xl font-semibold">
                  {n.label}
                </Link>
              ) : (
                <Link key={n.label} to="/" hash={n.hash} onClick={close} className="border-b border-border py-4 font-display text-xl font-semibold">
                  {n.label}
                </Link>
              ),
            )}
            <div className="mt-6 grid gap-3">
              <Link to="/" hash="book" onClick={close} className="btn btn-primary">Request Appointment</Link>
              <Link to="/" hash="ask" onClick={close} className="btn btn-outline">Ask a Vet</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import logo from "@/assets/animal-park-logo.png";
import { BUSINESS, SOCIAL } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { NAV } from "./Header";

export function Footer() {
  const socials = Object.entries(SOCIAL).filter(([, url]) => url);
  return (
    <footer className="border-t border-border bg-mist">
      <div className="container-80 grid gap-10 py-14 md:grid-cols-[auto_1fr] md:items-start">
        <div className="flex items-start gap-5">
          <img src={logo} alt="Animal Park Veterinary Surgery" width={442} height={384} loading="lazy" className="h-28 w-auto" />
          <address className="pt-3 text-sm not-italic leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{BUSINESS.name}</span>
            <br />
            Mashwede Village, Bay 8
            <br />
            Highglen, Harare, Zimbabwe
          </address>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium md:justify-end md:pt-4" aria-label="Footer">
          {NAV.map((n) =>
            n.to ? (
              <Link key={n.label} to={n.to} className="hover:text-primary">{n.label}</Link>
            ) : (
              <Link key={n.label} to="/" hash={n.hash} className="hover:text-primary">{n.label}</Link>
            ),
          )}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-primary">{name}</a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container-80 flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <Link to="/privacy" className="hover:text-primary">Privacy & Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

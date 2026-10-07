import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Stethoscope, Syringe, HeartPulse, Microscope, Pill, Scissors, ShieldCheck, MessageSquareHeart,
  MapPin, Navigation, Phone, MessageCircle, CalendarCheck, Mail, Clock, User,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { posts } from "@/content/blog";
import { BlogCard } from "@/components/site/BlogCard";
import { AppointmentForm, EnquiryForm } from "@/components/site/Forms";
import { BUSINESS, EMAIL, OPENING_HOURS, PHONE_NUMBER, directionsUrl, mapEmbedUrl } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Animal Park Veterinary Surgery | Vet in Highglen, Harare" },
      { name: "description", content: "Compassionate veterinary care for dogs, cats and companion animals at Mashwede Village, Bay 9, Highglen, Harare. Request an appointment or ask a vet on WhatsApp." },
      { property: "og:title", content: "Animal Park Veterinary Surgery | Vet in Highglen, Harare" },
      { property: "og:description", content: "Compassionate veterinary care in Harare. Request an appointment or ask a vet on WhatsApp." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Stethoscope, title: "General Consultations", text: "Examinations and advice when your pet is unwell or something doesn't seem right." },
  { icon: Syringe, title: "Vaccinations", text: "Vaccination plans for puppies, kittens and adult pets." },
  { icon: HeartPulse, title: "Pet Health Checks", text: "Routine check-ups to keep an eye on your pet's wellbeing." },
  { icon: Microscope, title: "Diagnostics", text: "Investigations to help understand what's affecting your pet." },
  { icon: Pill, title: "Treatment", text: "Care and medication tailored to your pet's condition." },
  { icon: Scissors, title: "Surgery", text: "Surgical procedures carried out with care for your pet's comfort." },
  { icon: ShieldCheck, title: "Preventive Care", text: "Parasite control and guidance to help prevent problems early." },
  { icon: MessageSquareHeart, title: "Pet Health Advice", text: "Practical guidance on feeding, behaviour and everyday care." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="relative h-[48vh] min-h-[320px] lg:absolute lg:inset-0 lg:h-auto">
          <img src={hero} alt="Veterinarian examining a golden retriever with a stethoscope" width={1920} height={1088} className="h-full w-full object-cover object-[70%_center]" />
          <div className="absolute inset-0 hidden hero-wash lg:block" />
          <div className="absolute inset-0 hero-wash-mobile lg:hidden" />
        </div>
        <div className="container-80 relative -mt-10 pb-14 lg:mt-0 lg:flex lg:min-h-[92vh] lg:items-center lg:pb-0 lg:pt-36">
          <div className="max-w-xl">
            <p className="eyebrow">Highglen · Harare</p>
            <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl">
              Compassionate veterinary care in Harare
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Professional, friendly care for your pets — and clear, honest guidance for you — at Animal Park Veterinary Surgery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/" hash="book" className="btn btn-primary"><CalendarCheck className="h-5 w-5" /> Request Appointment</Link>
              <Link to="/" hash="ask" className="btn btn-outline bg-background/70"><MessageCircle className="h-5 w-5" /> Ask a Vet</Link>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Mashwede Village, Bay 9, Highglen
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-mist py-20 lg:py-28">
        <div className="container-80 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <img src={about} alt="Family with their cat speaking to a veterinarian at reception" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full rounded-md object-cover lg:max-h-[640px]" />
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Your local veterinary surgery in Highglen</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>Animal Park Veterinary Surgery is a neighbourhood practice caring for pets and companion animals across Harare.</p>
              <p>We believe good veterinary care starts with listening — to you and to your pet — and explaining things clearly so you can make the right decisions together.</p>
            </div>
            <div className="mt-8 flex items-start gap-4 border-t border-border pt-6">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">Mashwede Village, Bay 9,<br />Highglen, Harare</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28">
        <div className="container-80">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Care for every stage of your pet's life</h2>
            </div>
            <p className="text-lg text-muted-foreground lg:max-w-lg lg:justify-self-end">
              From first vaccinations to treatment when they're unwell. Not sure what your pet needs? Ask us first.
            </p>
          </div>
          <ul className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-b border-border py-8 pr-6 sm:[&:nth-child(even)]:pl-6 lg:pl-6 lg:[&:nth-child(4n+1)]:pl-0 lg:[&:not(:nth-child(4n))]:border-r">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/" hash="book" className="btn btn-primary">Book a visit <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/" hash="ask" className="btn btn-outline">Ask about a service</Link>
          </div>
        </div>
      </section>

      {/* VETS */}
      <section id="vets" className="bg-forest py-20 text-forest-foreground lg:py-28">
        <div className="container-80">
          <p className="eyebrow !text-leaf">Our vets</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight lg:text-5xl">The people who'll look after your pet</h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-16">
            {BUSINESS.vets.map((v) => (
              <article key={v.name} className="grid grid-cols-[7rem_1fr] items-center gap-6 sm:grid-cols-1 lg:grid-cols-[11rem_1fr]">
                {/* Replace with a real portrait: <img src={...} className="aspect-square ..." /> */}
                <div className="flex aspect-square items-center justify-center rounded-md bg-forest-foreground/10">
                  <User className="h-12 w-12 text-forest-foreground/50" strokeWidth={1.2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold lg:text-3xl">{v.name}</h3>
                  <p className="mt-1 text-forest-foreground/70">{v.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/" hash="book" className="btn btn-primary">Request Appointment</Link>
            <Link to="/" hash="ask" className="btn btn-light">Ask a Vet</Link>
          </div>
        </div>
      </section>

      {/* ASK A VET */}
      <section id="ask" className="py-20 lg:py-28">
        <div className="container-80 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Ask a vet</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Worried about your pet?</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us what's happening. Your enquiry is prepared as a WhatsApp message to our team — just press send in WhatsApp.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="border-y border-border bg-mist py-20 lg:py-28">
        <div className="container-80 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Appointments</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Request an appointment</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Choose a preferred day and time and send your request on WhatsApp.
            </p>
          </div>
          <AppointmentForm />
        </div>
      </section>

      {/* ADVICE */}
      <section id="advice" className="py-20 lg:py-28">
        <div className="container-80">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Pet advice</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">From our blog</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-forest hover:text-primary">All articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {posts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-forest text-forest-foreground">
        <div className="container-80 grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow !text-leaf">Visit us</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">{BUSINESS.name}</h2>
            <address className="mt-6 text-xl not-italic leading-relaxed text-forest-foreground/85">
              {BUSINESS.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
            {(PHONE_NUMBER || EMAIL || OPENING_HOURS.length > 0) && (
              <ul className="mt-6 space-y-2 text-forest-foreground/85">
                {PHONE_NUMBER && <li className="flex items-center gap-3"><Phone className="h-4 w-4" />{PHONE_NUMBER}</li>}
                {EMAIL && <li className="flex items-center gap-3"><Mail className="h-4 w-4" /><a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a></li>}
                {OPENING_HOURS.map((h) => <li key={h} className="flex items-center gap-3"><Clock className="h-4 w-4" />{h}</li>)}
              </ul>
            )}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Navigation className="h-5 w-5" /> Get Directions</a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-light"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
              {PHONE_NUMBER && <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="btn btn-light"><Phone className="h-5 w-5" /> Call</a>}
              <Link to="/" hash="ask" className="btn btn-light">Ask a Vet</Link>
              <Link to="/" hash="book" className="btn btn-light">Book Appointment</Link>
            </div>
          </div>
          <div className="min-h-[340px] overflow-hidden rounded-md bg-forest-foreground/10">
            <iframe title="Map showing Animal Park Veterinary Surgery" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[340px] w-full border-0" />
          </div>
        </div>
      </section>
    </>
  );
}

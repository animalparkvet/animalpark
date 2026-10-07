import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Disclaimer | Animal Park Veterinary Surgery" },
      { name: "description", content: "How Animal Park Veterinary Surgery handles enquiries sent through this website, and our medical disclaimer." },
      { property: "og:title", content: "Privacy & Disclaimer | Animal Park Veterinary Surgery" },
      { property: "og:description", content: "Privacy notice and medical disclaimer for the Animal Park Veterinary Surgery website." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="pb-24 pt-36 lg:pt-48">
      <div className="prose-article container-80 max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 mb-8 text-5xl font-extrabold">Privacy & Disclaimer</h1>
        <h2>Privacy</h2>
        <p>This website does not store the information you enter into its forms. When you submit an enquiry or appointment request, your details are formatted into a WhatsApp message on your own device. Nothing is sent until you press send in WhatsApp.</p>
        <p>Information you send to {BUSINESS.name} via WhatsApp is used only to respond to your enquiry and arrange care for your pet. WhatsApp's own privacy policy applies to messages sent through its service.</p>
        <h2>Medical disclaimer</h2>
        <p>Articles and information on this website are general guidance only and are not a substitute for an examination by a qualified veterinarian. Online enquiries do not replace emergency veterinary assessment.</p>
        <p>If your pet is in distress, bleeding, struggling to breathe, collapsed or may have been poisoned, contact a veterinarian immediately.</p>
      </div>
    </section>
  );
}

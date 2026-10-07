import { WHATSAPP_NUMBER, BUSINESS } from "@/config/site";

export function whatsappUrl(message?: string, number: string = WHATSAPP_NUMBER) {
  const digits = number.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

const v = (s?: string) => (s && s.trim() ? s.trim() : "Not specified");

export type EnquiryData = {
  owner: string;
  phone: string;
  petName: string;
  animal: string;
  age?: string;
  issue: string;
  duration: string;
  urgency: string;
  preferredDate?: string;
};

export function formatEnquiry(d: EnquiryData) {
  return [
    `Hello ${BUSINESS.name},`,
    "",
    "I would like to make a pet enquiry.",
    "",
    `Owner: ${v(d.owner)}`,
    `Phone: ${v(d.phone)}`,
    "",
    `Pet Name: ${v(d.petName)}`,
    `Animal: ${v(d.animal)}`,
    `Age: ${v(d.age)}`,
    "",
    "Issue / Symptoms:",
    v(d.issue),
    "",
    "Duration:",
    v(d.duration),
    "",
    "Urgency:",
    v(d.urgency),
    "",
    "Preferred Appointment:",
    v(d.preferredDate),
    "",
    "Thank you.",
  ].join("\n");
}

export type AppointmentData = {
  owner: string;
  phone: string;
  petName: string;
  animal: string;
  reason: string;
  date: string;
  time: string;
  notes?: string;
};

export function formatAppointment(d: AppointmentData) {
  return [
    `Hello ${BUSINESS.name},`,
    "",
    "I would like to request an appointment.",
    "",
    `Owner: ${v(d.owner)}`,
    `Phone: ${v(d.phone)}`,
    "",
    `Pet Name: ${v(d.petName)}`,
    `Animal: ${v(d.animal)}`,
    "",
    "Reason for Visit:",
    v(d.reason),
    "",
    `Preferred Date: ${v(d.date)}`,
    `Preferred Time: ${v(d.time)}`,
    "",
    "Additional Information:",
    v(d.notes),
    "",
    "Please confirm availability. Thank you.",
  ].join("\n");
}

export function isValidPhone(p: string) {
  return p.replace(/\D/g, "").length >= 9;
}

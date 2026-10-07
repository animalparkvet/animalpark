import { useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { formatAppointment, formatEnquiry, isValidPhone, openWhatsApp } from "@/lib/whatsapp";

type Errors = Record<string, string>;

function Field({ label, name, error, optional, children }: { label: string; name: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-semibold">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

const ANIMALS = ["Dog", "Cat", "Rabbit", "Bird", "Other"];

function useForm<T extends Record<string, string>>(initial: T) {
  const [data, setData] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const bind = (name: keyof T & string) => ({
    id: name,
    name,
    value: data[name],
    "aria-invalid": errors[name] ? true : undefined,
    onChange: (e: { target: { value: string } }) => setData((d) => ({ ...d, [name]: e.target.value })),
    className: "field",
  });
  return { data, errors, setErrors, bind };
}

function validate(data: Record<string, string>, required: string[]) {
  const e: Errors = {};
  for (const k of required) if (!data[k]?.trim()) e[k] = "Please fill in this field.";
  if (data.phone?.trim() && !isValidPhone(data.phone)) e.phone = "Please enter a valid phone number.";
  return e;
}

export function EnquiryForm() {
  const { data, errors, setErrors, bind } = useForm({
    owner: "", phone: "", petName: "", animal: "", age: "", issue: "", duration: "", urgency: "", preferredDate: "",
  });
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(data, ["owner", "phone", "petName", "animal", "issue", "duration", "urgency"]);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }
    openWhatsApp(formatEnquiry(data));
  };
  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Owner name" name="owner" error={errors.owner}><input {...bind("owner")} autoComplete="name" /></Field>
      <Field label="Phone number" name="phone" error={errors.phone}><input {...bind("phone")} type="tel" autoComplete="tel" /></Field>
      <Field label="Pet name" name="petName" error={errors.petName}><input {...bind("petName")} /></Field>
      <Field label="Type of animal" name="animal" error={errors.animal}>
        <select {...bind("animal")}><option value="">Select…</option>{ANIMALS.map((a) => <option key={a}>{a}</option>)}</select>
      </Field>
      <Field label="Pet age" name="age" optional><input {...bind("age")} placeholder="e.g. 3 years" /></Field>
      <Field label="How long has this been happening?" name="duration" error={errors.duration}><input {...bind("duration")} placeholder="e.g. 2 days" /></Field>
      <div className="sm:col-span-2">
        <Field label="Issue / symptoms" name="issue" error={errors.issue}><textarea {...bind("issue")} rows={4} placeholder="Describe what you've noticed" /></Field>
      </div>
      <Field label="Urgency" name="urgency" error={errors.urgency}>
        <select {...bind("urgency")}>
          <option value="">Select…</option>
          <option>General question</option>
          <option>Would like to be seen soon</option>
          <option>Urgent — please call me</option>
        </select>
      </Field>
      <Field label="Preferred appointment date" name="preferredDate" optional><input {...bind("preferredDate")} type="date" /></Field>
      <div className="sm:col-span-2">
        <p className="mb-5 border-l-2 border-primary bg-mist px-4 py-3 text-sm text-muted-foreground">
          An online enquiry does not replace a veterinary examination. If your pet is in distress, bleeding, struggling to breathe, collapsed or may have been poisoned, contact a veterinarian immediately.
        </p>
        <button type="submit" className="btn btn-primary w-full sm:w-auto"><MessageCircle className="h-5 w-5" /> Send enquiry via WhatsApp</button>
      </div>
    </form>
  );
}

export function AppointmentForm() {
  const { data, errors, setErrors, bind } = useForm({
    owner: "", phone: "", petName: "", animal: "", reason: "", date: "", time: "", notes: "",
  });
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(data, ["owner", "phone", "petName", "animal", "reason", "date", "time"]);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`ap-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    openWhatsApp(formatAppointment(data));
  };
  const b = (n: keyof typeof data) => ({ ...bind(n), id: `ap-${n}` });
  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Owner name" name="ap-owner" error={errors.owner}><input {...b("owner")} autoComplete="name" /></Field>
      <Field label="Phone" name="ap-phone" error={errors.phone}><input {...b("phone")} type="tel" autoComplete="tel" /></Field>
      <Field label="Pet name" name="ap-petName" error={errors.petName}><input {...b("petName")} /></Field>
      <Field label="Animal type" name="ap-animal" error={errors.animal}>
        <select {...b("animal")}><option value="">Select…</option>{ANIMALS.map((a) => <option key={a}>{a}</option>)}</select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Reason for visit" name="ap-reason" error={errors.reason}>
          <select {...b("reason")}>
            <option value="">Select…</option>
            <option>General consultation</option>
            <option>Vaccination</option>
            <option>Health check</option>
            <option>Follow-up visit</option>
            <option>Surgery consultation</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <Field label="Preferred date" name="ap-date" error={errors.date}><input {...b("date")} type="date" /></Field>
      <Field label="Preferred time" name="ap-time" error={errors.time}>
        <select {...b("time")}>
          <option value="">Select…</option>
          <option>Morning</option>
          <option>Midday</option>
          <option>Afternoon</option>
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Additional information" name="ap-notes" optional><textarea {...b("notes")} rows={3} /></Field>
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary w-full sm:w-auto"><MessageCircle className="h-5 w-5" /> Request via WhatsApp</button>
        <span className="text-sm text-muted-foreground">We'll confirm your appointment time with you.</span>
      </div>
    </form>
  );
}

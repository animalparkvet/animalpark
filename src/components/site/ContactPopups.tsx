import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { useLocation } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AppointmentForm, EnquiryForm } from "./Forms";

type FormKind = "ask" | "book";

export function ContactPopups({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<FormKind | null>(null);
  const hash = useLocation({ select: (location) => location.hash });

  useEffect(() => {
    if (hash === "ask" || hash === "book") setForm(hash);
  }, [hash]);

  const openFromLink = (event: MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a");
    if (!anchor) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== "/") return;
    const kind = url.hash.slice(1);
    if (kind !== "ask" && kind !== "book") return;
    event.preventDefault();
    event.stopPropagation();
    setForm(kind);
  };

  return (
    <div onClickCapture={openFromLink}>
      {children}
      <Dialog open={form !== null} onOpenChange={(open) => { if (!open) setForm(null); }}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-md p-5 sm:p-6">
          <DialogHeader className="pr-7 text-left">
            <DialogTitle className="font-display text-2xl">{form === "ask" ? "Ask a vet" : "Request an appointment"}</DialogTitle>
            <DialogDescription>{form === "ask" ? "Tell us what's happening with your pet." : "Let us know your preferred day and time."}</DialogDescription>
          </DialogHeader>
          {form === "ask" ? <EnquiryForm /> : form === "book" ? <AppointmentForm /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
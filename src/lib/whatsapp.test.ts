import { describe, expect, it } from "vitest";
import { formatEnquiry, whatsappUrl, isValidPhone } from "./whatsapp";

describe("whatsapp", () => {
  it("builds a wa.me link with the number and encoded text", () => {
    expect(whatsappUrl("Hi & bye", "+263 77 123")).toBe("https://wa.me/26377123?text=Hi%20%26%20bye");
  });
  it("falls back to wa.me without a number when none is configured", () => {
    expect(whatsappUrl("x", "")).toBe("https://wa.me/?text=x");
  });
  it("formats the enquiry with owner, pet and urgency lines", () => {
    const m = formatEnquiry({ owner: "Tendai", phone: "0771234567", petName: "Max", animal: "Dog", issue: "Limping", duration: "2 days", urgency: "Soon" });
    expect(m).toContain("Owner: Tendai");
    expect(m).toContain("Pet Name: Max");
    expect(m).toContain("Urgency:\nSoon");
    expect(m).toContain("Age: Not specified");
  });
  it("rejects short phone numbers", () => {
    expect(isValidPhone("1234")).toBe(false);
    expect(isValidPhone("077 123 4567")).toBe(true);
  });
});

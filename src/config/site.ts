/**
 * Central business configuration for Animal Park Veterinary Surgery.
 * Update these values when real details are confirmed.
 */

/** International format, digits only, e.g. "2637XXXXXXXX". Leave empty until confirmed. */
export const WHATSAPP_NUMBER = "";

/** Phone number for the "Call" button, e.g. "+263 7X XXX XXXX". Hidden while empty. */
export const PHONE_NUMBER = "";

/** Email address. Hidden while empty. */
export const EMAIL = "";

/** Opening hours lines. Hidden while empty. */
export const OPENING_HOURS: string[] = [];

/** Social links. Only non-empty entries are shown. */
export const SOCIAL = {
  facebook: "",
  instagram: "",
};

export const BUSINESS = {
  name: "Animal Park Veterinary Surgery",
  addressLines: ["Mashwede Village", "Bay 9", "Highglen", "Harare", "Zimbabwe"],
  vets: [
    { name: "Dr Munzeiwa", role: "Resident Veterinarian" },
    { name: "Dr Kandemiiri", role: "Resident Veterinarian" },
  ],
};

/** Used for map embed and directions. Replace with exact coordinates ("lat,lng") when available. */
export const MAP_QUERY = "Mashwede Village, Highglen, Harare, Zimbabwe";

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

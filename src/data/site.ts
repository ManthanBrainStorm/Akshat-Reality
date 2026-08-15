/**
 * Central site configuration for Akshat Reality.
 * Replace values here — they are used everywhere in the site.
 */

export const site = {
  name: "Akshat Reality",
  legalName: "Akshat Reality",
  tagline: "The Sign of Trust",
  positioning: "A real investment that pays off for generations",
  description:
    "Akshat Reality is a real estate agency in Indore specialising in residential and commercial plots and house construction services.",
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",

  /** Primary contact number (from the company brochure). */
  phone: "+919630799912",
  phoneDisplay: "+91 96307 99912",

  /** WhatsApp number in international format, digits only. */
  whatsapp: "919630799912",
  whatsappMessage: "Hello Akshat Reality, I would like to know more about your plots and services.",

  email: "info@akshatreality.com",
  website: "https://www.akshatreality.com",

  address: {
    line1: "BH-11, 1st Floor, Pandit Dindayal Upadhyay Nagar",
    line2: "Near Bharat Mata Mandir, Bapat Square",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452010",
    country: "India",
  },

  /** PENDING CLIENT CONFIRMATION — replace with confirmed business hours. */
  businessHours: "Monday – Saturday, 10:00 AM – 7:00 PM (to be confirmed)",

  /**
   * PENDING CLIENT CONFIRMATION — add real profile URLs.
   * Empty strings are not rendered.
   */
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  },

  /**
   * Google Maps embed URL. Leave empty to show the map placeholder instead.
   * How to get this:
   *  1. Open https://maps.google.com and search/pin your office address.
   *  2. Click "Share" -> "Embed a map" tab -> "Copy HTML".
   *  3. That gives you an <iframe src="...">. Copy ONLY the src="..." URL
   *     (starts with https://www.google.com/maps/embed?pb=...) and paste it
   *     below as a plain string.
   */
  mapEmbedUrl: "",

  images: {
    logo: "/images/brand/logo.png",
    hero: "/images/hero/hero-main.webp",
    founder: "/images/founder/vijendra-singh-rajput.png",
    ogImage: "/images/og-image.jpg",
  },
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phone}`;

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.state} ${site.address.postalCode}`,
].join(", ");

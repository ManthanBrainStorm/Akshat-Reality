export type ProjectStatus = "Open for booking" | "Sold out" | "Status to be confirmed";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Empty string when the location is not confirmed by the client. */
  location: string;
  /** Change status values here — they are used on cards and detail pages. */
  status: ProjectStatus;
  shortDescription: string;
  overview: string[];
  features: string[];
  facts: ProjectFact[];
  connectivity: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  /** Google Maps embed URL; empty renders a map placeholder. */
  mapEmbedUrl: string;
  /** Notes for the client about unverified information. */
  pendingConfirmation?: string;
}

export const projects: Project[] = [
  {
    slug: "ayodhya-puram",
    name: "Shri Ayodhya Puram",
    location: "Indore, Madhya Pradesh",
    status: "Open for booking",
    shortDescription:
      "A RERA-approved plotted colony with a landmark entrance gate, vastu-based planning and ready internal infrastructure.",
    overview: [
      "Shri Ayodhya Puram is a planned residential plotted colony developed with a landmark entrance gate, wide internal roads and organised sector planning.",
      "The layout is planned as per vastu, with underground drainage, a boundary wall, a water tank and dedicated garden areas within the colony. Plot options range across multiple sizes so families can choose what fits their plan and budget.",
      "As per the company brochure, remaining plots are available. Please confirm current availability with our team before planning a visit.",
    ],
    features: [
      "Grand entrance gate (प्रवेश द्वार)",
      "Vastu-based planning (वास्तु अनुसार प्लानिंग)",
      "Underground drainage (अंडर ग्राउंड ड्रेनेज)",
      "Boundary wall (बाउंड्री वाल)",
      "Water tank (पानी की टंकी)",
      "Green garden areas (हरा भरा गार्डन)",
      "Open environment (खुला वातावरण)",
      "Fully legal documentation (पूर्णतः वैध)",
    ],
    facts: [
      { label: "Project type", value: "Residential plotted colony" },
      { label: "Approval", value: "RERA approved colony (as stated in brochure)" },
      {
        label: "Plot sizes",
        value: "20x40, 20x45, 20x50 and 30x60 ft; 800, 1000, 1200 and 1500 sq ft options",
      },
      { label: "Segments", value: "Residential plots, plus L.I.G. + E.W.S. plots" },
      { label: "Internal roads", value: "12.0 M internal roads as per site plan" },
    ],
    connectivity: [
      "300 m from the Outer Ring Road",
      "2.5 km from the Indore–Ujjain Highway",
      "6 km from MR-10 Chandragupta Maurya Chauraha",
      "4 km from Aurobindo and 4 km from Mangaliya",
    ],
    hero: {
      src: "/images/projects/ayodhya-puram/hero.webp",
      alt: "Shri Ayodhya Puram entrance gate at the plotted colony in Indore",
    },
    gallery: [
      {
        src: "/images/projects/ayodhya-puram/gallery-01-site-plan.webp",
        alt: "Shri Ayodhya Puram site plan showing plot numbers, sizes, gardens and 12 metre internal roads",
      },
      {
        src: "/images/projects/ayodhya-puram/gallery-02-location-map.webp",
        alt: "Location map of Shri Ayodhya Puram showing connectivity to Outer Ring Road and Indore–Ujjain Highway",
      },
      {
        src: "/images/projects/ayodhya-puram/gallery-03-layout.webp",
        alt: "Shri Ayodhya Puram colony layout with plot sizes of 800, 1000, 1200 and 1500 square feet",
      },
    ],
    mapEmbedUrl: "",
    pendingConfirmation:
      "Exact site address, RERA registration number and current plot availability to be confirmed by the client.",
  },
  {
    slug: "shree-shyam-city",
    name: "Shree Shyam City",
    location: "Indore, Madhya Pradesh",
    status: "Sold out",
    shortDescription:
      "A completed plotted development by Akshat Reality. Plots at Shree Shyam City were sold out with resounding success.",
    overview: [
      "Shree Shyam City is a plotted development delivered by Akshat Reality in Indore. As stated in the company brochure, plots at Shree Shyam City were sold out with resounding success.",
      "Details of this project are shared here as part of our track record. For similar opportunities, speak to our team about currently available projects.",
    ],
    features: [],
    facts: [
      { label: "Project type", value: "Residential plotted development" },
      { label: "Availability", value: "Sold out (as stated in the company brochure)" },
    ],
    connectivity: [],
    hero: {
      src: "/images/projects/shree-shyam-city/hero.webp",
      alt: "Shree Shyam City entrance gate and internal road in Indore",
    },
    gallery: [],
    mapEmbedUrl: "",
    pendingConfirmation:
      "Exact location, plot sizes, completion year and amenities for Shree Shyam City are not available in the supplied material.",
  },
  {
    slug: "mangalmay-city",
    name: "Mangalmay City",
    location: "Indore, Madhya Pradesh",
    status: "Sold out",
    shortDescription:
      "A completed plotted development by Akshat Reality. Plots at Mangalmay City were sold out with resounding success.",
    overview: [
      "Mangalmay City is a plotted development delivered by Akshat Reality in Indore. As stated in the company brochure, plots at Mangalmay City were sold out with resounding success.",
      "This project is presented as part of our delivery record. Our team can guide you to comparable opportunities that are currently open.",
    ],
    features: [],
    facts: [
      { label: "Project type", value: "Residential plotted development" },
      { label: "Availability", value: "Sold out (as stated in the company brochure)" },
    ],
    connectivity: [],
    hero: {
      src: "/images/projects/mangalmay-city/hero.webp",
      alt: "Mangalmay City entrance with completed homes and internal street in Indore",
    },
    gallery: [],
    mapEmbedUrl: "",
    pendingConfirmation:
      "Exact location, plot sizes, completion year and amenities for Mangalmay City are not available in the supplied material.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
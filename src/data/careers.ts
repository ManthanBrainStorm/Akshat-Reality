export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** PLACEHOLDER roles are clearly labelled in the UI until confirmed. */
  placeholder: boolean;
}

export const careerValues = [
  {
    title: "Trust before transactions",
    description:
      "Our name carries 'The Sign of Trust'. Every conversation with a client is expected to hold up to that standard.",
  },
  {
    title: "Know Indore deeply",
    description:
      "We work in one city and we work it well. Local knowledge is how we add value for buyers and investors.",
  },
  {
    title: "Transparent communication",
    description:
      "Clear pricing, clear paperwork, clear timelines. No surprises for the customer, and none inside the team.",
  },
  {
    title: "Ownership of outcomes",
    description:
      "From the first site visit to possession, whoever starts with a client stays accountable for the result.",
  },
];

export const whyWorkHere = [
  "Work directly with a founder-led team on live plotted projects in Indore.",
  "Ownership of real client relationships rather than a narrow slice of a process.",
  "A growing local company where individual contribution is visible.",
  "Exposure across sales, project management and construction services.",
];

/**
 * PLACEHOLDER openings — replace with real roles before publishing,
 * or set this array to [] to show the "no current openings" state.
 */
export const jobOpenings: JobOpening[] = [
  {
    id: "sales-executive",
    title: "Sales Executive — Plots",
    department: "Sales",
    location: "Indore, Madhya Pradesh",
    type: "Full-time",
    experience: "0–3 years",
    summary:
      "Guide prospective buyers through site visits, plot options and the booking process for our residential plotted projects.",
    responsibilities: [
      "Respond to enquiries and qualify buyer requirements",
      "Conduct site visits and explain project layouts",
      "Support customers through booking and documentation",
      "Maintain accurate records of every enquiry and follow-up",
    ],
    requirements: [
      "Strong spoken Hindi and working English",
      "Comfort with field work and site visits in Indore",
      "Two-wheeler and valid driving licence preferred",
    ],
    placeholder: true,
  },
  {
    id: "site-supervisor",
    title: "Site Supervisor — Construction",
    department: "Construction",
    location: "Indore, Madhya Pradesh",
    type: "Full-time",
    experience: "2–5 years",
    summary:
      "Coordinate day-to-day execution on house construction sites and keep quality, material and timelines on track.",
    responsibilities: [
      "Supervise daily site activity and labour coordination",
      "Track material requirements and deliveries",
      "Report progress and issues to the project lead",
    ],
    requirements: [
      "Diploma or degree in civil engineering, or equivalent site experience",
      "Understanding of residential construction practices",
    ],
    placeholder: true,
  },
  {
    id: "telecaller",
    title: "Telecaller / Client Relationship Associate",
    department: "Client Relations",
    location: "Indore, Madhya Pradesh",
    type: "Full-time",
    experience: "0–2 years",
    summary:
      "Be the first voice clients hear — handle incoming enquiries, schedule visits and keep follow-ups organised.",
    responsibilities: [
      "Handle incoming calls and WhatsApp enquiries",
      "Schedule site visits with the sales team",
      "Maintain the enquiry follow-up register",
    ],
    requirements: ["Clear, polite communication in Hindi", "Basic computer and record-keeping skills"],
    placeholder: true,
  },
];
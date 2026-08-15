export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  enquirySubject: string;
}

export const services: Service[] = [
  {
    id: "plot-selling",
    number: "01",
    title: "Plot Selling & Project Management",
    summary:
      "Residential and commercial plots in prime locations of Indore, managed end to end.",
    description:
      "We help individuals, families and businesses buy well-located plots in Indore at accessible prices. From shortlisting the right plot to documentation and possession, our team stays with you through every step of the purchase, with clear communication at each stage.",
    benefits: [
      "Plots in prime, growing corridors of Indore",
      "Personalised site visits and shortlisting",
      "Transparent documentation support",
      "Guidance on long-term investment value",
    ],
    image: "/images/projects/ayodhya-puram/hero.webp",
    imageAlt:
      "Entrance gate of an Akshat Reality plotted development project in Indore",
    ctaLabel: "Enquire about plots",
    enquirySubject: "Plot Selling & Project Management",
  },
  {
    id: "house-construction",
    number: "02",
    title: "House Construction Services",
    summary: "Build your home on your plot with a single, accountable partner.",
    description:
      "Beyond selling plots, we support clients who want to build. Our construction service is designed for owners who prefer one accountable team for planning and execution, so the journey from an empty plot to a finished home stays organised and predictable.",
    benefits: [
      "Planning support for your plot",
      "Single point of contact through the build",
      "Coordination of on-site execution",
      "Focus on quality and durability",
    ],
    image: "/images/projects/mangalmay-city/hero.webp",
    imageAlt: "Developed residential township street with completed houses in Indore",
    ctaLabel: "Discuss construction",
    enquirySubject: "House Construction Services",
  },
];
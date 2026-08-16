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

];
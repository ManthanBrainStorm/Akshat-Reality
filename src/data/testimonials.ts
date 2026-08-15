export interface Testimonial {
  quote: string;
  name: string;
  /** Rating as supplied in the company brochure. */
  rating: string;
  /** Set to true once the client confirms the testimonial can be published. */
  approved: boolean;
}

/**
 * Source: Akshat Reality company brochure ("What Clients Say").
 * These are reproduced from the supplied material and are marked as
 * pending client approval until confirmed for web publication.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "After working with a lot of different property agents, I have to say that Akshat Reality provides the best residential and commercial plots in Indore. They gave me reasonable prices and the best service, with all satisfactory.",
    name: "Shubham Kumar",
    rating: "4.5 / 5",
    approved: false,
  },
  {
    quote:
      "I had been searching for a plot for a few weeks and I was getting frustrated. I thought there was no way to find anything in my price range. But then I found the services of Akshat Reality and I am now living in my lovely new home.",
    name: "Meer Choudhary",
    rating: "5 / 5",
    approved: false,
  },
  {
    quote:
      "Akshat Reality is the best property dealer in Indore. The pricing is very competitive and there are always projects that are better than anyone else's. If you're looking to buy a plot or for construction services, go with them.",
    name: "Rahul Sharma",
    rating: "4.5 / 5",
    approved: false,
  },
];

export const testimonialsPendingApproval = testimonials.some((t) => !t.approved);
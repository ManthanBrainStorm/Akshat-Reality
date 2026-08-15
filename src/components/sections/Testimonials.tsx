import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Buyers who trusted us with their land"
          intro="Reproduced from the Akshat Reality company brochure."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col rounded-sm border border-border bg-card p-7"
            >
              <Quote className="size-7 text-ember" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block font-display text-sm font-semibold text-navy">
                  {testimonial.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  Rated {testimonial.rating}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
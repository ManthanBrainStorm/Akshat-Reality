import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Many services, one accountable team"
          intro="Whether you are buying your first plot or building on land you already own, the same team stays with you from the first conversation to handover."
        />

        <div className="mt-14 space-y-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-sm bg-navy",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  width={900}
                  height={675}
                  loading="lazy"
                />
              </div>

              <div>
                <p className="eyebrow text-brand">Service {service.number}</p>
                <h3 className="mt-3 text-2xl font-semibold text-navy sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-navy">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="brand" size="lg" asChild className="mt-8 rounded-none">
                  <a href="#contact">{service.ctaLabel}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
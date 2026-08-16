import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site, telLink } from "@/data/site";

const stats = [
  { value: "3+", label: "Plotted colonies developed in Indore" },
  { value: "RERA", label: "Approved current project" },
  { value: "100%", label: "Legal documentation support" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={site.images.hero}
        alt="Entrance gate of an Akshat Reality plotted colony in Indore"
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1600}
        height={900}
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/35"
        aria-hidden="true"
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
            Land in Indore you can build a generation on
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            Akshat Reality develops and sells residential and commercial plots across Indore,
            and builds houses on them — with clear paperwork, honest pricing and one team
            accountable from site visit to possession.
          </p>
          <>br</>
          <p className="eyebrow text-cyan">
            {site.city}, {site.state}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="ember" size="xl" asChild className="rounded-none">
              <a href="#projects">
                View current projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="rounded-none">
              <a href={telLink}>
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-cyan">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-primary-foreground/65">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
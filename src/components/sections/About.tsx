import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/data/site";

const pillars = [
  {
    title: "Founder-led",
    body: "Vijendra Singh Rajput leads the company personally, and that accountability runs through every deal we close.",
  },
  {
    title: "Indore specialists",
    body: "We work in one city. That focus is what lets us judge which corridors are genuinely worth buying into.",
  },
  {
    title: "Plots and construction",
    body: "Buy the land and build on it with the same team, instead of stitching together separate vendors.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About Akshat Reality"
              title="A real investment that pays off for generations"
              intro={
                <>
                  <p>
                    Akshat Reality is a real estate agency based in {site.city},{" "}
                    {site.state}, working with families and investors who want land they can
                    hold with confidence. We sell residential and commercial plots in prime,
                    growing locations, and we build houses for owners who want a single
                    accountable partner.
                  </p>
                  <p className="mt-4">
                    Our name carries the line “{site.tagline}”. In practice that means
                    transparent pricing, legally clean documentation and a team that stays
                    reachable long after the booking is done.
                  </p>
                </>
              }
            />

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rule-accent pt-4">
                  <dt className="font-display text-base font-semibold text-navy">
                    {pillar.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative">
            <div className="overflow-hidden rounded-sm bg-secondary">
              <img
                src={site.images.founder}
                alt="Vijendra Singh Rajput, Founder and CEO of Akshat Reality"
                className="h-full w-full object-cover"
                width={900}
                height={1100}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-5 border-l-2 border-ember pl-5">
              <p className="text-base leading-relaxed text-navy italic">
                “We would rather explain every rupee and every document than close a deal
                the customer doesn't fully understand.”
              </p>
              <p className="mt-3 font-display text-sm font-semibold text-navy">
                Vijendra Singh Rajput
              </p>
              <p className="text-sm text-muted-foreground">Founder &amp; CEO, {site.name}</p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
import { FileCheck2, HandCoins, Landmark, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Legally clean land",
    body: "We only sell plots with documentation we can explain line by line — titles, approvals and diversion status included.",
  },
  {
    icon: Landmark,
    title: "Locations that grow",
    body: "Our colonies sit close to the Outer Ring Road and major highways, where connectivity is already improving.",
  },
  {
    icon: HandCoins,
    title: "Honest pricing",
    body: "Rates are quoted straight, with the full cost of registry and development explained before you commit.",
  },
  {
    icon: FileCheck2,
    title: "Support after booking",
    body: "Registry, possession and construction guidance continue after the payment clears, not just before it.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Akshat Reality"
          title="The reasons buyers in Indore keep coming back"
          tone="light"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-navy p-7">
              <reason.icon className="size-7 text-cyan" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-primary-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
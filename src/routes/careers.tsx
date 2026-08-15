import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Clock3, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { careerValues, jobOpenings, whyWorkHere } from "@/data/careers";
import { site, whatsappLink } from "@/data/site";

const title = "Careers at Akshat Reality — Real Estate Jobs in Indore";
const description =
  "Join Akshat Reality in Indore. Explore roles in plot sales, site supervision and client relations with a founder-led real estate team.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const mailSubject = encodeURIComponent("Application — Akshat Reality");

  return (
    <>
      <section className="bg-navy-deep py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Build your career where land deals are done honestly"
            tone="light"
            as="h1"
            intro={`We are a founder-led real estate team in ${site.city}. If you want real ownership of client relationships instead of a narrow slice of a process, we should talk.`}
          />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="ember" size="xl" asChild className="rounded-none">
              <a href={`mailto:${site.email}?subject=${mailSubject}`}>Send your CV</a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="rounded-none">
              <a
                href={whatsappLink("Hello Akshat Reality, I would like to apply for a role.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="How we work" title="What we expect from each other" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {careerValues.map((value) => (
              <div key={value.title} className="rule-accent pt-4">
                <h3 className="font-display text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-sm border border-border bg-secondary p-8">
            <h3 className="font-display text-lg font-semibold text-navy">
              Why work at {site.name}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyWorkHere.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-navy">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Current openings"
            intro="Roles listed below are indicative and awaiting confirmation from the company. Send your CV and we will match you to the right position."
          />

          {jobOpenings.length === 0 ? (
            <div className="mt-12 rounded-sm border border-border bg-card p-8 text-center">
              <p className="text-base text-navy">
                There are no open positions right now.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We still read every CV. Write to {site.email} and we will reach out when a
                role opens.
              </p>
            </div>
          ) : (
            <div className="mt-12 space-y-6">
              {jobOpenings.map((job) => (
                <article
                  key={job.id}
                  className="rounded-sm border border-border bg-card p-7 sm:p-8"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-navy">{job.title}</h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="size-3.5 shrink-0" aria-hidden="true" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock3 className="size-3.5 shrink-0" aria-hidden="true" />
                          {job.type} · {job.experience}
                        </span>
                      </p>
                    </div>
                    {job.placeholder ? (
                      <span className="shrink-0 rounded-sm bg-ember/20 px-3 py-1 text-xs font-semibold text-navy">
                        To be confirmed
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-display text-sm font-semibold text-navy">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-navy">
                        Requirements
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {job.requirements.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="brand" size="lg" asChild className="mt-7 rounded-none">
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Application — ${job.title}`,
                      )}`}
                    >
                      Apply for this role
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
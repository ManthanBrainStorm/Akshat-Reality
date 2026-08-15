import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MapPin } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProject, projects, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Akshat Reality" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Plots in Indore | Akshat Reality`;
    return {
      meta: [
        { title },
        { name: "description", content: project.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: project.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Residence",
            name: project.name,
            description: project.shortDescription,
            address: {
              "@type": "PostalAddress",
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              addressCountry: "IN",
            },
          }),
        },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={project.hero.src}
          alt={project.hero.alt}
          className="absolute inset-0 -z-10 size-full object-cover"
          width={1600}
          height={900}
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40"
          aria-hidden="true"
        />
        <Container className="relative py-20 lg:py-28">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 hover:text-cyan"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
          <span
            className={cn(
              "mt-6 inline-block rounded-sm px-3 py-1 text-xs font-semibold tracking-wide uppercase",
              project.status === "Open for booking"
                ? "bg-ember text-navy-deep"
                : "bg-primary-foreground/15 text-primary-foreground",
            )}
          >
            {project.status}
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl">
            {project.name}
          </h1>
          {project.location ? (
            <p className="mt-4 flex items-center gap-2 text-primary-foreground/75">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {project.location}
            </p>
          ) : null}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            {project.shortDescription}
          </p>
        </Container>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
                About this project
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {project.overview.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              {project.features.length > 0 ? (
                <>
                  <h3 className="mt-12 text-xl font-semibold text-navy">Key features</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-navy">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {project.connectivity.length > 0 ? (
                <>
                  <h3 className="mt-12 text-xl font-semibold text-navy">Connectivity</h3>
                  <ul className="mt-5 space-y-3">
                    {project.connectivity.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-navy">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <aside>
              <dl className="rounded-sm border border-border bg-secondary p-7">
                <h2 className="font-display text-lg font-semibold text-navy">
                  Project at a glance
                </h2>
                <div className="mt-5 space-y-5">
                  {project.facts.map((fact) => (
                    <div key={fact.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-sm text-navy">{fact.value}</dd>
                    </div>
                  ))}
                </div>
                <Button variant="brand" size="lg" asChild className="mt-7 w-full rounded-none">
                  <a href="#project-enquiry">Enquire about this project</a>
                </Button>
              </dl>

              {project.pendingConfirmation ? (
                <p className="mt-5 rounded-sm border border-dashed border-border p-5 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-navy">Note for the client: </span>
                  {project.pendingConfirmation}
                </p>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      {project.gallery.length > 0 ? (
        <section className="bg-secondary py-20 lg:py-24">
          <Container>
            <SectionHeading eyebrow="Gallery" title="Site plan and layout" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={cn(
                    "overflow-hidden rounded-sm border border-border bg-card",
                    index === 0 && "md:col-span-2",
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section id="project-enquiry" className="scroll-mt-24 bg-background py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Enquire"
                title={`Interested in ${project.name}?`}
                intro="Share your requirement and our team will call you back with availability, pricing and site visit options."
              />

              {others.length > 0 ? (
                <div className="mt-10">
                  <h3 className="font-display text-sm font-semibold text-navy">
                    Other projects
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          to="/projects/$slug"
                          params={{ slug: other.slug }}
                          className="text-sm text-brand hover:text-navy"
                        >
                          {other.name} — {other.status}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <EnquiryForm defaultInterest={project.name} />
          </div>
        </Container>
      </section>
    </>
  );
}
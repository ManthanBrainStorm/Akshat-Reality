import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our projects"
          title="Plotted colonies built and sold in Indore"
          intro="One project is open for booking today. The others are part of our delivery record — both were sold out."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <img
                  src={project.hero.src}
                  alt={project.hero.alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <span
                  className={cn(
                    "absolute top-4 left-4 rounded-sm px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                    project.status === "Open for booking"
                      ? "bg-ember text-navy-deep"
                      : "bg-navy-deep/85 text-primary-foreground",
                  )}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-navy">{project.name}</h3>
                {project.location ? (
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                    {project.location}
                  </p>
                ) : null}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.shortDescription}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand hover:text-navy"
                >
                  View project
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> — {project.name}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
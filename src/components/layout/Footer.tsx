import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { fullAddress, site, telLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={site.images.logo}
              alt={`${site.name} logo`}
              className="h-12 w-auto brightness-0 invert"
              width={248}
              height={120}
              loading="lazy"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {site.description}
            </p>
            <p className="eyebrow mt-5 text-cyan">{site.tagline}</p>
          </div>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold text-primary-foreground">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              <li>
                <Link to="/" hash="about" className="hover:text-cyan">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" hash="services" className="hover:text-cyan">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" hash="projects" className="hover:text-cyan">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" hash="contact" className="hover:text-cyan">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Projects and services">
            <h2 className="text-sm font-semibold text-primary-foreground">Projects</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="hover:text-cyan"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-sm font-semibold text-primary-foreground">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to="/" hash="services" className="hover:text-cyan">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-primary-foreground">Get in touch</h2>
            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                <a href={telLink} className="hover:text-cyan">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-cyan">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                <address className="not-italic">{fullAddress}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.positioning}</p>
        </div>
      </Container>
    </footer>
  );
}
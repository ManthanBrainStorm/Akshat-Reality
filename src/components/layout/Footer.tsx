import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { fullAddress, site, telLink } from "@/data/site";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/akshat_reality_offical?igsi=aWxjcG5kbTN5ZGxt&utm_source=qr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className="size-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DCDGD1wRW/?mibextid=wwXIfr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-5"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.6V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4V10H7.1v3h2.8v8h3.6Z" />
      </svg>
    ),
  },
];

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
            <h2 className="text-sm font-semibold text-primary-foreground">
              Company
            </h2>

            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
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
                <Link to="/" hash="about" className="hover:text-cyan">
                  About us
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
            <h2 className="text-sm font-semibold text-primary-foreground">
              Projects
            </h2>

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

            <h2 className="mt-6 text-sm font-semibold text-primary-foreground">
              Services
            </h2>

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
            <h2 className="text-sm font-semibold text-primary-foreground">
              Get in touch
            </h2>

            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-cyan"
                  aria-hidden="true"
                />

                <a href={telLink} className="hover:text-cyan">
                  {site.phoneDisplay}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-cyan"
                  aria-hidden="true"
                />

                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-cyan"
                >
                  {site.email}
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-cyan"
                  aria-hidden="true"
                />

                <address className="not-italic">{fullAddress}</address>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-sm font-semibold text-primary-foreground">
                Follow us
              </p>

              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Akshat Reality on ${social.name}`}
                    className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-cyan hover:bg-cyan hover:text-navy-deep"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
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
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site, telLink } from "@/data/site";
import { cn } from "@/lib/utils";

type NavItem = { label: string; hash?: string; to?: string };

const navItems: NavItem[] = [
  { label: "Home", hash: "top" },
  { label: "Services", hash: "services" },
  { label: "Projects", hash: "projects" },
  { label: "About", hash: "about" },
  { label: "Careers", hash: "careers" },
  { label: "Contact", hash: "contact" },
];

const whatsappLink = "https://wa.me/919630799912";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.71 1.46h.01c6.55 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.17-3.42-8.43ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.84 9.84 0 0 1-1.51-5.28c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.93a9.88 9.88 0 0 1 2.91 7.05c0 5.48-4.46 9.94-9.95 9.94Zm5.45-7.45c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToHash = (hash: string) => {
    if (hash === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderLink = (item: NavItem, className: string) => {
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          className={className}
          activeProps={{ "data-active": "true" }}
        >
          {item.label}
        </Link>
      );
    }

    const hash = item.hash!;

    if (isHome) {
      return (
        <a
          key={item.label}
          href={hash === "top" ? "#top" : `#${hash}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            scrollToHash(hash);
          }}
        >
          {item.label}
        </a>
      );
    }

    return hash === "top" ? (
      <Link
        key={item.label}
        to="/"
        onClick={() => setOpen(false)}
        className={className}
      >
        {item.label}
      </Link>
    ) : (
      <Link
        key={item.label}
        to="/"
        hash={hash}
        onClick={() => setOpen(false)}
        className={className}
      >
        {item.label}
      </Link>
    );
  };

  const desktopLink =
    "text-sm font-medium text-navy/75 transition-colors hover:text-brand data-[active=true]:text-brand";

  const mobileLink =
    "block border-b border-border py-4 font-display text-lg font-semibold text-navy";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          <img
            src={site.images.logo}
            alt={`${site.name} logo — ${site.tagline}`}
            className="h-11 w-auto sm:h-12"
            width={248}
            height={120}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => renderLink(item, desktopLink))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Phone */}
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Akshat Reality on WhatsApp"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-md"
          >
            <WhatsAppIcon className="size-[19px]" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire Now */}
          {isHome ? (
            <Button
              variant="brand"
              onClick={() => scrollToHash("contact")}
              className="h-11 rounded-none"
            >
              Enquire Now
            </Button>
          ) : (
            <Button variant="brand" asChild className="h-11 rounded-none">
              <Link to="/" hash="contact">
                Enquire Now
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <Container className="pb-10">
            <nav aria-label="Mobile">
              {navItems.map((item) => renderLink(item, mobileLink))}
            </nav>

            <div className="mt-6 grid gap-3">
              {/* Call */}
              <Button
                variant="brand"
                size="xl"
                asChild
                className="rounded-none"
              >
                <a href={telLink}>Call {site.phoneDisplay}</a>
              </Button>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Akshat Reality on WhatsApp"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-md"
              >
                <WhatsAppIcon className="size-5" />
                <span>WhatsApp Us</span>
              </a>

              {/* Enquire Now */}
              {isHome ? (
                <Button
                  variant="outlineNavy"
                  size="xl"
                  className="rounded-none"
                  onClick={() => {
                    setOpen(false);
                    scrollToHash("contact");
                  }}
                >
                  Enquire Now
                </Button>
              ) : (
                <Button
                  variant="outlineNavy"
                  size="xl"
                  asChild
                  className="rounded-none"
                >
                  <Link
                    to="/"
                    hash="contact"
                    onClick={() => setOpen(false)}
                  >
                    Enquire Now
                  </Link>
                </Button>
              )}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
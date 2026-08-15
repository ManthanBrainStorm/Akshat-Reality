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
  { label: "Careers", to: "/careers" },
  { label: "Contact", hash: "contact" },
];

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
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <Link key={item.label} to="/" onClick={() => setOpen(false)} className={className}>
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

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => renderLink(item, desktopLink))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          {isHome ? (
            <Button
              variant="brand"
              onClick={() => scrollToHash("contact")}
              className="rounded-none"
            >
              Enquire Now
            </Button>
          ) : (
            <Button variant="brand" asChild className="rounded-none">
              <Link to="/" hash="contact">
                Enquire Now
              </Link>
            </Button>
          )}
        </div>

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
              <Button variant="brand" size="xl" asChild className="rounded-none">
                <a href={telLink}>Call {site.phoneDisplay}</a>
              </Button>
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
                <Button variant="outlineNavy" size="xl" asChild className="rounded-none">
                  <Link to="/" hash="contact" onClick={() => setOpen(false)}>
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
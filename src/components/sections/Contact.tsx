import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fullAddress, site, telLink, whatsappLink } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact us"
              title="Book a site visit in Indore"
              intro="Tell us what you are looking for and we will get back with plot options, pricing and the paperwork involved."
            />

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">Phone</p>
                  <a href={telLink} className="text-sm text-muted-foreground hover:text-brand">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">WhatsApp</p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-brand"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted-foreground hover:text-brand"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">Office</p>
                  <address className="text-sm not-italic text-muted-foreground">
                    {fullAddress}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">Hours</p>
                  <p className="text-sm text-muted-foreground">{site.businessHours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-sm border border-border bg-secondary">
              {site.mapEmbedUrl ? (
                <iframe
                  src={site.mapEmbedUrl}
                  title={`Map showing the ${site.name} office in ${site.city}`}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-48 flex-col items-center justify-center gap-2 p-6 text-center">
                  <MapPin className="size-6 text-muted-foreground" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">
                    Map embed pending — add a Google Maps URL in <code>src/data/site.ts</code>{" "}
                    to show the office location here.
                  </p>
                </div>
              )}
            </div>
          </div>

          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
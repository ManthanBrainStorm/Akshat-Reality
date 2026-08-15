import { useId, useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * This form submits to Web3Forms (https://web3forms.com) — a free service that
 * emails you every submission with zero backend code required. Get a free
 * access key there and put it in `.env` as VITE_WEB3FORMS_ACCESS_KEY (see
 * .env.example). Until that env var is set, submissions will fail with a
 * clear error asking the visitor to call/WhatsApp instead — nothing is lost.
 */

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name must be under 80 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number"),
  email: z
    .string()
    .trim()
    .max(120, "Email must be under 120 characters")
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  interest: z.string().trim().min(1, "Please select an option"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters"),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

const interestOptions = [
  ...services.map((s) => s.enquirySubject),
  "Residential plot",
  "Commercial plot",
  "Something else",
];

async function submitEnquiry(values: EnquiryValues): Promise<void> {
  const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"];
  if (!accessKey) {
    throw new Error("Enquiry form is not configured yet — set VITE_WEB3FORMS_ACCESS_KEY in .env.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${site.name} website — ${values.interest}`,
      from_name: site.name,
      name: values.name,
      phone: values.phone,
      email: values.email || "Not provided",
      interested_in: values.interest,
      message: values.message || "No message provided",
    }),
  });

  const result: unknown = await response.json();
  const success =
    typeof result === "object" && result !== null && "success" in result
      ? (result as { success: unknown }).success
      : false;

  if (!response.ok || !success) {
    throw new Error("Web3Forms submission failed");
  }
}

type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm({
  defaultInterest,
  className,
}: {
  defaultInterest?: string;
  className?: string;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryValues, string>>>({});
  const [values, setValues] = useState<EnquiryValues>({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest ?? interestOptions[0]!,
    message: "",
  });

  const setField = (key: keyof EnquiryValues, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof EnquiryValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      await submitEnquiry(parsed.data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-brand";
  const labelClass = "mb-2 block text-sm font-medium text-navy";
  const errorClass = "mt-1.5 text-sm text-destructive";

  if (status === "success") {
    return (
      <div
        className={cn("rounded-sm border border-border bg-card p-8", className)}
        role="status"
        aria-live="polite"
      >
        <h3 className="text-xl font-semibold text-navy">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been sent. We will get back to you shortly — for an immediate response,
          feel free to call or message us directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="brand" size="lg" asChild className="rounded-none">
            <a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a>
          </Button>
          <Button variant="outlineNavy" size="lg" asChild className="rounded-none">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-brand underline underline-offset-4"
          onClick={() => {
            setStatus("idle");
            setValues({
              name: "",
              phone: "",
              email: "",
              interest: defaultInterest ?? interestOptions[0]!,
              message: "",
            });
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("rounded-sm border border-border bg-card p-6 sm:p-8", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${id}-name`}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
          />
          {errors.name ? (
            <p id={`${id}-name-error`} className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-phone`}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            required
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
          />
          {errors.phone ? (
            <p id={`${id}-phone-error`} className={errorClass}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-email`}>
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            className={fieldClass}
            value={values.email ?? ""}
            onChange={(e) => setField("email", e.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
          />
          {errors.email ? (
            <p id={`${id}-email-error`} className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${id}-interest`}>
            Interested in
          </label>
          <select
            id={`${id}-interest`}
            name="interest"
            className={fieldClass}
            value={values.interest}
            onChange={(e) => setField("interest", e.target.value)}
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${id}-message`}>
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            className={fieldClass}
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="Tell us what you are looking for — plot size, budget or preferred location."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
          />
          {errors.message ? (
            <p id={`${id}-message-error`} className={errorClass}>
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-sm bg-destructive/10 p-3 text-sm text-destructive">
          Something went wrong while sending your enquiry. Please call or WhatsApp us instead.
        </p>
      ) : null}

      <Button
        type="submit"
        variant="brand"
        size="xl"
        className="mt-6 w-full rounded-none sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}

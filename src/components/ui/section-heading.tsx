import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3",
            tone === "light" ? "text-cyan" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-balance text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <div
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </div>
      ) : null}
    </div>
  );
}
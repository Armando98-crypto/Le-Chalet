"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  slogan?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  slogan,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 text-center", className)}
    >
      {slogan && (
        <p
          className={cn(
            "mb-3 font-serif text-lg italic tracking-wide sm:text-xl",
            light ? "text-accent" : "text-accent"
          )}
        >
          {slogan}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl",
          light ? "text-background" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base sm:text-lg",
            light ? "text-background/80" : "text-primary/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

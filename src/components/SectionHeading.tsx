import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeading = ({
  label,
  title,
  description,
  align = "center",
  children,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-3">
          {label}
        </p>
      )}
      <div className={`gold-line mb-5 ${align === "center" ? "mx-auto" : ""}`} />
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;

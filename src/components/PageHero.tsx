"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string | StaticImageData;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const bgUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${bgUrl})` }}
      /> */}
      <div className="absolute inset-0 bg-primary" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gold-line mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-primary-foreground/70 font-sans font-light max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="gold-line mx-auto mt-6"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;

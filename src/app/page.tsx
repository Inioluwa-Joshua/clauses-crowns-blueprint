"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-practice.jpg";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import { practiceAreas } from "@/data/firmData";

const heroLines = ["Excellence", "Innovation", "Forward-thinking"];

const clients = [
  { name: "Client 1", logo: "/ticketnests.svg" },
  { name: "Client 2", logo: "/nearswipe.svg" },
];

const Index = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % heroLines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className="absolute inset-0 bg-primary/90" />

        <div className="relative z-10 max-w-7xl px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="h-[120px] md:h-[180px] w-full mx-auto max-w-6xl">
              <motion.h1
                transition={{ duration: 0.6 }}
                className="font-serif text-2xl md:text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight text-center"
              >
                Smart Law for Smart Ventures <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentLine}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-4xl lg:text-6xl font-bold text-pr max-w-3xl leading-tight text-accent"
                  >
                    {heroLines[currentLine]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* clients brand logo showcase scrolling */}
      <section className="py-12 bg-background overflow-hidden relative">
        {/* Top line with text */}
        <div className="relative flex items-center justify-center w-full mb-10 max-w-7xl mx-auto px-6">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <span className="relative px-4 text-xs md:text-sm tracking-widest uppercase text-muted-foreground bg-background z-10 text-center font-[500]">
            Smart Ventures Trust Us
          </span>
        </div>

        {/* Scrolling logos container */}
        <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="mx-8 md:mx-12 flex items-center justify-center w-32 h-16 transition-all duration-300 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="relative flex items-center justify-center w-full mt-10 max-w-7xl mx-auto px-6">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </section>

      {/* Value Proposition */}
      {/* <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Clauses & Crowns"
            title="Counsel You Can Trust"
            description="We combine deep legal expertise with an intimate understanding of the Nigerian and African business environment to deliver practical, forward-looking solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group p-8 border border-border hover:border-accent/40 transition-all duration-500 bg-card"
              >
                <div className="gold-line mb-6" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Firm Overview */}
      {/* <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-3">
                Our Firm
              </p>
              <div className="gold-line mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Clauses & Crowns is a full-service law firm founded on the
                principles of integrity, diligence, and an unyielding pursuit of
                justice. With deep roots in Lagos and a global outlook, we serve
                a distinguished clientele spanning multinational corporations,
                government agencies, financial institutions, and entrepreneurial
                ventures.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Our team of seasoned legal practitioners brings together decades
                of combined experience across critical sectors of the Nigerian
                economy, positioning us as a trusted partner for complex legal
                challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "25+", label: "Years of Practice" },
                { number: "500+", label: "Cases Handled" },
                { number: "50+", label: "Corporate Clients" },
                { number: "8", label: "Practice Areas" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-8 bg-card border border-border"
                >
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              Our team is prepared to provide the strategic counsel your
              business requires. Reach out to schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* <StayInformed /> */}
    </main>
  );
};

export default Index;

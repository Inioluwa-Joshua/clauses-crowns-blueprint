"use client";

import { motion } from "framer-motion";
import { Building2, Home, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroPractice from "@/assets/hero-practice.jpg";
import { practiceAreas } from "@/data/firmData";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Home,
  Rocket,
};

const PracticeAreas = () => {
  return (
    <main>
      <PageHero
        title="Your Trusted Legal Ventures"
        subtitle="Comprehensive legal solutions across key sectors"
        backgroundImage={heroPractice}
      />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Expertise"
            title="Practice Areas"
            description="We deliver strategic, results-driven counsel across our core areas of expertise."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="group p-10 border border-border hover:border-accent/40 bg-card transition-all duration-500"
                >
                  <div className="w-16 h-16 mb-6 rounded-full border border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                    {Icon && <Icon className="w-7 h-7 text-accent" />}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              For enquiries about our practice areas or to schedule a
              consultation, please reach out to our team.
            </p>
            <div className="space-y-4 font-sans text-muted-foreground">
              <p>
                <span className="text-accent font-medium">Email:</span>{" "}
                info@clausesandcrowns.com
              </p>
              <p>
                <span className="text-accent font-medium">Phone:</span> +234 (0)
                1 234 5678
              </p>
              <p>
                <span className="text-accent font-medium">Address:</span> 14
                Adeola Odeku Street, Victoria Island, Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default PracticeAreas;

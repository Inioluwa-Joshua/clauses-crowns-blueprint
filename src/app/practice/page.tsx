"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Rocket,
  Briefcase,
  Cpu,
  Globe,
  Shield,
  Lightbulb,
  FileText,
  Scale,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroPractice from "@/assets/hero-practice.jpg";
import { practiceAreas } from "@/data/firmData";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Home,
  Rocket,
  Briefcase,
  Cpu,
  Globe,
  Shield,
  Lightbulb,
  FileText,
  Scale,
};

const PracticeAreas = () => {
  return (
    <main>
      <PageHero
        title="Your Trusted Legal Ventures"
        backgroundImage={heroPractice}
      />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Practice Areas"
            description="We deliver strategic, results-driven counsel across our core areas of expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {practiceAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden border border-border/50 hover:border-accent/40 bg-card transition-all duration-500 flex flex-row min-h-[150px] w-full gap-3 justify-between "
                >
                  <div className="w-[60%] p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-secondary rounded-lg text-accent-foreground group-hover:bg-accent group-hover:text-primary transition-colors duration-500 hidden md:block">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-foreground w-full">
                        {area.title}
                      </h3>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/practice/${area.slug}`}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors duration-300 group/link"
                      >
                        <span className="border-b border-accent/30 group-hover/link:border-accent transition-colors">
                          Learn More
                        </span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Section - 40% width on md+ */}
                  <div className="flex-1 relative min-h-full overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
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

      {/* <StayInformed /> */}
    </main>
  );
};

export default PracticeAreas;

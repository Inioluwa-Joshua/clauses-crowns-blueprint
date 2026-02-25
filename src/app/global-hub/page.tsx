"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroHome from "@/assets/hero-home.jpg";
import { globalInsights } from "@/data/firmData";

const GlobalHub = () => {
  return (
    <main>
      <PageHero
        title="Global Hub"
        subtitle="Legal intelligence from around the world"
        backgroundImage={heroHome}
      />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="International Perspectives"
            title="Global Legal Insights"
            description="Timely analysis of international developments shaping the legal landscape for African businesses and investors."
          />

          <div className="space-y-8">
            {globalInsights.map((insight, i) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col md:flex-row items-start gap-6 p-8 border border-border bg-card hover:border-accent/40 transition-all duration-500"
              >
                <div className="w-14 h-14 shrink-0 rounded-full border border-accent/30 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest text-accent font-sans font-medium">
                      {insight.region}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">
                      {insight.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 mt-2" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default GlobalHub;

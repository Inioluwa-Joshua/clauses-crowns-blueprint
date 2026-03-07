"use client";

import { use } from "react";
import { practiceAreas } from "@/data/firmData";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Rocket,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  Cpu,
  Globe,
  Shield,
  Lightbulb,
  FileText,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import StayInformed from "@/components/StayInformed";

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

const PracticeAreaDetail = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const Icon = iconMap[area.icon];

  return (
    <main>
      <PageHero
        title={area.title}
        backgroundImage={{ src: area.image, width: 1920, height: 1080 }}
      />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/practice"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Practice Areas
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-secondary rounded-xl text-accent">
                    <Icon size={32} />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                    Our Expertise
                  </h2>
                </div>

                <div className="prose prose-lg prose-slate max-w-none font-sans text-muted-foreground space-y-6">
                  {area.content.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-secondary/30 border border-border rounded-2xl">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Key Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Regulatory Strategic Advice",
                      "Transaction Structuring",
                      "Risk Mitigation & Compliance",
                      "Dispute Resolution Support",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-accent" />
                        <span className="font-sans text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32 space-y-8"
              >
                <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Ready to discuss your project?
                  </h3>
                  <p className="font-sans text-primary-foreground/80 mb-8">
                    Our team is ready to provide the legal counsel you need for
                    your business goals.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>

                <div className="p-8 border border-border rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Other Practice Areas
                  </h3>
                  <div className="space-y-4">
                    {practiceAreas
                      .filter((p) => p.slug !== area.slug)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/practice/${p.slug}`}
                          className="flex items-center justify-between p-4 bg-card hover:bg-secondary transition-colors rounded-lg group"
                        >
                          <span className="font-sans font-medium text-foreground group-hover:text-accent">
                            {p.title}
                          </span>
                          <Icon
                            size={16}
                            className="text-muted-foreground group-hover:text-accent"
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default PracticeAreaDetail;

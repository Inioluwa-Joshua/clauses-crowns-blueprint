"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroAbout from "@/assets/hero-about.jpg";
import { Scale, Eye, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every engagement, earning trust through transparency and honesty.",
  },
  {
    icon: Eye,
    title: "Excellence",
    description:
      "We pursue perfection in legal analysis, advocacy, and client service, setting the benchmark for quality.",
  },
  {
    icon: Target,
    title: "Diligence",
    description:
      "Meticulous attention to detail and thoroughness define our approach to every legal matter we undertake.",
  },
  {
    icon: Heart,
    title: "Client-Centred",
    description:
      "Our clients' interests remain paramount. We tailor strategies to achieve their unique objectives and aspirations.",
  },
];

const About = () => {
  return (
    <main>
      <PageHero
        title="Smart Ventures Trust Us"
        subtitle="Built on integrity. Driven by excellence."
        backgroundImage={heroAbout}
      />

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Who We Are" title="Welcome to Clauses and Crowns" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground font-sans leading-relaxed text-center"
          >
            <p>
              Clauses & Crowns was established with a singular vision: to
              deliver world-class legal services rooted in the rich legal
              traditions of Nigeria while embracing the complexities of a
              rapidly evolving global business landscape.
            </p>
            <p>
              From our headquarters in Lagos, we have cultivated a reputation
              for intellectual rigour, strategic thinking, and an unwavering
              commitment to our clients. Our team comprises distinguished legal
              practitioners who bring deep sectoral knowledge and cross-border
              expertise to every engagement.
            </p>
            <p>
              We pride ourselves on building lasting relationships founded on
              trust, mutual respect, and the consistent delivery of exceptional
              results. Whether advising a multinational corporation on a complex
              acquisition or guiding a startup through its formative stages, we
              approach every matter with the same dedication and
              professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="gold-line mb-5" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                To be the foremost law firm in Africa, recognised globally for
                our unwavering commitment to legal excellence, ethical practice,
                and the transformative impact of our counsel on businesses,
                communities, and the rule of law.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="gold-line mb-5" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                To provide innovative, commercially astute, and ethically
                grounded legal solutions that empower our clients to achieve
                their objectives. We are committed to fostering a culture of
                continuous learning, diversity, and excellence within our firm
                and the legal profession at large.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What Guides Us"
            title="Core Values"
            description="The principles that define our practice and shape every client interaction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-8 border border-border hover:border-accent/40 transition-all duration-500 bg-card"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-accent/30 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default About;

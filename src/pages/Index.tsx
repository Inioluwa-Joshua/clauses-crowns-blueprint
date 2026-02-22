import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import { practiceAreas } from "@/data/firmData";

const heroLines = [
  "Excellence in Legal Counsel",
  "Integrity Without Compromise",
  "Trusted Across Borders",
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
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="gold-line mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-sans mb-4">
              Clauses & Crowns
            </p>

            <div className="h-[120px] md:h-[160px] flex items-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentLine}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-3xl leading-tight"
                >
                  {heroLines[currentLine]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/60 font-sans font-light max-w-xl leading-relaxed"
            >
              A premier Nigerian law firm delivering strategic, results-driven
              legal solutions to businesses, institutions, and high-net-worth
              individuals across Africa and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                Our Practice
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-colors duration-300"
              >
                About the Firm
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Why Choose Us"
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
      </section>

      {/* Firm Overview */}
      <section className="section-padding bg-secondary">
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
                principles of integrity, diligence, and an unyielding pursuit
                of justice. With deep roots in Lagos and a global outlook, we
                serve a distinguished clientele spanning multinational
                corporations, government agencies, financial institutions, and
                entrepreneurial ventures.
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
                { number: "3", label: "Practice Areas" },
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
      </section>

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
              Our team is prepared to provide the strategic counsel your business
              requires. Reach out to schedule a consultation.
            </p>
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium hover:bg-navy-light transition-colors duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default Index;

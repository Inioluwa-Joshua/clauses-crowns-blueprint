import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Scale } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroCsr from "@/assets/hero-csr.jpg";

const initiatives = [
  {
    icon: BookOpen,
    title: "Legal Literacy Programme",
    description:
      "We conduct free legal awareness workshops in underserved communities across Lagos, empowering citizens with knowledge of their fundamental rights and legal remedies.",
  },
  {
    icon: Users,
    title: "Youth Mentorship Initiative",
    description:
      "Our lawyers volunteer as mentors to aspiring law students from disadvantaged backgrounds, providing guidance, scholarship support, and internship opportunities.",
  },
  {
    icon: Scale,
    title: "Pro Bono Legal Services",
    description:
      "We dedicate a significant portion of our practice to pro bono work, representing individuals and organisations who lack access to quality legal representation.",
  },
  {
    icon: Heart,
    title: "Community Development",
    description:
      "Through strategic partnerships with NGOs and community leaders, we support infrastructure development, healthcare access, and educational initiatives across Nigeria.",
  },
];

const CSR = () => {
  return (
    <main>
      <PageHero
        title="Corporate Social Responsibility"
        subtitle="Making a meaningful impact beyond the courtroom"
        backgroundImage={heroCsr}
      />

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Our Commitment"
            title="Giving Back"
            description="At Clauses & Crowns, we believe that the practice of law carries a profound obligation to serve society. Our CSR initiatives reflect our commitment to justice, equity, and community development."
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground font-sans leading-relaxed text-center mb-16"
          >
            We are deeply invested in creating a more just and equitable society.
            Through our pro bono practice, community engagement programmes, and
            strategic partnerships, we strive to extend the reach of quality legal
            services to those who need them most.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Initiatives"
            title="How We Make a Difference"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 border border-border bg-card hover:border-accent/40 transition-all duration-500"
              >
                <div className="w-14 h-14 mb-5 rounded-full border border-accent/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {item.description}
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

export default CSR;

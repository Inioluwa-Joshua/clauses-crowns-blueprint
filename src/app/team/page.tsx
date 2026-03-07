"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroAbout from "@/assets/hero-about.jpg";
import { teamMembers } from "@/data/firmData";

const Team = () => {
  return (
    <main>
      <PageHero title="Our Team" backgroundImage={heroAbout} />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group overflow-hidden border border-border bg-card hover:border-accent/40 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <Image
                    src={
                      typeof member.image === "string"
                        ? member.image
                        : member.image.src
                    }
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-sans mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <StayInformed /> */}
    </main>
  );
};

export default Team;

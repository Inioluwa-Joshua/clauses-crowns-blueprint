"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
const heroAbout = "/hero-about.jpg";
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
      <PageHero title="Smart Ventures Trust Us" backgroundImage={heroAbout} />

      {/* Overview */}
      <section className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-gray-800 text-center py-10 font-cormorant">
            Welcome to <span className="text-accent">Clauses & Crowns</span>
          </h1>
        </div>

        <main className="w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {/* Top Left Image */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/aboutpg1.png"
                alt="office plant"
                className="absolute inset-0 w-full h-full object-cover "
              />
            </div>

            {/* About Us */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-secondary p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">
                Description of Practice Areas
              </h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                We are a new-age legal practice built for visionaries,
                innovators, founders, and forward-moving enterprises. The
                business landscape has changed. Technology is rewriting the
                rules and ideas are scaling faster than ever before. In this new
                economy, legal services must be smarter, sharper, and
                strategically aligned with growth. That is where we come in.
                Clauses & Crowns is established to serve smart ventures with
                smart law. We combine legal depth with commercial awareness, and
                we integrate technology into the way we think and deliver
                solutions. Our approach is proactive, not reactive. Strategic,
                not routine. Innovative, not outdated At Clauses & Crowns, we
                believe law should not merely protect what exists, it should
                enable what is possible. This is the beginning of a modern legal
                experience. We are excited for the journey ahead, and we look
                forward to partnering with individuals and organisations who are
                building the future.
              </p>
            </div>

            {/* Top Right Image */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/aboutpg2.jpeg"
                alt="woman working"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Core Values */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-white p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">
                Core Values
              </h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                At Clauses & Crowns, our work is guided by innovation, forward
                thinking, and excellence. We believe legal support should evolve
                with the modern business world, which is why we approach every
                matter with fresh thinking and a strategic mindset.
              </p>
            </div>

            {/* Team Image */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/hero-practice.jpg"
                alt="team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Vision */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-white p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">Vision</h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                To shape the future of business by equipping ventures to succeed
                in a fast-changing and technology driven world through strategic
                and forward-thinking legal services.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="w-full md:w-2/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/candc.png"
                alt="team hands"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* CSR */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-secondary p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">Mission</h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                To provide innovative, and technology-driven legal advisory
                services that protect ideas and position our clients for
                long-term success.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* <StayInformed /> */}
    </main>
  );
};

export default About;

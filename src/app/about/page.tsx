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
      <PageHero title="Smart Ventures Trust Us" backgroundImage={heroAbout} />

      {/* Overview */}
      <section className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="" title="Welcome to Clauses and Crowns" />
        </div>

        <main className="w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {/* Top Left Image */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/hero-home.jpg"
                alt="office plant"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* About Us */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-secondary p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">
                Description of Practice Areas
              </h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                Welcome to T & A Legal, your trusted partner for comprehensive
                legal solutions spanning commercial law, real estate,
                construction, agriculture, intellectual property, ICT,
                government and public sector matters, immigration, employment,
                and dispute resolution. With offices strategically located in
                Lagos, Ibadan, and Abuja, we are proud to serve your Nigerian
                legal needs with precision and excellence.
              </p>
            </div>

            {/* Top Right Image */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/hero-home.jpg"
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
                At T & A Legal, we uphold core values of integrity, innovation,
                and prompt responsiveness to your unique requirements. Our
                dedicated legal team is driven by a relentless commitment to
                deliver efficiency and effectiveness in our services.
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
                Our commitment is to assist and empower our clients to reach the
                pinnacle of their industries by delivering outstanding legal
                advice.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="w-full md:w-2/3 min-h-[220px] md:min-h-[260px] relative">
              <img
                src="/hero-csr.jpg"
                alt="team hands"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* CSR */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-[260px] bg-secondary p-8 flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-3 text-gray-800">Mission</h2>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                At T & A Legal, we consider it an honour to make meaningful
                contributions to the communities in which we operate. This is
                achieved through periodic hosting of law clinics, where we
                primarily provide pro bono services to members of the community.
              </p>
            </div>
          </div>
        </main>
      </section>

      <StayInformed />
    </main>
  );
};

export default About;

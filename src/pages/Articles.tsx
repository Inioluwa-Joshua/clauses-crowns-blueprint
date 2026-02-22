import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";
import heroPractice from "@/assets/hero-practice.jpg";
import { articles } from "@/data/firmData";

const featured = articles.filter((a) => a.featured);

const Articles = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);

  return (
    <main>
      <PageHero
        title="Articles"
        subtitle="Insights and analysis from our legal experts"
        backgroundImage={heroPractice}
      />

      {/* Featured Carousel */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-3 text-center">
            Featured
          </p>
          <div className="gold-line mx-auto mb-10" />

          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center px-12"
              >
                <span className="text-xs uppercase tracking-widest text-accent font-sans">
                  {featured[current].category}
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-bold mt-3 mb-4">
                  {featured[current].title}
                </h2>
                <p className="text-primary-foreground/60 font-sans text-lg max-w-2xl mx-auto">
                  {featured[current].excerpt}
                </p>
                <p className="text-xs text-primary-foreground/40 font-sans mt-4">
                  {featured[current].date}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
              aria-label="Next article"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-accent" : "bg-primary-foreground/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="All Articles"
            title="Latest Publications"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border border-border bg-card hover:border-accent/40 transition-all duration-500 p-8"
              >
                <span className="text-xs uppercase tracking-widest text-accent font-sans">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-sans">
                    {article.date}
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <StayInformed />
    </main>
  );
};

export default Articles;

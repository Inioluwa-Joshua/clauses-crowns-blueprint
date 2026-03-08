"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/firmData";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";

const CATEGORIES = [
  "All",
  "Agriculture",
  "Corporate/Commercial",
  "Data Privacy Protection",
  "Dispute Resolution",
  "Intellectual Property",
  "International Desk",
  "Probate & Family",
  "Real Estate & Construction",
  "Tax Advisory & Regulation",
];

const featured = articles.filter((a) => a.featured);

const Articles = () => {
  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      const filteredTitles = articles
        .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
        .map((a) => a.title)
        .slice(0, 5);
      setSuggestions(filteredTitles);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <main>
      <div className="text-center">
        <div className="bg-primary py-10" />
        <div className="py-10 space-y-2">
          <h1 className="text-center text-4xl">Articles</h1>
          <p className="text-md tracking-[0.25em] text-primary/50 font-sans font-medium mb-3 text-center">
            The latest news, views, and insights from our people.
          </p>
        </div>
      </div>

      {/* Featured Carousel */}
      <section className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={featured[current].image}
              alt={featured[current].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>

        <div className="section-padding relative z-10 text-primary-foreground">
          <div className="max-w-5xl mx-auto">
            <div className="gold-line mx-auto mb-10" />

            <div className="relative min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-12"
                >
                  <span className="text-xs uppercase tracking-widest text-accent font-sans">
                    {featured[current].category}
                  </span>
                  <Link href={`/articles/${featured[current].slug}`}>
                    <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 hover:text-accent transition-colors cursor-pointer">
                      {featured[current].title}
                    </h2>
                  </Link>
                  <p className="text-primary-foreground/80 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
                    {featured[current].excerpt}
                  </p>
                  <p className="text-xs text-primary-foreground/40 font-sans mt-6">
                    {featured[current].date}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-primary-foreground/20 rounded-full hover:border-accent hover:text-accent transition-all hover:bg-accent/10"
                aria-label="Previous article"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-primary-foreground/20 rounded-full hover:border-accent hover:text-accent transition-all hover:bg-accent/10"
                aria-label="Next article"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-12">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === current
                      ? "w-8 bg-accent"
                      : "w-2 bg-primary-foreground/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-primary/50 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto flex items-center gap-4 py-4 px-8">
            <span className="text-xs uppercase tracking-widest text-accent font-sans font-bold">
              Trending:
            </span>
            <p className="text-sm text-primary-foreground/80">
              Oyo Goes Digital - New Online Property Search Launched
            </p>
          </div>
        </div>
      </section>

      {/* Articles with Sidebar and Search */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12 relative max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onFocus={() =>
                  searchQuery.length > 1 && setShowSuggestions(true)
                }
                onChange={handleSearchChange}
                className="w-full bg-card border border-border px-12 py-4 font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setShowSuggestions(false);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute z-10 w-full mt-2 bg-card border border-border shadow-2xl"
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-6 py-3 hover:bg-accent/10 hover:text-accent transition-colors font-sans text-sm border-b border-border last:border-0"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filter */}
            <aside className="lg:w-1/4">
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-6">
                Filter by Category
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-4 py-2 text-sm font-sans transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-accent text-white lg:translate-x-2"
                        : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <SectionHeading
                  title={
                    searchQuery || selectedCategory !== "All"
                      ? "Results"
                      : "More Articles"
                  }
                />
                <span className="text-sm text-muted-foreground font-sans">
                  Showing {filteredArticles.length} articles
                </span>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredArticles.map((article, i) => (
                    <Link href={`/articles/${article.slug}`} key={article.id}>
                      <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group border border-border bg-card hover:border-accent/40 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-accent text-white text-[10px] uppercase tracking-widest px-3 py-1 font-sans">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                          <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 flex-grow">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-xs text-muted-foreground font-sans">
                              {article.date || "March 2026"}
                            </span>
                            <div className="flex items-center gap-1 text-accent font-sans text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center border border-dashed border-border">
                  <p className="text-muted-foreground font-sans">
                    No articles found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-accent hover:underline text-sm font-sans"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <StayInformed /> */}
    </main>
  );
};

export default Articles;

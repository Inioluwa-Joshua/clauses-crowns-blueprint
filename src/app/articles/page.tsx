"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
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
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
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
                <Link href={`/articles/${featured[current].slug}`}>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold mt-3 mb-4 hover:text-accent transition-colors cursor-pointer">
                    {featured[current].title}
                  </h2>
                </Link>
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
        <div className="max-w-7xl mx-auto flex items-center gap-2 pt-10">
          <span className="text-xs uppercase tracking-widest text-accent font-sans">
            Trending:
          </span>
          <h1>Oyo Goes Digital - New Online Property Search Launched</h1>
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
                        className="group border border-border bg-card hover:border-accent/40 transition-all duration-500 p-8 h-full cursor-pointer flex flex-col"
                      >
                        <span className="text-xs uppercase tracking-widest text-accent font-sans">
                          {article.category}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs text-muted-foreground font-sans">
                            {article.date}
                          </span>
                          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

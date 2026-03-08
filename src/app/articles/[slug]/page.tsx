"use client";

import { use } from "react";
import { articles } from "@/data/firmData";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import StayInformed from "@/components/StayInformed";

const ArticleDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="">
      <div className="py-10 bg-primary" />
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] mb-12 overflow-hidden group">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            <span className="text-xs uppercase tracking-widest text-accent font-sans font-bold bg-accent/10 px-3 py-1 rounded-sm">
              {article.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mt-6 mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-8 items-center text-sm text-muted-foreground border-y border-border py-8 mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <span>{article.date || "March 8, 2026"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-accent" />
                </div>
                <span>{article.category}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none font-sans text-muted-foreground"
          >
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Share Section (Optional but makes it feel "standard") */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm font-sans text-muted-foreground mb-4">
              Share this article
            </p>
            <div className="flex gap-4">
              <button className="text-xs uppercase tracking-widest hover:text-accent transition-colors">
                Twitter
              </button>
              <button className="text-xs uppercase tracking-widest hover:text-accent transition-colors">
                LinkedIn
              </button>
              <button className="text-xs uppercase tracking-widest hover:text-accent transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="section-padding bg-secondary/30 mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeading
                label="Continue Reading"
                title="Related Articles"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {relatedArticles.map((item, i) => (
                  <Link href={`/articles/${item.slug}`} key={item.id}>
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group bg-card border border-border overflow-hidden h-full hover:border-accent/40 transition-all duration-500 cursor-pointer"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-8">
                        <span className="text-xs uppercase tracking-widest text-accent font-sans bg-accent/10 px-2 py-0.5">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-foreground mt-4 mb-3 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-sans line-clamp-2 mb-6">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs text-muted-foreground">
                            {item.date || "March 2026"}
                          </span>
                          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0" />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="mt-24">
          <StayInformed />
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;

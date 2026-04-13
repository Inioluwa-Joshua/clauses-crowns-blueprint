import { client } from "@/sanity/lib/client";
import { ARTICLE_BY_SLUG_QUERY, ARTICLES_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ArticleDetailClient from "./ArticleDetailClient";
import { SanityArticle } from "../ArticlesClient";

// Optionally set revalidation or generation behavior
export const revalidate = 60;

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch article
  const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });

  if (!article) {
    notFound();
  }

  // Fetch related articles - Ideally you'd do this via GROQ within the slug query for maximum efficiency,
  // but for simplicity we fetch all and filter or make a separate query. 
  // Let's just fetch all articles from the same category to mirror the previous logic.
  const allArticles: SanityArticle[] = await client.fetch(ARTICLES_QUERY);
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
  );
}

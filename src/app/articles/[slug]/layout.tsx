import { Metadata } from "next";
import { ARTICLE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// 1. Keep your metadata logic
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });

    if (!article) {
        return { title: "Article not found" };
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: article.image
                ? [{
                        url: urlFor(article.image).url(),
                        width: 1200,
                        height: 630,
                        alt: article.title,
                  }]
                : [],
        },
    };
}

// 2. ADD THIS: The missing default export
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
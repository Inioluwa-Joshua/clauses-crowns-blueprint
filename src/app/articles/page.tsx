import { client } from "@/sanity/lib/client";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";
import ArticlesClient, { SanityArticle } from "./ArticlesClient";
import StayInformed from "@/components/StayInformed";

// Revalidate the page periodically or you can use webhooks for on-demand revalidation
export const revalidate = 60;

export default async function ArticlesPage() {
  const articles: SanityArticle[] = await client.fetch(ARTICLES_QUERY);

  return (
    <>
      <ArticlesClient articles={articles} />
      <div className="mt-0">
        <StayInformed />
      </div>
    </>
  );
}

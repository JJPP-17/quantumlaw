import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../../../lib/legacyArticles.json";
import { Arrow, ContactBand } from "../../../components/PublicDesign";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? { title: `${article.title} - Quantum Law Group`, description: `Archived Quantum Law Group article from ${article.date.slice(0, 4)}.` }
    : {};
}

export default async function ArchivedArticle({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const date = new Date(`${article.date}T12:00:00Z`).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });

  return <main id="main-content" className="public-page designed-page news-article-page">
    <section className="article-hero"><div className="site-container">
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/news">Insights</Link><span>/</span><span>Archive</span></nav>
      <span className="eyebrow">FROM THE ARCHIVE · {date}</span>
      <h1>{article.title}</h1>
      <p>This article was published in {article.date.slice(0, 4)} and is retained for reference. Its information may no longer be current.</p>
    </div></section>
    <section className="section-space article-section"><div className="site-container article-layout">
      <aside className="article-aside"><Link href="/news" className="text-link">← All insights</Link><div className="article-aside-rule"/><span className="eyebrow">PUBLISHED</span><p>{date}</p></aside>
      <article className="article-main"><div className="article-prose">{article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><div className="article-return"><Link href="/news" className="text-link">More insights <Arrow/></Link></div></article>
    </div></section><ContactBand/>
  </main>;
}

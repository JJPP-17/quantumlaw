import articles from '../lib/legacyArticles.json';

const base = 'https://quantumlaw.com.au';

export default function sitemap() {
  const current = ['', '/whatwedo', '/ourteam', '/news', '/aboutus', '/aboutus/awards', '/howweoperate', '/contact', '/privacy-policy', '/termsofuse'];
  return [
    ...current.map((path) => ({ url: `${base}${path}`, changeFrequency: 'monthly' })),
    ...articles.map((article) => ({ url: `${base}/news/archive/${article.slug}`, lastModified: article.date, changeFrequency: 'never' })),
  ];
}

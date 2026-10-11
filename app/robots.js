export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin/', '/login'] }],
    sitemap: 'https://quantumlaw.com.au/sitemap.xml',
  };
}

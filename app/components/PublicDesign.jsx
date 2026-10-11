import Link from "next/link";

export function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function PageHero({ eyebrow, title, description }) {
  return <section className="page-hero"><div className="site-container"><div className="page-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div><div className="page-hero-grid"><h1>{title}</h1>{description && <p>{description}</p>}</div></div></section>;
}

export function ContactBand({ title = "Let’s find your way forward.", description = "Start a conversation with our team about your matter." }) {
  return <section className="contact-band"><div className="site-container"><div><span className="eyebrow">CONTACT</span><h2>{title}</h2><p>{description}</p></div><Link className="button button-light" href="/contact">Discuss your matter <Arrow diagonal /></Link></div></section>;
}

export function ContentState({ loading, error, empty = "There are no results to show right now.", onRetry }) {
  return <div className="content-state" role="status"><p>{loading ? "Loading…" : error ? "We couldn’t load this information. Please try again." : empty}</p>{error && onRetry && <button className="text-link" onClick={onRetry}>Try again <Arrow /></button>}</div>;
}

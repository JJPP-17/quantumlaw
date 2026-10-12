import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, PageHero } from "../components/PublicDesign";
import { practiceAreas } from "./practiceAreas";

export const metadata = {
  title: "What We Do — Quantum Law Group",
  description: "Explore Quantum Law Group's practice areas and selected matter outcomes.",
};

export default function WhatWeDo() {
  return <main id="main-content" className="public-page designed-page practice-index">
    <PageHero eyebrow="What we do" title="Legal advice for difficult matters." description="Our work spans disputes, transactions and personal legal matters." />

    <section className="practice-introduction section-space">
      <div className="site-container practice-intro-grid">
        <span className="eyebrow">OUR APPROACH</span>
        <div>
          <h2>Working with you.</h2>
          <p>We help individuals and businesses of all sizes proactively minimise legal risks. We are always on standby to resolve legal problems commercially and creatively.</p>
          <p>We pride ourselves on solving difficult problems for our clients. We are often approached as a firm of last resort for high-stakes litigation and disputes after clients have exhausted other options.</p>
        </div>
      </div>
    </section>

    <nav className="practice-jump-nav" aria-label="Practice areas">
      <div className="site-container">{practiceAreas.map((area, index) => <a href={`#${area.id}`} key={area.id}><span>{String(index + 1).padStart(2, "0")}</span>{area.title}<Arrow diagonal /></a>)}</div>
    </nav>

    {practiceAreas.map((area, index) => <section className="practice-feature section-space" id={area.id} key={area.id}>
      <div className="site-container">
        <div className="practice-feature-heading"><span className="eyebrow">{area.eyebrow}</span><span className="practice-feature-number">{String(index + 1).padStart(2, "0")} / {String(practiceAreas.length).padStart(2, "0")}</span></div>
        <h2>{area.title}</h2>
        <div className={`practice-feature-grid${area.image ? " has-awards" : ""}`}>
          <div className="practice-feature-copy"><p className="practice-feature-intro">{area.intro}</p><ul>{area.outcomes.map((outcome, itemIndex) => <li key={itemIndex}><span className="outcome-marker" aria-hidden="true"/><p>{outcome}</p></li>)}</ul><Link href={`/whatwedo/${area.id}`} className="text-link">Explore this practice area <Arrow /></Link></div>
          {area.image && <aside className="practice-awards"><div className="practice-awards-header"><span className="eyebrow">RECOGNITION</span><Link href="/aboutus/awards" aria-label={`View awards for ${area.title}`}><Arrow diagonal /></Link></div><Image src={area.image} alt={area.imageAlt} width={1800} height={2250} sizes="(max-width: 800px) 100vw, 36vw" /><Link href="/aboutus/awards" className="practice-awards-footer">More awards and recognition <Arrow /></Link></aside>}
        </div>
      </div>
    </section>)}
    <ContactBand />
  </main>;
}

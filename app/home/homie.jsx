import AnimatedNumber from "../components/AnimatedNumber";
import Image from "next/image";
import Link from "next/link";
import { getValue } from "../utils/content";
import { Arrow, ContactBand } from "../components/PublicDesign";

const corePractices = [
  { title: "Dispute resolution & litigation", href: "/whatwedo#dispute" },
  { title: "Commercial & property", href: "/whatwedo#commercial" },
  { title: "Criminal law", href: "/whatwedo#criminal" },
  { title: "Construction & infrastructure", href: "/whatwedo#construction" },
  { title: "Insolvency", href: "/whatwedo#insolvency" },
  { title: "Family law", href: "/whatwedo#familylaw" },
];

export default function Homie({ contents = [] }) {
  const awards = getValue("numAwardsWonOrListed", contents);
  const disputeValue = getValue("totalAmountAtStakeInDisputesNumber", contents);
  const transactionValue = getValue("numTransactions", contents);
  const figures = [
    { value: awards, label: "Awards won or listed" },
    { value: disputeValue, label: "At stake in disputed matters", currency: true },
    { value: transactionValue, label: "Transactional and advisory matters", currency: true },
  ].filter(({ value }) => value !== null && value !== undefined && value !== "");

  return <main id="main-content" className="public-page new-home refined-home">
    <section className="refined-hero">
      <div className="site-container refined-hero-inner">
        <div className="refined-hero-copy">
          <span className="eyebrow">INDEPENDENT SYDNEY LAW FIRM</span>
          <h1>We handle difficult and <span className="hero-no-break">high-stakes</span> cases.</h1>
          <p>Disputes, transactions and personal legal matters. Direct advice from the people working on your case.</p>
          <div className="refined-hero-actions">
            <Link className="button button-white" href="/whatwedo">What we do <Arrow diagonal /></Link>
            <Link className="refined-hero-contact" href="/contact">Speak with us <Arrow /></Link>
          </div>
        </div>
        <Link href="/aboutus/awards" className="refined-hero-art" aria-label="Explore Quantum Law Group's awards and recognition">
          <Image src="/awards-bundle-2026.png" alt="Quantum Law Group awards and finalist recognition" width={1800} height={1665} priority sizes="(max-width: 800px) 100vw, 48vw" />
        </Link>
      </div>
      {figures.length > 0 && <aside className="site-container refined-hero-figures" aria-label="Our journey so far">
          <span className="eyebrow">OUR JOURNEY SO FAR</span>
          {figures.map(figure => <div className="refined-hero-figure" key={figure.label}>
            <AnimatedNumber value={figure.value} currency={figure.currency} />
            <span>{figure.label}</span>
          </div>)}
          <Link className="refined-figures-link" href="/aboutus/awards">Recognition and awards <Arrow /></Link>
      </aside>}
    </section>

    <section className="section-space refined-expertise" id="expertise">
      <div className="site-container refined-section-grid">
        <div className="refined-section-intro">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>What we do.</h2>
          <p>We bring the right experience to each matter and work closely with you from the first conversation.</p>
          <Link className="text-link" href="/whatwedo">View all expertise <Arrow /></Link>
        </div>
        <div className="refined-practice-list">
          {corePractices.map((area, index) => <Link key={area.href} href={area.href}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{area.title}</strong><Arrow diagonal />
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section-space refined-people"><div className="site-container refined-people-inner">
      <div><span className="eyebrow">OUR PEOPLE</span><h2>The people behind the advice.</h2></div>
      <div><p>Get to know the lawyers who will work with you on the decisions and disputes that matter.</p><Link className="text-link" href="/ourteam">Meet our team <Arrow /></Link></div>
    </div></section>
    <ContactBand title="Talk to us about your matter." description="Speak directly with our Sydney team." />
  </main>;
}

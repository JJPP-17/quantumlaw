import Link from "next/link";
import { Arrow } from "./PublicDesign";
import { getContents } from "../actions/content";
import { getValue } from "../utils/content";
export default async function Footer() {
  const { data = [] } = await getContents();
  const address = getValue("addressQuant", data) || "Suite 1805, Level 18/1 Bligh St, Sydney NSW 2000";
  const phone = getValue("phoneQuant", data) || "(02) 8067 8726";
  const email = getValue("emailQuant", data) || "info@quantumlaw.com.au";
  return <footer className="site-footer"><div className="site-container"><div className="footer-top"><Link href="/" className="footer-wordmark">QUANTUM<span>LAW GROUP</span></Link><p>Thoughtful strategy.<br />Resolute representation.</p><a className="footer-phone" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone} <Arrow diagonal /></a></div><div className="footer-grid"><div><h2>Visit us</h2><p>{address}</p><a href={`mailto:${email}`}>{email}</a></div><div><h2>Explore</h2><Link href="/whatwedo">Expertise</Link><Link href="/ourteam">Our people</Link><Link href="/news">Insights</Link><Link href="/contact">Contact us</Link></div><div><h2>Our firm</h2><Link href="/aboutus">About Quantum</Link><Link href="/howweoperate">Our approach</Link><Link href="/aboutus/awards">Recognition</Link><Link href="/careers">Careers</Link></div><div><h2>Connect</h2><a href="https://www.linkedin.com/company/qlg/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/quantumlaw.com.au/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/quantumlawgroup" target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></div><div className="footer-bottom"><div><span>© {new Date().getFullYear()} Quantum Law Group</span><Link href="/privacy-policy">Privacy policy</Link><Link href="/termsofuse">Terms of use</Link></div><p>Liability limited by a scheme approved under Professional Standards Legislation.</p></div></div></footer>;
}

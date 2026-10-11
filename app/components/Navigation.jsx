"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "../assets/assets";
import { Arrow } from "./PublicDesign";

const links = [{ href: "/whatwedo", label: "Expertise" }, { href: "/ourteam", label: "Our people" }, { href: "/news", label: "Insights" }, { href: "/aboutus", label: "Our firm" }];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const onKey = (event) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, []);
  return <header className="site-header"><div className="contact-ribbon"><div className="site-container"><a href="tel:+61280678726">(02) 8067 8726</a><a href="mailto:info@quantumlaw.com.au">info@quantumlaw.com.au</a></div></div>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="site-container nav-inner">
      <Link href="/" className="nav-logo" onClick={() => setOpen(false)}><Image src={assets.logo} alt="Quantum Law Group" width={190} height={62} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
      <Link className="nav-contact" href="/contact">Contact us <Arrow diagonal /></Link>
      <button className="nav-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className={open ? "is-open" : ""} /><span className={open ? "is-open" : ""} /></button>
    </div>
    {open && <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation"><div className="site-container">{[...links,{href:"/howweoperate",label:"Our approach"},{href:"/aboutus/awards",label:"Recognition"},{href:"/contact",label:"Contact us"}].map(link=><Link href={link.href} key={link.href} onClick={()=>setOpen(false)}>{link.label}<Arrow diagonal /></Link>)}<a className="mobile-phone" href="tel:+61280678726">(02) 8067 8726</a></div></nav>}
  </header>;
}

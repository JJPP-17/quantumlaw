"use client";
import { useState } from "react";
import Link from "next/link";
import usePublicRows from "../utils/usePublicRows";
import { Arrow, PageHero, ContactBand, ContentState } from "../components/PublicDesign";
export default function Careers() {
  const {rows,loading,error,reload}=usePublicRows("careers","created_at",false,true);
  const [category,setCategory]=useState("All opportunities");
  const categories=["All opportunities",...new Set(rows.map(row=>row.category).filter(Boolean))];
  const jobs=rows.filter(item=>category==="All opportunities"||item.category===category);
  return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Careers" title="Make your next move count." description="Build your career with a team that values fresh thinking, collaboration, and personal development."/><section className="section-space"><div className="site-container"><div className="section-heading"><div><span className="eyebrow">GROW WITH QUANTUM</span><h2>Current opportunities.</h2></div></div><div className="filter-tabs" aria-label="Filter opportunities">{categories.map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div>{loading||error||jobs.length===0?<ContentState loading={loading} error={error} empty="There are no open opportunities in this category at present. Please check back soon." onRetry={reload}/>:<div className="careers-list">{jobs.map(job=><Link href={`/careers/${job.id}`} key={job.id} className="career-row"><div><h3>{job.position}</h3><span className="eyebrow">Sydney · {job.category}</span></div><p>{job.roledescription}</p><Arrow diagonal/></Link>)}</div>}</div></section><ContactBand title="Your future at Quantum." description="We’re always interested in hearing from thoughtful, motivated people."/></main>;
}

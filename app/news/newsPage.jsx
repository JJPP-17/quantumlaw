"use client";
import { useState } from "react";
import Link from "next/link";
import usePublicRows from "../utils/usePublicRows";
import { featuredMedia } from "./featuredMedia";
import { Arrow, PageHero, ContactBand, ContentState } from "../components/PublicDesign";
export default function NewsPage() {
  const {rows,loading,error,reload}=usePublicRows("news","date");
  const [category,setCategory]=useState("All insights");
  const [mediaYear,setMediaYear]=useState("all");
  const mediaYears=[...new Set(featuredMedia.map(item=>item.year))].sort((a,b)=>b-a);
  const media=[...featuredMedia].sort((a,b)=>b.year-a.year).filter(item=>mediaYear==="all"||String(item.year)===mediaYear);
  const categories=["All insights",...new Set(rows.map(row=>row.category).filter(Boolean))];
  const news=rows.filter(item=>category==="All insights"||item.category===category);
  return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Insights" title="A clearer perspective." description="News, ideas, and recognition from across Quantum Law Group."/><section className="section-space"><div className="site-container"><div className="filter-tabs" aria-label="Filter insights">{categories.map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div>{loading||error||news.length===0?<ContentState loading={loading} error={error} empty="No insights are available in this category yet." onRetry={reload}/>:<div className="insights-grid insight-list">{news.map((item,index)=><Link href={`/news/${item.id}`} key={item.id} className="insight-card"><div className={`insight-art art-${index%3}`} aria-hidden="true"><span>{String(index+1).padStart(2,"0")}</span><Arrow diagonal/></div><span className="eyebrow">{item.category||"Firm news"}</span><h3>{item.title}</h3><span className="insight-date">{item.date?new Date(item.date).toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}):""}</span></Link>)}</div>}</div></section><section className="section-space featured-media-section" id="media"><div className="site-container"><div className="section-heading media-heading"><div><span className="eyebrow">IN THE NEWS</span><h2>Latest media featured.</h2><p>Coverage, profiles, and conversations about our people and work.</p></div><div className="filter-field"><label htmlFor="media-year">Browse by year</label><select id="media-year" value={mediaYear} onChange={event=>setMediaYear(event.target.value)}><option value="all">All years</option>{mediaYears.map(year=><option value={year} key={year}>{year}</option>)}</select></div></div><div className="media-list">{media.map((item,index)=><a href={item.url} target="_blank" rel="noopener noreferrer" className="media-row" key={item.url}><span className="media-row-number">{String(index+1).padStart(2,"0")}</span><div><span className="eyebrow">{item.source} · {item.year}</span><h3>{item.title}</h3></div><Arrow diagonal /></a>)}</div></div></section><ContactBand/></main>;
}

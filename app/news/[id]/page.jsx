import Link from "next/link";
import {supabase} from "../../../lib/supabaseClient";
import {Arrow,PageHero,ContactBand} from "../../components/PublicDesign";
export const dynamic="force-dynamic";
export default async function NewsArticle({params}){
 const {id}=await params;
 const {data:article}=await supabase.from("news").select("*").eq("id",id).maybeSingle();
 if(!article)return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Insights" title="Article unavailable." description="This article could not be found. Please return to our insights."/><section className="section-space"><div className="site-container"><Link href="/news" className="text-link">All insights <Arrow/></Link></div></section></main>;
 let external=null;try{const url=new URL(article.link);if(["https:","http:"].includes(url.protocol))external=url;}catch{}
 const date=article.date?new Date(article.date).toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}):"";
 const blocks=String(article.content||"").split(/\n\s*\n/).map(block=>block.trim()).filter(Boolean);
 const renderBlock=(block,index)=>{
  const lines=block.split(/\n/).map(line=>line.trim()).filter(Boolean);
  if(lines.length>0&&lines.every(line=>/^[•*-]\s*/.test(line)))return <ul key={index} className="article-points">{lines.map((line,lineIndex)=><li key={lineIndex}>{line.replace(/^[•*-]\s*/,"")}</li>)}</ul>;
  return <p key={index}>{block}</p>;
 };
 return <main id="main-content" className="public-page designed-page news-article-page"><section className="article-hero"><div className="site-container"><nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/news">Insights</Link><span>/</span><span>Article</span></nav><span className="eyebrow">{article.category||"Firm news"} {date&&`· ${date}`}</span><h1>{article.title}</h1>{article.previewtext&&<p>{article.previewtext}</p>}</div></section><section className="section-space article-section"><div className="site-container article-layout"><aside className="article-aside"><Link href="/news" className="text-link">← All insights</Link><div className="article-aside-rule"/><span className="eyebrow">PUBLISHED</span><p>{date||"Quantum Law Group"}</p>{article.category&&<><span className="eyebrow">CATEGORY</span><p>{article.category}</p></>}</aside><article className="article-main"><div className="article-prose">{blocks.map(renderBlock)}</div>{external&&<a className="article-source-link" href={external.href} target="_blank" rel="noopener noreferrer"><span>Read the original article</span><Arrow diagonal/></a>}<div className="article-return"><Link href="/news" className="text-link">More insights <Arrow/></Link></div></article></div></section><ContactBand/></main>;
}

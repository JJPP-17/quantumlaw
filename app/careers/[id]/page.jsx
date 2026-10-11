import Link from "next/link";
import {supabase} from "../../../lib/supabaseClient";
import {Arrow,PageHero,ContactBand} from "../../components/PublicDesign";
export const dynamic="force-dynamic";
export default async function JobPosting({params}){
 const {id}=await params;
 const {data:job}=await supabase.from("careers").select("*").eq("id",id).maybeSingle();
 if(!job)return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Careers" title="Opportunity unavailable." description="Visit our careers page to explore current opportunities."/><section className="section-space"><div className="site-container"><Link href="/careers" className="text-link">Current opportunities <Arrow/></Link></div></section></main>;
 return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Careers" title={job.position} description={`Sydney · ${job.category}`}/><section className="section-space"><div className="site-container"><article className="editorial-body"><span className="eyebrow">THE OPPORTUNITY</span><div className="article-copy">{job.roledescription}</div>{[["What you’ll bring",job.qualifications],["How to apply",job.howtoapply]].map(([heading,text])=>text&&<section className="job-details" key={heading}><h2>{heading}</h2><ul>{text.split("\n").filter(line=>line.trim()).map((line,index)=><li key={index}>{line}</li>)}</ul></section>)}<Link className="text-link" href="/careers">All opportunities <Arrow/></Link></article></div></section><ContactBand title="Your future at Quantum." description="Speak with us about your career aspirations."/></main>;
}

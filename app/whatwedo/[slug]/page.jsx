import Link from "next/link";
import {getContents} from "../../actions/content";
import {Arrow,PageHero,ContactBand} from "../../components/PublicDesign";
function ServiceList({ text }) {
 const entries = text.split(/(?:\r?\n)+|(?=→)/).map(line=>line.replace(/^\s*(?:→|•|[-–]\s)\s*/, "").trim()).filter(Boolean);
 return <ul className="practice-services">{entries.map((entry,index)=>{const colon=entry.indexOf(":");return <li key={index}><span className="service-index" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><div>{colon>0&&colon<100?<><h3>{entry.slice(0,colon)}</h3><p>{entry.slice(colon+1).trim()}</p></>:<p>{entry}</p>}</div></li>;})}</ul>;
}
export const dynamic="force-dynamic";
export async function generateMetadata({params}){const {slug}=await params;return {title:`${slug.charAt(0).toUpperCase()+slug.slice(1)} — Quantum Law Group`};}
export default async function PracticeArea({params}){
 const {slug}=await params;
 const {data:contents=[]}=await getContents();
 const find=prefix=>contents.find(item=>item.key?.startsWith(prefix)&&item.key.slice(prefix.length).toLowerCase()===slug.toLowerCase());
 const title=find("whatWedoTitle"),expertise=find("whatWedoExpertise"),services=find("whatWedoServices");
 if(!title)return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Expertise" title="Expertise details unavailable." description="Please return to our expertise directory or contact us about your matter."/><section className="section-space"><div className="site-container"><Link className="text-link" href="/whatwedo">All expertise <Arrow/></Link></div></section></main>;
 return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Expertise" title={title.value} description={title.description}/><section className="section-space"><div className="site-container"><article className="editorial-body practice-body">{expertise?.description&&<><span className="eyebrow">OUR EXPERIENCE</span><div className="article-copy">{expertise.description}</div></>}{services?.description&&<><h2>How we can help.</h2><ServiceList text={services.description}/></>}<Link className="text-link" href="/whatwedo">Explore all expertise <Arrow/></Link></article></div></section><ContactBand/></main>;
}

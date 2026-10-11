import Image from "next/image";
import Link from "next/link";
import {supabase} from "../../../lib/supabaseClient";
import {Arrow,PageHero,ContactBand} from "../../components/PublicDesign";
export const dynamic="force-dynamic";
export default async function TeamMember({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const {data:member}=await supabase.from("ourteam").select("*").eq("membername",decodeURIComponent(slug)).maybeSingle();
 if(!member)return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Our people" title="Profile unavailable." description="Please return to our people to find the right contact."/><section className="section-space"><div className="site-container"><Link className="text-link" href="/ourteam">Our people <Arrow/></Link></div></section></main>;
 return <main id="main-content" className="public-page designed-page"><PageHero eyebrow="Our people" title={member.membername} description={member.position}/><section className="section-space"><div className="site-container profile-grid"><aside><div className="person-photo">{member.filename&&<Image src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${member.id}/${member.filename}`} alt={member.membername} fill priority sizes="(max-width:560px) 100vw, 35vw"/>}</div><div className="profile-contact"><span className="eyebrow">CONTACT</span>{member.email&&<a href={`mailto:${member.email}`}>{member.email}</a>}{member.firmnumber&&<a href={`tel:${member.firmnumber.replace(/[^+\d]/g,"")}`}>{member.firmnumber}</a>}{member.mobilenumber&&<a href={`tel:${member.mobilenumber.replace(/[^+\d]/g,"")}`}>{member.mobilenumber}</a>}</div></aside><article className="editorial-body"><span className="eyebrow">PROFILE</span><div className="article-copy">{member.description}</div>{member.expertise&&<><h2>Expertise</h2><p className="whitespace-pre-line">{member.expertise}</p></>}<Link href="/ourteam" className="text-link">Meet our people <Arrow/></Link></article></div></section><ContactBand/></main>;
}

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../assets/assets'

const teamMembers = [
  {
    name: "Zile Yu",
    role: "Managing Partner & Founder",
    image: assets.zile,
  },
  {
    name: "Daven Rasaratnam",
    role: "Partner",
    image: assets.daven,
  },
  {
    name: "William Wang",
    role: "Partner",
    image: assets.william,
  },
  {
    name: "Jordan Paris",
    role: "Chief Commercial Officer",
    image: assets.jordan,
  },
  {
    name: "Monika Lama",
    role: "Special Counsel - Family law",
    image: assets.noimage,
  },
  {
    name: "Adriana Vontelas",
    role: "Special Counsel",
    image: assets.adriana,
  },
  {
    name: "Catherine Robinson",
    role: "Senior Associate",
    image: assets.noimage,
  },
  {
    name: "Haoyu Zhang",
    role: "Associate",
    image: assets.noimage,
  },
  {
    name: "Louisa Liu",
    role: "Solicitor",
    image: assets.noimage,
  },
  {
    name: "Janice Cheng",
    role: "Solicitor",
    image: assets.noimage,
  },
  {
    name: "Reina Lee",
    role: "Paralegal",
    image: assets.noimage,
  },
  {
    name: "Vincent Tao",
    role: "Paralegal",
    image: assets.noimage,
  },
  {
    name: "Eric Wu",
    role: "Paralegal",
    image: assets.noimage,
  },
  {
    name: "Chloris Chiu",
    role: "Paralegal",
    image: assets.noimage,
  },
  {
    name: "Jyoti Jain",
    role: "Paralegal",
    image: assets.noimage,
  },
  {
    name: "Ronaputi Fauzia Purba",
    role: "HR & Development Assistant",
    image: assets.noimage,
  },
  {
    name: "Ponglada Prasertsincharoen",
    role: "Accounts Administrator",
    image: assets.noimage,
  },
  
  
  
  
  
  
]

export default function OurTeam() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Our Team
        </h1>
        <p className="text-center text-gray-600">
          We work together on a task-force basis on all of our matters, bringing to bear the requisite mix of people and expertise across practice areas.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <Link 
              key={index}
              href={`/ourteam/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index === 0}
                />
              </div>

              {/* Text Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h2>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
} 
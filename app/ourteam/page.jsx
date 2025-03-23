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
    name: "Adriana Vontelas",
    role: "Special Counsel",
    image: assets.adriana,
  },
  {
    name: "Jordan Paris",
    role: "Chief Commercial Officer",
    image: assets.jordan,
  },
]

export default function OurTeam() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Team
        </h1>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
'use client'
import { useState } from 'react'
import Link from 'next/link'

const jobOpenings = [
  {
    title: "Senior Associate – Dispute Resolution",
    location: "SYDNEY",
    type: "FULL TIME",
    highlights: [
      "Join our rapidly growing Dispute Resolution Practice",
      "True meritocracy model - be promoted by your contribution",
      "Flexible 3:2 work arrangements",
      "Generous leave policies including parental leave"
    ],
    slug: "senior-associate-dispute-resolution"
  },
  {
    title: "Associate – Commercial Property",
    location: "SYDNEY",
    type: "FULL TIME",
    highlights: [
      "Be part of the growing Property Practice",
      "Benefit from close interaction with partners",
      "Partnership track mentoring",
      "Flexible work arrangements"
    ],
    slug: "associate-commercial-property"
  },
  {
    title: "Graduate Lawyer",
    location: "SYDNEY",
    type: "FULL TIME",
    highlights: [
      "Be part of the growing Property Practice",
      "Benefit from close interaction with partners",
      "Partnership track mentoring",
      "Flexible work arrangements"
    ],
    slug: "associate-commercial-property"
  },
  {
    title: "Paralegal",
    location: "SYDNEY",
    type: "FULL TIME",
    type: "PART TIME",
    highlights: [
      "Be part of the growing Property Practice",
      "Benefit from close interaction with partners",
      "Partnership track mentoring",
      "Flexible work arrangements"
    ],
    slug: "associate-commercial-property"
  },
  {
    title: "Internship",
    location: "SYDNEY",
    type: "PART TIME",
    highlights: [
      "Be part of the growing Property Practice",
      "Benefit from close interaction with partners",
      "Partnership track mentoring",
      "Flexible work arrangements"
    ],
    slug: "associate-commercial-property"
  }
]

const values = [
  {
    title: "A True Meritocracy",
    description: "For a meritocracy such as Quantum Law Group, it is vital that all team members understand their role and how they can contribute to our collective success. Our transparent career development framework ensures that everyone is aware of the firm's expectations at each level."
  },
  {
    title: "Rewarding High Performance",
    description: "Our approach to rewarding our people is straightforward. We reward high performance, regardless of the role. We don't impose salary bands to artificially restrict salary increases - all team members are remunerated based on the value they deliver."
  },
  {
    title: "Career Progression",
    description: "Our staff receive open, transparent feedback to take ownership of their career development. Our unique career planning program provides regular meetings with supervising partners to discuss progress and identify growth opportunities."
  }
]

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('Sydney')

  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Careers
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            At Quantum Law Group, we are committed to working with you to achieve your personal developmental and career goals, while ensuring that our clients are provided with access to highly qualified and driven professionals.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-8">
            "We have an exceptionally talented and driven pool of staff, and we are determined to provide an environment that allows all team members to reach their potential."
          </blockquote>
        </div>
      </section>


      {/* Current Opportunities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Current Opportunities
        </h2>
        
        {/* Location Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['Sydney'].map((location) => (
            <button
              key={location}
              onClick={() => setActiveFilter(location)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === location
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Link
              key={index}
              href={`/careers/${job.slug}`}
              className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-4 text-blue-600 font-medium">
                Apply now →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to discuss opportunities?
          </h2>
          <p className="text-gray-600 mb-8">
            We welcome conversations about new opportunities. Please get in contact with us for a discussion.
          </p>
          <Link
            href="mailto:careers@quantumlaw.com.au"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 
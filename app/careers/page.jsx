'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabaseClient'

const categories = [
  'All Careers',
  'Full Time',
  'Part Time',
  'Full Time/Part Time',
  'Contract',
]
 

export default function Careers() {
  const [careers, setCareers] = useState([])
  const [activeCategory, setActiveCategory] = useState('All Careers')

  useEffect(() => {
    fetchData().then(setCareers)
  }, [])

  const fetchData = async () => {
    const { data: careers, error } = await supabase
      .from("careers")
      .select("*")
      .order("position", { ascending: false });

    return careers;
  }

  const filteredCareers = careers.filter((item) => {
    if (activeCategory === 'All Careers') return true
    if (activeCategory === 'Full Time') return item.category === 'Full Time'
    if (activeCategory === 'Part Time') return item.category === 'Part Time'
    if (activeCategory === 'Full Time/Part Time') return item.category === 'Full Time/Part Time'
    if (activeCategory === 'Contract') return item.category === 'Contract'
  })

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
        
        {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredCareers.map((job, index) => (
            <Link
              key={index}
              href={`/careers/${job.id}`}
              className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.position}
                </h3>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    Sydney
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {job.category}
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <p>{job.roledescription}</p>
              </ul>
              <div className="mt-4 text-blue-600 font-medium">
                More Info →
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
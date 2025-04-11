'use client'
import Image from 'next/image'
import { supabase } from '../../../lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Awards() {
  const [awards, setAwards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAwards()
  }, [])

  async function fetchAwards() {
    try {
      const { data, error } = await supabase
        .from('ourteam')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) throw error
      setAwards(data || [])
    } catch (error) {
      console.error('Error fetching awards:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  console.log(awards)

  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Awards & Recognition
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Our achievements have been highly recognised with around 98 legal industry awards and nominations in the last 3 years.
        </p>
      </section>

      {/* Awards Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {awards.map((award, index) => (
            award && award.awardsname ? (
            <div 
              key={index}
              className="group flex flex-col items-center"
            >
              {/* Circle Image Container */}
              <div className="relative w-48 h-48 mb-2">
                <div className="absolute inset-0 rounded-full bg-white group-hover:bg-white-200 transition-colors duration-300" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white group-hover:border-white-200 transition-colors duration-300">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${award.id}/${award.filename}`}
                    alt={award.awardsname}
                    fill
                    className="object-contain p-4 group-hover:opacity-80 transition-opacity duration-300"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>

              {/* Award Details */}
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-600 font-semibold text-sm mb-1">
                  {award.awardsname}
                </p>
                <h3 className="text-gray-600 mb-1 text-sm space-x-2">
                  {award.description} {award.awardsyear}
                </h3>
                <p className="text-gray-600 text-sm">
                  {award.awardstype}
                </p>
              </div>
            </div>
          ) : null
          ))}
        </div>
      </section>

    </main>
  )
} 
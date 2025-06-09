'use client'
import Image from 'next/image'
import { supabase } from '../../../lib/supabaseClient'
import { useEffect, useState, useMemo } from 'react'


export default function AwardsClient({ awardsDescription }) {
  const [awards, setAwards] = useState([])
  const [filteredAwards, setFilteredAwards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageLoading, setImageLoading] = useState(true)
  
  
  // Fix the years computation
  const years = useMemo(() => {
    return [...new Set(awards
      .filter(award => award?.awardsyear)
      .map(award => award.awardsyear.toString()))]
      .sort((a, b) => b - a) // Sort years in descending order
  }, [awards])

  // Get unique categories
  const categories = [...new Set(awards.map(award => award?.awardstype).filter(Boolean))].sort()

  useEffect(() => {
    fetchAwards()
  }, [])

  // Filter awards when selection changes
  useEffect(() => {
    filterAwards()
  }, [selectedYear, selectedCategory, awards])

  function filterAwards() {
    let filtered = [...awards]
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(award => 
        award?.awardsyear && award.awardsyear.toString() === selectedYear.toString()
      )
      console.log('Filtering by year:', selectedYear, 'Results:', filtered.length)
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(award => 
        award?.awardstype && award.awardstype === selectedCategory
      )
      console.log('Filtering by category:', selectedCategory, 'Results:', filtered.length)
    }
    
    setFilteredAwards(filtered)
  }

  async function fetchAwards() {
    try {
      const { data, error } = await supabase
        .from('ourteam')  // Make sure this is the correct table name
        .select('*')
        .order('created_at', { ascending: true })

      if (error) throw error

      // Format the data to ensure consistent types
      const formattedData = (data || []).map(award => ({
        ...award,
        awardsyear: award.awardsyear ? award.awardsyear.toString() : '',
        awardstype: award.awardstype || ''
      }))

      console.log('Fetched awards:', formattedData)
      setAwards(formattedData)
      setFilteredAwards(formattedData)
    } catch (error) {
      console.error('Error fetching awards:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Function to handle image click
  const handleImageClick = (award) => {
    setSelectedImage(award)
  }

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mt-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h1>
            <div className="h-0.5 w-12 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-md text-gray-600 w-3xl">
              {awardsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section with modern design */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Filter wrapper */}
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
              {/* Year Filter */}
              <div className="relative group flex items-center">
                
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    console.log('Selected year:', e.target.value)
                    setSelectedYear(e.target.value)
                  }}
                  className="pl-3 pr-8 py-2 bg-white rounded-md text-sm font-medium text-gray-700
                    border border-gray-200 hover:border-blue-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 
                    transition-all duration-200 cursor-pointer appearance-none"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-200"></div>

              {/* Category Filter */}
              <div className="relative group flex items-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-3 pr-8 py-2 bg-white rounded-md text-sm font-medium text-gray-700
                    border border-gray-200 hover:border-blue-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 
                    transition-all duration-200 cursor-pointer appearance-none"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Clear Filters Button - Only show when filters are active */}
              {(selectedYear !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedYear('all');
                    setSelectedCategory('all');
                  }}
                  className="ml-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 
                    hover:bg-gray-100 rounded-md transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredAwards.map((award, index) => (
            award && award.awardsname ? (
              <div 
                key={index}
                className="group bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-100 
                  hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                {/* Award Image with loading optimization */}
                <div 
                  className="relative w-24 h-24 mx-auto mb-3 cursor-pointer"
                  onClick={() => handleImageClick(award)}
                >
                  <div className="absolute inset-0 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${award.id}/${award.filename}`}
                      alt={award.awardsname}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      sizes="96px"
                      priority={index < 10} // Prioritize loading first 10 images
                      loading={index < 10 ? "eager" : "lazy"}
                      quality={60} // Slightly reduce quality for faster loading
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLTAtQFBGRjpGQC0uRmFIRk5OR09QT0ZHUFVMUk5Q/2wBDAVVFxceHh4aGh4eJx0nHScdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      placeholder="blur"
                    />
                  </div>
                </div>

                {/* Award Details */}
                <div className="text-center space-y-1.5">
                  <h3 className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {award.awardsname}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {award.description}
                  </p>
                  <div className="flex items-center justify-center space-x-1.5 text-xs text-gray-500">
                    <span className="bg-gray-50 px-1.5 py-0.5 rounded text-[11px]">
                      {award.awardsyear}
                    </span>
                    <span className="bg-gray-50 px-1.5 py-0.5 rounded text-[11px]">
                      {award.awardstype}
                    </span>
                  </div>
                </div>
              </div>
            ) : null
          ))}
        </div>

        {/* Image Modal with optimized image loading */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div 
              className="relative bg-white rounded-xl p-4 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content */}
              <div className="space-y-4">
                {/* Larger image with loading optimization */}
                <div className="relative w-full h-[400px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${selectedImage.id}/${selectedImage.filename}`}
                    alt={selectedImage.awardsname}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 800px"
                    priority={true}
                    quality={75}
                    onLoadingComplete={() => setImageLoading(false)}
                  />
                </div>

                {/* Award details */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedImage.awardsname}
                  </h3>
                  <p className="text-gray-600">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="bg-gray-50 px-3 py-1 rounded text-sm text-gray-600">
                      {selectedImage.awardsyear}
                    </span>
                    <span className="bg-gray-50 px-3 py-1 rounded text-sm text-gray-600">
                      {selectedImage.awardstype}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No awards found for the selected filters.</p>
          </div>
        )}
      </section>
    </main>
  )
} 
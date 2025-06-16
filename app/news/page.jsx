'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabaseClient'

const categories = [
  'All Services',
  'General',
  'Dispute Resolution',
  'Commercial Property',
  'Corporate Law',
  'Construction Law',
  'Family Law',
  'Criminal Law',
  'Taxation'
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All Services')
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchData().then(setNews)
  }, [])

  const fetchData = async () => {
    const { data: news, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    return news;
  }

  
  const filteredNews = news.filter((item) => {
    if (activeCategory === 'All Services') return true
    if (activeCategory === 'General') return item.category === 'General'
    if (activeCategory === 'Dispute Resolution') return item.category === 'Dispute Resolution'
    if (activeCategory === 'Commercial Property') return item.category === 'Commercial Property'
    if (activeCategory === 'Corporate Law') return item.category === 'Corporate Law'
    if (activeCategory === 'Construction Law') return item.category === 'Construction Law'
    if (activeCategory === 'Family Law') return item.category === 'Family Law'
    if (activeCategory === 'Criminal Law') return item.category === 'Criminal Law'
    if (activeCategory === 'Taxation') return item.category === 'Taxation'
  })
  
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          NEWS & ARTICLES
        </h1>
      </section>

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

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <Link
              key={index}
              href={`/news/${item.id}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-500 mb-3">{new Date(item.date).toLocaleDateString()}</div>
                <p className="text-gray-600">{item.previewtext}</p>
                <div className="mt-4 text-blue-600 font-medium">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
} 
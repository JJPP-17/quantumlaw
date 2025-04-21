import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { supabase } from '../../../lib/supabaseClient'

const newsData = {
  'quantum-law-2024-awards': {
    type: 'News',
    title: 'Quantum Law Group Recognised in 2024 Legal Awards',
    date: '21/03/2024',
    content: [
      "Quantum Law Group has been recognized for excellence in multiple categories at the 2024 Legal Awards.",
      "The firm received awards in the following categories:",
      "• Boutique Law Firm of the Year",
      "• Excellence in Dispute Resolution",
      "• Innovation in Legal Services"
    ],
    relatedTopics: ['Awards', 'Legal Industry', 'Recognition']
  },
  // Add more articles...
}

export default async function NewsArticle({ params }) {
  const { data: article, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", params.id)
    .single();

  return (
    <main className="bg-white pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <Link 
          href="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to News
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-sm text-blue-600 mb-2">{article.category}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="text-gray-500 mb-8">{new Date(article.date).toLocaleDateString()}</div>
        
        <div className="prose prose-lg max-w-none text-gray-600 whitespace-pre-wrap">
          {article.content}
        </div>

        {/* Related Topics */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h2>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((topic, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
} 
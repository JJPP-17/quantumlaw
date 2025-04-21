import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { supabase } from '../../../lib/supabaseClient'



export default async function JobPosting({ params }) {
  const { data: careers, error } = await supabase
    .from("careers")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!careers) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Job Not Found
            </h1>
            <Link 
              href="/careers"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Careers
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <Link 
          href="/careers"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Careers
        </Link>
      </div>

      {/* Job Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {careers.position}
          </h1>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
              {careers.location}
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              {careers.category}
            </span>
          </div>
        </div>

        <p className="text-md text-gray-600 mb-8">
          {careers.roledescription}
        </p>


        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Requirements
          </h1>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{careers.qualifications}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply
          </h1>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{careers.howtoapply}</li>
          </ul>
        </div>
      </article>
    </main>
  )
} 
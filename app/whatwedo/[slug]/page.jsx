import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { getContents } from '../../actions/content';

export default async function PracticeArea({ params }) {
  const { data: contents = [] } = await getContents();

  // Find the title content for this practice area
  const titleContent = contents.find(content => 
    content.key.startsWith('whatWedoTitle') && 
    content.key.toLowerCase().includes(params.slug)
  );

  // Find the approach content for this practice area
  const approachContent = contents.find(content => 
    content.key.startsWith('whatWedoApproach') && 
    content.key.toLowerCase().includes(params.slug)
  );

  if (!titleContent) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Practice Area Not Found
            </h1>
            <Link 
              href="/whatwedo"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Practice Areas
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
          href="/whatwedo"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Practice Areas
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {titleContent.value}
        </h1>
        <p className="text-xl text-gray-600">
          {titleContent.description}
        </p>
      </section>

      {/* Our Approach Section */}
      {approachContent && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg space-y-6">
              <div className="prose max-w-none">
                {approachContent.description.split('\n').map((paragraph, index) => {
                  // Check if this is a list item (starts with a dash)
                  if (paragraph.trim().startsWith('–') || paragraph.trim().startsWith('-')) {
                    return (
                      <li key={index} className="text-gray-700 leading-relaxed ml-4">
                        {paragraph.trim().substring(1).trim()}
                      </li>
                    );
                  }
                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
} 
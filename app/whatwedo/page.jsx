import Link from 'next/link'
import { FaGavel, FaBuilding, FaBalanceScale, FaHardHat, FaFileInvoiceDollar, FaHeart, FaCalculator } from 'react-icons/fa'
import { getContents } from '../actions/content';

export default async function WhatWeDo() {
    const { data: contents = [] } = await getContents();
    
    // Get all whatWedo entries
    const whatWedoContents = contents.filter(content => content.key.startsWith('whatWedoTitle'));
    


    // Create practice areas from database content
    const practiceAreas = whatWedoContents.map((content, index) => ({
      title: content.value,
      description: content.description,
      slug: content.key.replace('whatWedoTitle', '').toLowerCase()
    }));

  console.log(practiceAreas);
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What We Do
        </h1>
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-50 py-8 mb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-LG text-gray-800 italic">
              "We work with you to help you achieve your goals. We help individuals and businesses of all sizes to proactively minimise legal risks and are always on standby to resolve legal problems commercially and creatively. 
              We pride ourselves for being able to solve the most difficult problems for our clients."
          </p>
          </div>
        </div>
      </section>

        {/* Practice Areas Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link 
                href={`/whatwedo/${area.slug}`}
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center line-clamp-3">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
} 
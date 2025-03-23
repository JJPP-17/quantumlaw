import Link from 'next/link'
import { FaGavel, FaBuilding, FaBalanceScale, FaHardHat, FaFileInvoiceDollar, FaHeart, FaCalculator } from 'react-icons/fa'

export default function WhatWeDo() {
  const practiceAreas = [
    {
      icon: <FaGavel className="w-12 h-12 text-blue-600" />,
      title: "Dispute Resolution & Litigation",
      description: "Expert representation in complex disputes and litigation matters, with a proven track record of successful outcomes.",
      slug: "dispute-resolution-litigation"
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-blue-600" />,
      title: "Commercial and Property Transactional",
      description: "Comprehensive legal solutions for business transactions and property matters, ensuring your interests are protected.",
      slug: "commercial-property"
    },
    {
      icon: <FaBalanceScale className="w-12 h-12 text-blue-600" />,
      title: "Criminal Law",
      description: "Strategic defense and representation in criminal matters, protecting your rights and interests."
    },
    {
      icon: <FaHardHat className="w-12 h-12 text-blue-600" />,
      title: "Construction and Infrastructure",
      description: "Specialized legal services for construction projects and infrastructure development."
    },
    {
      icon: <FaFileInvoiceDollar className="w-12 h-12 text-blue-600" />,
      title: "Insolvency Law",
      description: "Expert guidance through insolvency proceedings and restructuring solutions."
    },
    {
      icon: <FaHeart className="w-12 h-12 text-blue-600" />,
      title: "Family Law",
      description: "Compassionate legal support for family matters, ensuring the best outcomes for all parties involved."
    },
    {
      icon: <FaCalculator className="w-12 h-12 text-blue-600" />,
      title: "Taxation",
      description: "Strategic tax planning and resolution of complex taxation matters."
    }
  ]

  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What We Do
        </h1>
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-LG text-gray-800 italic">
              "We work with you to help you achieve your goals. We help individuals and businesses of all sizes to proactively minimise legal risks and are always on standby to resolve legal problems commercially and creatively. 
              We pride ourselves for being able to solve the most difficult problems for our clients."
          </p>
            <p className="text-lg md:text-xl font-bold text-blue-400 mt-6">
              Specialists With A High Track Record of Success
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Link 
              href={`/whatwedo/${area.slug}`}
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 text-center">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
} 
import Link from 'next/link'
import { FaGavel, FaBuilding, FaBalanceScale, FaHardHat, FaFileInvoiceDollar, FaHeart, FaCalculator } from 'react-icons/fa'
import { getContents } from '../actions/content';

export default async function WhatWeDo() {
    const { data: contents = [] } = await getContents();
    const whatWedoContents = contents.filter(content => content.key.startsWith('whatWedoTitle'));
    
    const practiceAreas = whatWedoContents.map((content, index) => ({
      title: content.value,
      description: content.description,
      slug: content.key.replace('whatWedoTitle', '').toLowerCase()
    }));

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-10">
              WHAT WE DO
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-base md:text-base text-gray-600">
            We partner with individuals and businesses to minimize legal risks and resolve complex challenges through innovative, commercially-focused solutions.
            </p>
          </div>
        </div>
      </section>

     

      {/* Practice Areas Grid with Enhanced Design */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Link 
              href={`/whatwedo/${area.slug}`}
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <div className="h-0.5 w-12 bg-blue-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {area.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-md text-gray-600 mb-8">
            Our team of experienced lawyers is ready to help you navigate your legal challenges.
          </p>
          <Link
            href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
            target="_blank"
            className="text-md inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-4xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
} 
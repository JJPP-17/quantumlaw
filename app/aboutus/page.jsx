import { getValue } from "../utils/content";
import { getContents } from "../actions/content";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  const { data: contents } = await getContents();

  return (
    <main className="bg-white">
      {/* Hero Section - Adjusted Typography */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#f8fafc] bg-opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a90e2' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 bg-blue-50 rounded-full border border-blue-100 hover:shadow-lg transition-all duration-300">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-600">Est. 2019</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none mb-4 text-gray-600">
              <span className="text-gray-600">Redefining</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Legal Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Under the leadership of{" "}
              <a href="https://www.linkedin.com/in/zile-yu/?originalSubdomain=au"
                className="text-blue-700 font-medium hover:text-blue-800 transition-colors border-b-2 border-blue-200 hover:border-blue-500"
                target="_blank"
                rel="noopener noreferrer">
                Zile Yu
              </a>
              , Quantum Law Group has emerged as a pioneering force in legal innovation and client service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Adjusted Typography */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">#1</h3>
              <p className="text-sm md:text-base text-gray-600">Ranked in Legal Services - Financial Times Asia-Pacific 2025</p>
            </div>
            
            <div className="relative p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-3">102+</h3>
              <p className="text-sm md:text-base text-gray-600">Legal Industry Awards and Recognition</p>
            </div>
            
            <div className="relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Top 100</h3>
              <p className="text-sm md:text-base text-gray-600">AFR Fast Starters (2023 & 2024)</p>
            </div>
          </div>
        </div>
      </section>

      {/* New About Content Section */}
      <section className="py-15 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Your Trusted Legal Partner
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Quantum Law Group, we are more than just legal practitioners—we are your trusted partners in navigating complex legal matters with clarity, integrity, and care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a professional legal services provider, we are committed to delivering high-quality legal advice and representation across a wide range of practice areas. Whether you're facing a dispute, making a big decision, or planning ahead, our team provides practical solutions tailored to your unique needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our Commitment to You
              </h3>
              <p className="text-gray-600 mb-8">
                We believe legal services should be accessible and transparent. That's why we offer:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Win, No Fee</h4>
                    <p className="text-sm text-gray-600">For eligible cases—you don't pay legal fees unless we successfully resolve your matter.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded-lg mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fixed Fees</h4>
                    <p className="text-sm text-gray-600">Providing certainty and peace of mind with no hidden costs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 italic">
                  With a results-driven approach and a deep commitment to client care, Quantum Law Group is here to support you every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Adjusted Typography */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform -rotate-1 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {getValue("visionText", contents)}
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform rotate-1 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {getValue("missionText", contents)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Adjusted Typography */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Experience Legal Excellence
          </h2>
          <p className="text-sm md:text-md text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the growing number of clients who trust Quantum Law Group for their most critical legal matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              target="_blank"
              className="px-6 py-3 bg-white text-blue-600 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

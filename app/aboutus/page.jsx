import Image from 'next/image'
import { assets } from '../assets/assets'

export default function About() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We work on some of the most complex and interesting cutting-edge challenges in law.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[300px] mx-auto">
              <Image 
                src={assets.zile} 
                alt="Zile Yu - Founder of Quantum Law Group" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2019 by Zile Yu, Quantum Law Group is an award-winning, innovative law firm challenging the status quo of traditional legal services. Our firm has been recognized as a leader in dispute resolution and litigation, earning multiple prestigious awards including Boutique Firm of the Year 2023 Excellence Award and APAC Dispute Resolution Firm of the Year.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In just three years, our firm and lawyers have achieved recognition through approximately 60 legal industry awards, demonstrating our commitment to excellence and innovation in legal services.
            </p>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">$117M+</p>
                <p className="text-gray-600">Disputed Matters</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">$870M+</p>
                <p className="text-gray-600">Transactional Value</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">98+</p>
                <p className="text-gray-600">Industry Awards</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              As a founding member and Platinum Sponsor of the Disruptive Innovation Association, we're part of an alliance of forward-thinking businesses working towards a more innovative future. We're also proud sponsors of the Royal Society of NSW, the oldest learned society in the Southern Hemisphere.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In 2021, we launched Quantum Cover, a comprehensive legal solution providing end-to-end services across corporate, commercial, employment, real estate, intellectual property law, and dispute resolution. Within its first year, Quantum Cover received the 5-Star Service Provider Award from Australasian Lawyer.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to revolutionise the delivery of legal services. With everything we do, we aim to challenge the status quo, redefine what is possible, and create the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
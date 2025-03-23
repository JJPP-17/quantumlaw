import Image from "next/image";
import Link from "next/link";
import { FaBalanceScale, FaBuilding, FaHandshake, FaGavel } from "react-icons/fa";

export default function Home() {
  const practiceAreas = [
    {
      icon: <FaBalanceScale className="h-12 w-12 text-blue-600" />,
      title: "Corporate Law",
      description: "Expert guidance in business transactions, mergers & acquisitions"
    },
    {
      icon: <FaBuilding className="h-12 w-12 text-blue-600" />,
      title: "Real Estate",
      description: "Comprehensive legal solutions for property matters"
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-blue-600" />,
      title: "Commercial Law",
      description: "Strategic advice for business operations and contracts"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Litigation",
      description: "Strong representation in dispute resolution"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Top Law Firm of the Year",
      organization: "Legal Excellence Awards"
    },
    {
      year: "2022",
      title: "Best Corporate Law Practice",
      organization: "Business Law Review"
    },
    {
      year: "2021",
      title: "Innovation in Legal Services",
      organization: "Legal Technology Awards"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/law-office.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Quantum Law
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Innovative Legal Solutions for Complex Challenges
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Practice Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="border border-gray-200 p-6 rounded-lg hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-600 font-semibold mb-2">{award.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team of legal experts
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Suite 1503, Level 15<br/>447 Kent Street<br />Sydney NSW 2000<br /></p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+61 2 9188 8866</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@quantumlaw.com.au</p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors mt-8"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

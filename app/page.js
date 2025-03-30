'use client'
import Image from "next/image";
import Link from "next/link";
import { FaBalanceScale, FaBuilding, FaHandshake, FaGavel, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets } from "./assets/assets";
import { useState, useEffect } from 'react';
import GoogleReviews from './components/GoogleReviews';

export default function Home() {
  useEffect(() => {
    // BIG HACK TO REMOVE THE FREE GOOGLE REVIEWS WIDGET
    setTimeout(() => {
      const element = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('Free Google Reviews widget'));
      if (element) {
        element.remove();
      }
    }, 5000);
  }, []);
  const practiceAreas = [
    {
      icon: <FaBalanceScale className="h-12 w-12 text-blue-600" />,
      title: "Dispute Resolution and Litigation",
      description: "Expert guidance in business transactions, mergers & acquisitions",
      link: "/whatwedo/corporate-law"
    },
    {
      icon: <FaBuilding className="h-12 w-12 text-blue-600" />,
      title: "Property Law",
      description: "Comprehensive legal solutions for property matters",
      link: "/whatwedo/real-estate"
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-blue-600" />,
      title: "Corporate and Commercial Law",
      description: "Strategic advice for business operations and contracts",
      link: "/whatwedo/commercial-law"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Asset Protection",
      description: "Strong representation in dispute resolution",
      link: "/whatwedo/litigation"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Family Law",
      description: "Strong representation in dispute resolution",
      link: "/whatwedo/litigation"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Criminal Law",
      description: "Strong representation in dispute resolution",
      link: "/whatwedo/litigation"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Taxation Law",
      description: "Strong representation in dispute resolution",
      link: "/whatwedo/litigation"
    },
    {
      icon: <FaGavel className="h-12 w-12 text-blue-600" />,
      title: "Immigration Law",
      description: "Strong representation in dispute resolution",
      link: "/whatwedo/litigation"
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 4; // Number of slides to show at once

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(practiceAreas.length / slidesPerView) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(practiceAreas.length / slidesPerView) - 1 : prev - 1
    );
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-r from-gray-50 to-white">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  We handle difficult and
                  <span className="text-blue-600"> high stakes cases</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Quantum Law Group is a leading law firm providing expert legal services
                  across multiple practice areas.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                    target="_blank"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6 mt-16 animate-slideUp">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">117M+</div>
                  <p className="text-sm text-gray-600">Total Amount at Stake in Disputes</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">98+</div>
                  <p className="text-sm text-gray-600">Awards Won or Listed</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">$870,860,369</div>
                  <p className="text-sm text-gray-600">Total Amount of Transactional and Advisory Matters To Date</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">575</div>
                  <p className="text-sm text-gray-600">Total years in maximum penalty for Criminal Defence</p>
                </div>
              </div>
            </div>

            {/* Right Side Image with Animation */}
            <div className="relative hidden md:block h-[600px] animate-slideIn">
              <div className="text-xl text-center font-bold text-gray-900">Our Recognition</div>
              <Image
                src={assets.frontpage}
                alt="Quantum Law Office"
                fill
                className="object-contain mt-10 transform hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive legal services across multiple practice areas,
              delivering tailored solutions to meet your specific needs.
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                  gap: '2rem'
                }}
              >
                {practiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex-none w-full md:w-1/2 lg:w-1/4 px-4"
                  >
                    <Link
                      href={area.link}
                      className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 block h-full"
                    >
                      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {area.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-5"
            >
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-50">
                <FaChevronLeft className="w-5 h-5 text-blue-600" />
              </span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-5"
            >
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-50">
                <FaChevronRight className="w-5 h-5 text-blue-600" />
              </span>
            </button>
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

      {/* Add Google Reviews Section before Contact Section */}
      <GoogleReviews />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation with our experienced legal team today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <Link
                href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                target="_blank"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Legal Team</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Client-Focused Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

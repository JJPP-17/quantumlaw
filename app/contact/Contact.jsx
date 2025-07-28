'use client'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { GoLaw } from 'react-icons/go'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { FaArrowLeft } from 'react-icons/fa'
import { getValue } from "../utils/content";


export default function Contact({contents}) {
  const [state, handleSubmit] = useForm("xblkozng");


  if (state.succeeded) {
    return (
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="mb-8">
              <div className="mx-auto h-16 w-16 bg-green-50 rounded-full flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Message Sent Successfully
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Thank you for reaching out. Our team will contact you shortly.
            </p>
            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 px-6 py-3 rounded-lg transition-colors"
              >
                <FaArrowLeft className="text-sm" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <div className="h-0.5 w-12 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Connect with our legal experts for professional assistance and guidance
          </p>
        </div>
      </section>

      {/* Contact Information with Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map and Address Column */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="w-full h-[400px]"> {/* Increased map height */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.67587372983!2d151.20225077653475!3d-33.872243219238754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b167fb231b6d%3A0x980fa3dd84c3dc67!2sQuantum%20Law%20Group!5e0!3m2!1sen!2sau!4v1742540490380!5m2!1sen!2sau" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                    <p className="text-gray-600 mt-1">
                      {getValue('addressQuant', contents)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods Column */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <FaPhone className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">{getValue('phoneQuant', contents)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                    <div className="space-y-2 mt-2">
                      <p className="text-gray-600">{getValue('emailQuant', contents)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <GoLaw className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Book a Consultation</h3>
                    <Link 
                      href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 mt-2 inline-block"
                    >
                      Schedule your consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <div className="h-0.5 w-12 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 
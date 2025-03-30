'use client'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { GoLaw } from 'react-icons/go'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { FaArrowLeft } from 'react-icons/fa'

export default function Contact() {
  const [state, handleSubmit] = useForm("myzeprbo");

  if (state.succeeded) {
    return (
      <main className="bg-white min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <svg
                className="mx-auto h-16 w-16 text-green-500"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for your message!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We will get back to you shortly.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-400 px-6 py-3 rounded-md transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
           with our legal experts for professional assistance
        </p>
      </section>

      {/* Contact Information with Map */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map and Address Column */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="w-full h-[300px]">
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
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
                </div>
                <p className="text-gray-600">
                  Suite 1503, Level 15 <br />
                  447 Kent Street<br />
                  Sydney NSW 2000
                </p>
              </div>
            </div>

            {/* Contact Methods Column */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FaPhone className="text-blue-600 text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600">Phone: +61 2 9188 8866</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-blue-600 text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600">More Info: info@quantumlaw.com.au</p>
                <p className="text-gray-600">Careers: hr@quantumlaw.com.au</p>
                <p className="text-gray-600">Billing: accounts@quantumlaw.com.au</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <GoLaw className="text-blue-600 text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Schedule a Consultation</h3>
                </div>
                <Link 
                href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                target="_blank"
                className='underline text-blue-600'
              >
                Click here to schedule a consultation
              </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h2>
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
      </section>
    </main>
  )
} 
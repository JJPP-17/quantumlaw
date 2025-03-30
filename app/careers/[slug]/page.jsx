import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const jobData = {
  'senior-associate-dispute-resolution': {
    title: "Senior Associate – Dispute Resolution",
    location: "SYDNEY",
    type: "FULL TIME",
    description: "Join our rapidly growing Dispute Resolution Practice in Sydney.",
    sections: [
      {
        heading: "About Us",
        content: "Quantum Law Group is not your typical law firm. Our rapid rise shows that in our case, the differences are positive. We have created a unique environment that has attracted some of Australia's leading lawyers and professionals."
      },
      {
        heading: "The Opportunity",
        content: "We are seeking a Senior Associate to join our Dispute Resolution team. This is an excellent opportunity for a driven lawyer to take the next step in their career.",
        bulletPoints: [
          "Work on complex commercial disputes",
          "Lead and mentor junior lawyers",
          "Direct client contact and relationship management",
          "Business development opportunities"
        ]
      },
      {
        heading: "What We Offer",
        bulletPoints: [
          "True meritocracy model - be promoted by your contribution",
          "Flexible 3:2 work arrangements",
          "Generous leave policies including parental leave",
          "Structured mentoring program",
          "Clear path to partnership"
        ]
      }
    ],
    requirements: [
      "6+ years PAE in dispute resolution",
      "Strong academic background",
      "Excellent communication skills",
      "Commercial acumen",
      "Team leadership experience"
    ]
  }
  // Add more job listings...
}

export default function JobPosting({ params }) {
  const job = jobData[params.slug]

  if (!job) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Job Not Found
            </h1>
            <Link 
              href="/careers"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Careers
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
          href="/careers"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Careers
        </Link>
      </div>

      {/* Job Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {job.title}
          </h1>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
              {job.location}
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              {job.type}
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          {job.description}
        </p>

        {job.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {section.heading}
            </h2>
            {section.content && (
              <p className="text-gray-600 mb-4">{section.content}</p>
            )}
            {section.bulletPoints && (
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {section.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/application"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </article>
    </main>
  )
} 
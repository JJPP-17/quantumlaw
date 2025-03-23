import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const practiceAreasData = {
  'dispute-resolution-litigation': {
    title: "Dispute Resolution & Litigation",
    description: "Expert representation in complex disputes and litigation matters.",
    content: [
      {
        heading: "Our Approach",
        text: "Our Dispute Resolution and Litigation Team has won or been listed in 5 awards over the years. Our key achievements are:",
        list: [
            "Defence – Claim of over $338,000 against our client was dropped after we sent 2 letters to the other party’s solicitors.",
            "Defence – We successfully reduced a claim of $4.8 million by over $4.5 million (a reduction of over 93%) in a single day of mediation during proceedings in the Supreme Court of NSW.",
            "Defence – Successfully reached settlement during proceedings in the District Court of NSW, the settlement sum was just 46.7% of the claimed amount in the statement of claim.",
            "Acting for Plaintiff – Successfully reached settlement against multiple opposing parties, prior to commencing proceedings in the Supreme Court of NSW over $12.4 million of amount at stake.",
            "Plaintiff – Successful proceedings under s 247A of the Corporations Act 2001 (Cth) in the Supreme Court of NSW.",
            "Plaintiff – Successful obtained injunctive relief in the in the Supreme Court of NSW in less than 1 week.",
            "Defendant – Successfully defended against an application under s 175 of the Corporations Act 2001 (Cth) in Supreme Court of NSW.",
            "Plaintiff – Successfully obtained orders sought in a contested winding-up application in Supreme Court of Victoria.",
            "Plaintiff – Successful proceeding under s 588FM of the Corporations Act 2001 (Cth) in the Supreme Court of NSW."
        ]

      }
    ]
  },
  'commercial-property': {
    title: "Commercial and Property Transactional",
    description: "Comprehensive legal solutions for business transactions and property matters.",
    content: [
      {
        heading: "Our Expertise",
        text: "We provide end-to-end legal support for all types of commercial and property transactions, ensuring your interests are protected at every step."
      },
      {
        heading: "Services",
        list: [
          "Commercial Contracts",
          "Property Transactions",
          "Leasing",
          "Due Diligence",
          "Business Sales and Acquisitions",
          "Commercial Agreements"
        ]
      },
      {
        heading: "Why Choose Us",
        text: "Our team combines deep commercial understanding with technical legal expertise to deliver practical, commercial solutions for our clients."
      }
    ]
  }
}

async function PracticeArea({ params }) {
  const areaData = practiceAreasData[params.slug]

  if (!areaData) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Practice Area Not Found
            </h1>
            <Link 
              href="/whatwedo"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Practice Areas
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
          href="/whatwedo"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Practice Areas
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {areaData.title}
        </h1>
        <p className="text-xl text-gray-600">
          {areaData.description}
        </p>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="max-w-4xl">
          {areaData.content.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              {section.text && (
                <p className="text-gray-600 mb-4">{section.text}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PracticeArea 
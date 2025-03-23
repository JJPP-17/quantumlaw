import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'
import { assets } from '../../assets/assets'

const teamMembersData = {
  'zile-yu': {
    name: "Zile Yu",
    role: "Managing Partner & Founder",
    image: assets.zile,
    description: "Zile Yu is the founder and principal of Quantum Law Group. He has extensive experience in complex litigation and dispute resolution, having handled matters involving over $117 million at stake.",
    longDescription: [
      "Zile Yu founded Quantum Law Group in 2019 to challenge the status quo of traditional legal services.",
      "Under his leadership, the firm has been recognized with numerous awards including Boutique Firm of the Year 2023 Excellence Award and APAC Dispute Resolution Firm of the Year."
    ],
    expertise: [
      "Complex Commercial Litigation",
      "Dispute Resolution",
      "Corporate Law",
      "Commercial Transactions",
      "Property Law"
    ],
    contact: {
      phone: "+61 2 9188 8866",
      mobile: "+61 XXX XXX XXX",
      email: "zyu@quantumlaw.com"
    }
  },
  'daven-rasaratnam': {
    name: "Daven Rasaratnam",
    role: "Partner",
    image: assets.daven,
    description: "Daven is a Partner at Quantum Law Group specializing in commercial litigation and dispute resolution.",
    longDescription: [
      "Daven brings extensive experience in handling complex commercial disputes and corporate matters.",
      "He has successfully represented clients in high-stakes litigation and achieved favorable outcomes through strategic negotiation and dispute resolution."
    ],
    expertise: [
      "Commercial Litigation",
      "Corporate Law",
      "Dispute Resolution",
      "Contract Law",
      "Business Advisory"
    ],
    contact: {
      phone: "+61 2 9188 8866",
      mobile: "+61 XXX XXX XXX",
      email: "drasaratnam@quantumlaw.com"
    }
  },
  'william-wang': {
    name: "William Wang",
    role: "Partner",
    image: assets.william,
    description: "Daven is a Partner at Quantum Law Group specializing in commercial litigation and dispute resolution.",
    longDescription: [
      "William brings extensive experience in handling complex commercial disputes and corporate matters.",
      "He has successfully represented clients in high-stakes litigation and achieved favorable outcomes through strategic negotiation and dispute resolution."
    ],
    expertise: [
      "Commercial Litigation",
      "Corporate Law",
      "Dispute Resolution",
      "Contract Law",
      "Business Advisory"
    ],
    contact: {
      phone: "+61 2 9188 8866",
      mobile: "+61 XXX XXX XXX",
      email: "drasaratnam@quantumlaw.com"
    }
  }
}

export default function TeamMember({ params }) {
  const member = teamMembersData[params.slug]

  if (!member) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Team Member Not Found
            </h1>
            <Link 
              href="/ourteam"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Team
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
          href="/ourteam"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Team
        </Link>
      </div>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[3/4]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {member.name}
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-6">
              {member.role}
            </p>

            {/* Description */}
            <div className="space-y-4 mb-8">
              {member.longDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Areas of Expertise */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {member.expertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 text-blue-600 mr-3" />
                <p className="text-gray-600">{member.contact.phone}</p>
              </div>
              <div className="flex items-center">
                <FaMobile className="w-5 h-5 text-blue-600 mr-3" />
                <p className="text-gray-600">{member.contact.mobile}</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-blue-600 mr-3" />
                <p className="text-gray-600">{member.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
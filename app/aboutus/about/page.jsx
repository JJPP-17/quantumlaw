

export default function About() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We work on some of the most complex and interesting cutting-edge challenges in law.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
       
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Quantum Law Group is an award-winning, innovative and dynamic law firm founded by Zile Yu in 2019 to challenge the status quo of traditional legal services. Quantum Law Group was listed as a Boutique Firm of the Year 2023 Excellence Awardee by Australasian Lawyer, Australian Law Awards 2023 Dispute Resolution and Litigation Team of the Year, APAC Dispute Resolution Firm of the Year 2023 and 2022, APAC Insider's Australian Enterprise Awards 2023 for Winner of Best Legal Advice Experts – Sydney, and APAC Insider's Legal Awards 2022 for Best Dispute Resolution Firm – Australia, Top Boutique Law Firm in 2022 and 2021, an Excellence Awardee in Technology and Innovation 2022 by Australasian Lawyer and as a finalist in Boutique Law Firm of Year in the 2022 and 2021 Australian Law Awards, the 2023 and 2022 City Suburbs Local Business Awards, the 2023 and 2022 Small Business Champions Award and the 2022 Women's Small Business Champions Award.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In the last 3 years, our achievements have been highly recognised and our firm and our lawyers have won or been listed as finalists for around 60 legal industry awards.
            </p>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">$117M+</p>
                <p className="text-gray-600">in disputed matters handled</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">$870M+</p>
                <p className="text-gray-600">in transactional matters</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">575+</p>
                <p className="text-gray-600">years in criminal penalties</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-600">countries served</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Quantum Law Group boasts an impressive record of successes in handling some of the most difficult high-stake cases and transactions. Quantum Law Group is a founding member and Platinum Sponsor of the Disruptive Innovation Association, an alliance of forward-thinking, disruptive businesses across multiple industries operating under a unified strategy towards a more innovative future. Quantum Law Group is also a sponsor of the Royal Society of NSW, founded in 1821 as the oldest learned society in the Southern Hemisphere.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              True to our firm's mission to revolutionise the delivery of legal services, Quantum Cover was launched in 2021 which is a complete legal solution as a one-stop-shop and an end-to-end solution for all legal needs of businesses in areas of corporate law, commercial law, employment law, real estate law, intellectual property law and dispute resolution. Within 1 year of founding, Quantum Cover has already been recognised with the 5-Star Service Provider Award by Australasian Lawyer.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Revolutionary Standards for the Legal Industry</h2>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to revolutionise the delivery of legal services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                With everything we do, we aim to challenge the status quo and redefine what is possible and create the future.
              </p>
            </div>
        </div>
      </section>
    </main>
  )
} 
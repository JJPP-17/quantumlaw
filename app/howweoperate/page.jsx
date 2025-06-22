

export const generateMetadata = () => {
    return {
      title: 'How We Operate - Quantum Law Group',
      description: 'Learn more about how we operate and values at Quantum Law Group',
    }
  }

export default function HowWeOperate() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-5">
              How We Operate
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-base md:text-base text-gray-600">
                Innovative. Fixed Fees. Value & Results Focused.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Value Statement */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            We measure ourselves by the value and results we provide you.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We want to be your partner in business.
          </p>
          <p className="text-lg text-gray-700">
            We strive to provide most services on a fixed fee basis to give you certainty.
            So when we say we are focused on creating value for you in everything that we do, we mean it!
            <br className="hidden md:block" />
            <span className="font-semibold text-blue-600 pt-10">Your success is our success.</span>
          </p>
        </div>
      </section>

      {/* Section 3: Innovation x Tradition */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2 text-center">
            Revolutionising How We Serve You
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Innovation x Tradition
          </h2>
          <div className="text-lg text-gray-700 space-y-6 max-w-4xl mx-auto">
            <p>
              Every law firm claims to do things differently, but most operate in a traditional manner within the same system.
            </p>
            <p>
              At <span className="font-medium text-blue-600">Quantum Law Group</span>, we actively commit to constant improvement — of ourselves, our firm, and our service to you.
            </p>
            <p>
              Our Founder and Managing Partner, <span className="font-medium text-blue-600">Zile Yu</span>, is recognised as a leading lawyer who has practised with some of the best legal minds in the traditional legal industry, and is also trained in implementing innovation and technology into legal practice.
            </p>
            <p>
              We take the best of what traditional legal practice has to offer and integrate innovative strategies to deliver not just legal services, but real results and real value.
            </p>
            <p>
              When you engage us, you’ll notice that our entire service is tailored for your experience. <span className="font-medium text-blue-600">That’s the Quantum Difference.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Law Lab */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2 text-center">
            Committed Towards Constant Improvement and Innovation
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Law Laboratory
          </h2>
          <p className="text-lg text-gray-700">
            Research and development is at the heart of so many industries — why not in law? <br />
            At our <span className="font-medium text-blue-600">Law Laboratory</span>, we dedicate time each week to improve our legal thinking, knowledge, and delivery. <br/>
            This enables us to uncover better solutions and elevate how we serve you — continuously.
          </p>
        </div>
      </section>
    </main>
  );
}




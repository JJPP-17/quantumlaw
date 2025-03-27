import React from 'react'

export default function PrivacyPolicy() {
  return (
    <main className="bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Quantum Law Group Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-600 mb-8">
            This Privacy Policy applies to all personal information collected by Quantum Law Group Pty Ltd ACN 634 362 557 via the website located at <a href="https://quantumlaw.com.au" className="text-blue-500 hover:underline">quantumlaw.com.au</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. How to contact us about privacy</h2>
            <p className="text-gray-600 mb-4">
            Your privacy is very important to us. For that reason, please read the following details carefully and get in contact with us if you have any questions. You can contact us via email at <a href="mailto:info@quantumlaw.com.au" className="text-blue-500 hover:underline">info@quantumlaw.com.au</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Collection and Purpose</h2>
            <p className="text-gray-600 mb-4">
            We may collect personal information from you in the course of your website if you input any personal information into the website. In addition, we also collect cookies from your computer, which enables us to tell when you use the website and also to help customise your website experience. <br/> <br/> 
            The purpose for which we collect personal information is to provide you with the best service experience possible on the website. Some provision of personal information is optional. However, if you do not provide us with certain types of personal information, you may be unable to enjoy the full functionality of the website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclosure</h2>
            <p className="text-gray-600 mb-4">
            We customarily disclose personal information only to our service providers who assist us in operating the website. We will only disclose personal information to an unrelated third party with your consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Access and Correction</h2>
            <p className="text-gray-600 mb-4">
            National Privacy Principle 6 of the Australian Privacy Act 1998 (Cth) allows you to get access to, and correct, the personal information we hold about you in certain circumstances. If you would like to obtain such access, please contact us on the details set out above.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Security</h2>
            <p className="text-gray-600 mb-4">
            We have processes in place to ensure the security of your personal information, including encryption of all data when it is transferred to our service providers and limitations on access to personal information within our organisation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Transfer out of Australia</h2>
            <p className="text-gray-600 mb-4">
            The website is hosted in Australia. However, we may transfer data on the website (including all personal information) to a service provider outside of Australia. You hereby consent to that transfer.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated on {new Date().toLocaleDateString('en-AU', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}. 
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
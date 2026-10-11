import React from 'react'

export const generateMetadata = () => {
  return {
    title: 'Privacy Policy - Quantum Law Group',
    description: 'Learn more about privacy policy at Quantum Law Group',
  }
}

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="public-page policy-page bg-white pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Quantum Law Group Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-600 mb-8">
            This Privacy Policy applies to personal information collected by Quantum Law Group Pty Ltd ACN 634 362 557 through this website, whether accessed at quantumlaw.com.au or quantumlaw.vercel.app.
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
            You may request access to or correction of personal information we hold about you. The Australian Privacy Principles address access and correction in APP 12 and APP 13. Please contact us using the details above to make a request.
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
            Our website and contact form use third-party service providers. Information submitted through the website may be processed or stored outside Australia. Please contact us if you would like further information about how your information is handled.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

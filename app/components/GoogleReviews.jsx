'use client'
import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleReviews() {
  useEffect(() => {
    // This will help reinitialize the widget if needed
    if (window.elfsight) {
      window.elfsight.reinitialize();
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2">
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-24dfc61b-045a-447f-89ce-0158c722fa53" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
} 
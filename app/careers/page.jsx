"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

const categories = [
  "All Careers",
  "Full Time",
  "Part Time",
  "Full Time/Part Time",
  "Contract",
];

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Careers");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      setCareers(data);
      setIsLoading(false);
    });
  }, []);

  const fetchData = async () => {
    const { data: careers, error } = await supabase
      .from("careers")
      .select("*")
      .eq('status', 'Open')
      .order("position", { ascending: false });

    return careers;
  };

  const filteredCareers = careers.filter((item) => {
    if (activeCategory === "All Careers") return true;
    return item.category === activeCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading opportunities...</div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section with gradient background */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-12">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-5"></div>
            <p className="text-md text-gray-600 mb-4">
              At Quantum Law Group, we are committed to working with you to
              achieve your personal developmental and career goals, while ensuring
              that our clients are provided with access to highly qualified and
              driven professionals.
            </p>
            
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-0">
            Current Opportunities
          </h2>
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:shadow"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredCareers.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-600 mb-2">No open positions available in this category at the moment.</p>
              <p className="text-sm text-gray-500">Please check back later or contact us to discuss future opportunities.</p>
            </div>
          ) : (
            filteredCareers.map((job, index) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.position}
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">Posted: {new Date(job.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                      {job.status}
                    </span>
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                      Sydney
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {job.category}
                    </span>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-gray-600">
                  <p className="line-clamp-2">{job.roledescription}</p>
                </div>
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  View Position Details
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Contact Section with gradient background */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Want to discuss opportunities?
          </h2>
          <p className="text-md text-gray-600 mb-8">
            We're always looking for talented individuals to join our team. 
            <br/> Let's start a conversation about your future with us.
          </p>
          <Link
            href="/contact"
            target="_blank"
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

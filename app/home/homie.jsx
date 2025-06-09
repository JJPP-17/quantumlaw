"use client";
import Image from "next/image";
import Link from "next/link";

import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import GoogleReviews from "../components/GoogleReviews";
import { getValue } from "../utils/content";

export default function Homie({ contents }) {
  useEffect(() => {
    // BIG HACK TO REMOVE THE FREE GOOGLE REVIEWS WIDGET
    setTimeout(() => {
      const element = Array.from(document.querySelectorAll("a")).find((el) =>
        el.textContent.includes("Free Google Reviews widget")
      );
      if (element) {
        element.remove();
      }
    }, 5000);
  }, []);

  const targets = [
    {
      id: getValue("totalAmountAtStakeInDisputes", contents),
      count: getValue("disputes", contents),
      suffix: "+",
    },
    {
      id: getValue("numAwardsWonOrListedText", contents),
      count: getValue("numAwardsWonOrListed", contents),
      suffix: "+",
    },
    {
      id: getValue("numTransactionsText", contents),
      count: getValue("numTransactions", contents),
      suffix: "+",
    },
    {
      id: getValue("yearsPenaltyText", contents),
      count: getValue("yearsPenalty", contents),
      suffix: "+",
    },
  ];

  const [counts, setCounts] = useState(
    targets.map((target) => ({
      id: target.id,
      value: 0,
      suffix: target.suffix,
    }))
  );

  useEffect(() => {
    const duration = 2000; // Total duration for the counting animation
    const totalCounts = targets.map((target) => target.count);
    const maxCount = Math.max(...totalCounts);
    const minCount = Math.min(...totalCounts);
    const incrementTime = duration / maxCount; // Time per increment

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = prevCounts.map((count) => {
          const target = targets.find((t) => t.id === count.id);
          let newValue = count.value;

          // Increment logic based on the value of newValue
          if (newValue < 1000) {
            newValue += 5; // Increment by 5 if less than 1000
          } else if (newValue >= 1000 && newValue < 10000) {
            newValue += 100; // Increment by 100 if between 1000 and 9999
          } else if (newValue >= 10000 && newValue < 1000000) {
            newValue += 500000; // Increment by 5000 if between 10000 and 999999
          } else if (newValue >= 1000000) {
            newValue += 10000000; // Increment by 1000000 if 1000000 or more
          }

          // Ensure it doesn't exceed the final count
          if (newValue >= target.count) {
            newValue = target.count;
          }

          return { ...count, value: newValue };
        });

        // Check if the lowest count has reached its final value
        const lowestCountReached = newCounts.find(
          (count) => count.value >= minCount
        );

        if (lowestCountReached) {
          // Calculate remaining time for the other counts
          const remainingCounts = newCounts.filter(
            (count) => count.value < count.count
          );
          const remainingDuration = duration - (minCount / maxCount) * duration; // Calculate remaining time
          const newIncrementTime = remainingDuration / remainingCounts.length; // Adjust increment time for remaining counts

          remainingCounts.forEach((count) => {
            const target = targets.find((t) => t.id === count.id);
            let newValue = count.value;

            // Increment logic based on the value of newValue
            if (newValue < 1000) {
              newValue += 5; // Increment by 5 if less than 1000
            } else if (newValue >= 1000 && newValue < 10000) {
              newValue += 100; // Increment by 100 if between 1000 and 9999
            } else if (newValue >= 10000 && newValue < 1000000) {
              newValue += 5000; // Increment by 5000 if between 10000 and 999999
            } else if (newValue >= 1000000) {
              newValue += 1000000; // Increment by 1000000 if 1000000 or more
            }

            // Ensure it doesn't exceed the final count
            if (newValue >= target.count) {
              newValue = target.count;
            }

            setCounts((prevCounts) =>
              prevCounts.map((c) =>
                c.id === count.id ? { ...c, value: newValue } : c
              )
            );
          });
        }

        // Check if all counts have reached their final values
        if (
          newCounts.every(
            (count) =>
              count.value === targets.find((t) => t.id === count.id).count
          )
        ) {
          clearInterval(interval); // Stop the interval if all counts are complete
        }

        return newCounts;
      });
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targets]);

  // Get practice areas from contents
  const practiceAreaContents = contents.filter((content) =>
    content.key.startsWith("whatWedoTitle")
  );

  // Create practice areas from database content
  const practiceAreas = practiceAreaContents.map((content) => ({
    title: content.value,
    description: content.description,
    link: `/whatwedo/${content.key.toLowerCase().replace("whatwedotitle", "")}`,
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 3; // Changed from 4 to 3

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = Math.ceil(practiceAreas.length / slidesPerView) - 1;
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides = Math.ceil(practiceAreas.length / slidesPerView) - 1;
      return prev === 0 ? maxSlides : prev - 1;
    });
  };

  // Function to format the count with K+ or M+
  const formatCount = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M+"; // Format for millions
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K+"; // Format for thousands
    }
    return value.toString() + "+"; // Return as is for smaller numbers with a plus sign
  };

  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch("/admin/awards/list");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAwards(data); // Assuming the response is an array of awards
      } catch (error) {
        console.error("Error fetching awards:", error);
      }
    };

    fetchAwards();
  }, []); // Empty dependency array to run only on mount

  return (
    <main className="bg-white">
      {/* Hero Section - reduced height and spacing */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-white to-white pt-30">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-15">
                  We handle difficult and
                  <span className="text-blue-600"> high stakes cases</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Quantum Law Group is a leading law firm providing expert legal
                  services across multiple practice areas.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                    target="_blank"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-4xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="pb-12 mt-10 sm:pb-16">
                <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
                    {counts.map((count) => (
                      <div
                        key={count.id}
                        className="flex flex-col p-6 text-center  transition duration-300"
                      >
                        <dt className="order-2 mt-2 text-sm font-medium leading-6 text-gray-700">
                          {count.id.replace("Count", "")}
                        </dt>
                        <dd className="order-1 text-4xl font-extrabold leading-none text-blue-600">
                          {formatCount(count.value)}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Image with Animation */}
            <div className="relative hidden md:block h-[600px] animate-slideIn">
              <div className="text-xl text-center font-bold text-gray-900">
                Our Recognition
              </div>
              <Image
                src={assets.frontpage}
                alt="Quantum Law Office"
                fill
                className="object-contain mt-10 transform hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section - adjusted spacing and typography */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive legal solutions tailored to meet your specific needs, delivered with expertise and dedication.
            </p>
          </div>

          {/* Practice Areas Cards - adjusted spacing and typography */}
          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-6 min-w-max px-4">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="w-[320px]">
                    <Link
                      href={area.link}
                      className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 block h-full relative overflow-hidden"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-0 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-all duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50 opacity-0 rounded-full transform -translate-x-1/2 translate-y-1/2 group-hover:opacity-20 transition-all duration-500"></div>

                      <div className="relative space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {area.title}
                        </h3>
                        
                        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {area.description}
                        </p>

                        <div className="flex items-center text-blue-600 pt-3">
                          <span className="text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                            Learn More
                          </span>
                          <svg 
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section - adjusted spacing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-base text-gray-700 mb-6">
            We're always on the lookout for talented, passionate individuals who
            want to make a difference. If you're interested in working with us,
            we'd love to hear from you.
          </p>
          <a
            href="/careers"
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white text-sm font-medium rounded- shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Add Google Reviews Section before Contact Section */}
      <GoogleReviews />

      {/* Contact Section - adjusted spacing */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Schedule a consultation with our experienced legal team today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <Link
                href="https://calendly.com/quantumlaw/strategyconsult?month=2025-03"
                target="_blank"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-2 rounded-md hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Expert Legal Team</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Client-Focused Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update the color scheme for the rest of the page */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}

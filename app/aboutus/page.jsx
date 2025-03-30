import Image from 'next/image';
import { assets } from '../assets/assets';

export default function About() {
  return (
    <main className="bg-white pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-6 relative">
       
        <div className="relative z-10 p-4 bg-white rounded-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-8  text-center italic">
            Quantum Law Group was established by <a href="https://www.linkedin.com/in/zile-yu/?originalSubdomain=au" className="text-blue-600 hover:underline">Zile Yu</a> in 2019 to challenge the status quo of traditional legal services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
       
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Quantum Law Group is an award-winning, innovative and dynamic law firm founded by Zile Yu in 2019 to challenge the status quo of traditional legal services. 
              Quantum Law Group was listed as a Boutique Firm of the Year 2023 Excellence Awardee by Australasian Lawyer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              In the last 3 years, our achievements have been highly recognised, our firm and our lawyers have won or been listed for around <span className="font-bold text-blue-600">98+</span> legal industry awards.
            </p>
          </div>
      </section>
      
      {/* Timeline Section */}
<section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
    <h2 className="text-2xl font-bold text-blue-500 mb-10">Firm History Timeline</h2>
    <ol className="items-center sm:flex">
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2020</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and i</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2022</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2023</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2024</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 dark:ring-blue-800 shrink-0">
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
           
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Year 2025</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>
</section>   

      {/* Our Vision Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-2xl font-bold text-blue-500 mb-5">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Quantum Law Group is committed to providing the highest quality legal services to our clients.
        </p>

        <h2 className="text-2xl font-bold text-blue-500 mb-5">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Quantum Law Group is committed to providing the highest quality legal services to our clients.
        </p>
      </section>


</main>
  )
} 
'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <Image src={assets.logo} alt="Quantum Law Logo" width={200} height={200} />
          </Link>

          <div className="hidden md:flex space-x-8 text-md sm:text-base">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-400 space-x-1"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <span>ABOUT US</span>
                <IoIosArrowDown className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg py-2 min-w-[200px]"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <Link 
                    href="/aboutus" 
                    className="text-md sm:text-base block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-400"
                  >
                    ABOUT
                  </Link>
                  <Link 
                    href="/aboutus/awards" 
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-400"
                  >
                    AWARDS AND RECOGNITION
                  </Link>
                </div>
              )}
            </div>

            <Link href="/whatwedo" className="text-gray-600 hover:text-blue-400">
              WHAT WE DO
            </Link>
            <Link href="/ourteam" className="text-gray-600 hover:text-blue-400">
              OUR TEAM
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-blue-400">
              NEWS
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-blue-400">
              CAREERS
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-400">
              CONTACT
            </Link>
            <AiOutlineSearch className="text-gray-600 hover:text-blue-400 h-6 w-6 cursor-pointer" />
          </div>

          <button 
            className="md:hidden text-gray-600 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiOutlineX className="h-8 w-8" />
            ) : (
              <HiOutlineMenu className="h-8 w-8" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="text-gray-600 px-2">ABOUT US</div>
                <div className="pl-4 space-y-2">
                  <Link href="/aboutus" className="block text-gray-600">ABOUT</Link>
                  <Link href="/aboutus/awards" className="block text-gray-600">AWARDS AND RECOGNITION</Link>
                </div>
              </div>
              <Link href="/whatwedo" className="text-gray-600">WHAT WE DO</Link>
              <Link href="/ourteam" className="text-gray-600">OUR TEAM</Link>
              <Link href="/news" className="text-gray-600">NEWS</Link>
              <Link href="/careers" className="text-gray-600">CAREERS</Link>
              <Link href="/contact" className="text-gray-600">CONTACT</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 
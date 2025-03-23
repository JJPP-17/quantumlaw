import Link from 'next/link'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a 
                        href="https://www.linkedin.com/company/qlg/?originalSubdomain=au" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedinIn className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.instagram.com/quantumlaw.com.au/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.facebook.com/quantumlawgroup" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} Quantum Law Group. All rights reserved.   
                </p>
            </div>
        </footer>
    )
}   

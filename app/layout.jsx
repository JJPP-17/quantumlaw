import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import ConditionalHeader from './components/ConditionHeader'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = () => {
  return {
    title: 'Quantum Law Group',
    description: 'Learn more about our team and values at Quantum Law Group',
  }
}


export default function RootLayout({children}) {

  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ1WBWYXWB"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ1WBWYXWB');
          `,
        }} />
      </head>
      <body className={inter.className}>
        <ConditionalHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
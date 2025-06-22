import React from 'react'
import Contact from './Contact'

export const generateMetadata = () => {
  return {
    title: 'Contact Us - Quantum Law Group',
    description: 'Contact us to Learn more about Quantum Law Group',
  }
}

const ContactMainPage = () => {
  return (
    <Contact/>
  )
}

export default ContactMainPage
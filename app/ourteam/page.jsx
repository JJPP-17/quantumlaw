import React from 'react'
import OurTeam from './ourTeam'

export const generateMetadata = () => {
  return {
    title: 'Our Team - Quantum Law Group',
    description: 'Learn more about how we operate and the values we uphold at Quantum Law Group',
  }
}

const OurteamMainpage = () => {
  return (
    <OurTeam/>
  )
}

export default OurteamMainpage
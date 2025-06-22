import React from 'react'
import Careers from './Careers'

export const generateMetadata = () => {
  return {
    title: 'Careers - Quantum Law Group',
    description: 'Learn more about careers at Quantum Law Group',
  }
}

const CareersMainPage = () => {
  return (
    <Careers/>
  )
}

export default CareersMainPage
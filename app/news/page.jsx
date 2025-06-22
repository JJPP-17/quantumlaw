import React from 'react'
import NewsPage from './newsPage'

export const generateMetadata = () => {
  return {
    title: 'News & Articles - Quantum Law Group',
    description: 'Learn more about hour News & Articles at Quantum Law Group',
  }
}

const newsMainPage = () => {
  return (
    <NewsPage/>
  )
}

export default newsMainPage
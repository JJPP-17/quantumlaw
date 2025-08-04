import React from 'react'
import ChangeContact from './changeContact'
import { getContents } from "../actions/content";


export const generateMetadata = () => {
  return {
    title: 'Contact Us - Quantum Law Group',
    description: 'Contact us to Learn more about Quantum Law Group',
  }
}

export default async function ContactMainPage() {
  const { data: contents } = await getContents();
  

  return (
    // Test
    <ChangeContact contents={contents}/>
  )
}


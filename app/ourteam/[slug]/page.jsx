'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'

export default function TeamMember({ params }) {
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeamMember();
  }, []);

  async function fetchTeamMember() {
    try {
      // Convert slug back to name format
      const memberName = params.slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');

      const { data, error } = await supabase
        .from('ourteam')
        .select('*')
        .ilike('membername', memberName)
        .single();

      if (error) throw error;
      setMember(data);
    } catch (error) {
      console.error('Error fetching team member:', error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!member) {
    return <div className="min-h-screen flex items-center justify-center">Member not found</div>;
  }

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {/* Back Link */}
        <Link
          href="/ourteam"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Team
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Image Column */}
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${member.id}/${member.filename}`}
                alt={member.membername}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {member.membername}
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-6">
              {member.position}
            </p>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600 whitespace-pre-line">
                {member.description}
              </p>
            </div>

            {/* Expertise */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {member.expertise}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-2">
                {member.firmnumber && (
                  <p className="text-gray-600">
                    <FaPhone className="inline-block mr-2 text-blue-600" />
                    <span className="font-medium">Office:</span> {member.firmnumber}    
                  </p>
                )}
                {member.mobilenumber && (
                  <p className="text-gray-600">
                    <FaMobile className="inline-block mr-2 text-blue-600" />
                    <span className="font-medium">Mobile:</span> {member.mobilenumber}
                  </p>
                )}
                {member.email && (
                  <p className="text-gray-600">
                    <FaEnvelope className="inline-block mr-2 text-blue-600" />
                    <span className="font-medium">Email:</span> {member.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
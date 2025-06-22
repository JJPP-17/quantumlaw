'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  async function fetchTeamMembers() {
    try {
      const { data, error } = await supabase
        .from('ourteam')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setTeamMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-blue-600">Loading...</div>
      </div>
    );
  }

  return (
    <main className="bg-white">   
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-10">
              Meet Our Team
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto">
              We work together on a task-force basis, bringing together the perfect mix of expertise across practice areas to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers
            .filter((member) => member && member.membername)
            .sort((a, b) => a.ranking - b.ranking)
            .map((member) => (
              <Link
                key={member.id}
                href={`/ourteam/${member.membername}`}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${member.id}/${member.filename}`}
                    alt={member.membername}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 bg-white">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {member.membername}
                  </h2>
                  <p className="text-blue-600 font-medium mt-1">
                    {member.position}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Profile</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      
    </main>
  );
} 
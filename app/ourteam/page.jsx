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
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <main className="bg-white pt-32">   
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Our Team
        </h1>
        <p className="text-center text-gray-600">
          We work together on a task-force basis on all of our matters, bringing to bear the requisite mix of people and expertise across practice areas.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            member && member.membername ? (
            <Link 
              key={member.id}
              href={`/ourteam/${member.membername}`}
              className="group block hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${member.id}/${member.filename}`}
                  alt={member.membername}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.membername}
                </h2>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
              </div>
            </Link>
          ) : null
          ))}
        </div>
      </section>
    </main>
  );
} 
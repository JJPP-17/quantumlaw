'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function AwardsTable() {
  const [awards, setAwards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAwards();
  }, []);

  async function fetchAwards() {
    try {
      const { data, error } = await supabase
        .from('ourteam')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAwards(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this award?')) return;

    try {
      const { error } = await supabase
        .from('ourteam')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setAwards(awards.filter(award => award.id !== id));
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  }

  if (isLoading) {
    return <div className="text-center py-4 text-gray-600">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Award Name
            </th>
        
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Award Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Award Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {awards.map((award) => (
            award.awardsname && (
              <tr key={award.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${award.id}/${award.filename}`}
                      alt={award.filename}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {award.awardsname}
                  </div>
                  <div className="text-sm text-gray-500">
                    {award.awardsyear}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {award.awardstype}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {award.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDelete(award.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
} 
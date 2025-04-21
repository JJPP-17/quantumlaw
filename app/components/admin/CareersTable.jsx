'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { FaTrash } from 'react-icons/fa';


export default function CareersTable() {
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);


  async function fetchCareers() {
    try {
    const { data, error } = await supabase
        .from("careers")
        .select("*")
        .order("position", { ascending: false });

        if (error) throw error;
        setCareers(data || []);
      } catch (error) {
        console.error('Error fetching careers:', error);
      } finally {
        setIsLoading(false);
      }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this career?')) return;

    try {
      const { error } = await supabase
        .from('careers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setCareers(careers.filter(career => career.id !== id));
    } catch (error) {
      console.error('Error deleting this position:', error);
    } finally {
        setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="text-center py-4 text-gray-600">so slow...</div>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Position
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quanlifications
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              How to Apply
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {careers.map((career) => (
            career.position && (
              <tr key={career.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {career.position}
                  </div>
                </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                  {career.roledescription}
                </div>
              </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs whitespace-normal break-words">
                    {career.category} 
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {career.qualifications}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {career.howtoapply}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDelete(career.id)}
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
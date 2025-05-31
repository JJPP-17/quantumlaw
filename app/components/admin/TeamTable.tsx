"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

interface TeamMember {
  id: string;
  membername: string;
  ranking: string;
  position: string;
  description: string;
  expertise: string;
  firmnumber: string;
  mobilenumber: string;
  email: string;
  created_at: string;
  filename: string;
}

export default function TeamTable() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  async function fetchTeamMembers() {
    try {
      const { data, error } = await supabase
        .from("ourteam")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this team member?")) return;

    try {
      const { error } = await supabase.from("ourteam").delete().eq("id", id);

      if (error) throw error;

      setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.error("Error deleting team member:", error);
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
              Ranking
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name & Position
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expertise
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members
            .filter((member) => member.membername)
            .sort((a, b) => {
              const rankA = parseFloat(a.ranking) || Infinity;
              const rankB = parseFloat(b.ranking) || Infinity;
              return rankA - rankB;
            })
            .map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {member.ranking}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${member.id}/${member.filename}`}
                      alt={member.filename}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {member.membername}
                  </div>
                  <div className="text-sm text-gray-500">{member.position}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {member.description}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs line-clamp-3">
                    {member.expertise}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>Office: {member.firmnumber}</div>
                    <div>Mobile: {member.mobilenumber}</div>
                    <div>Email: {member.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

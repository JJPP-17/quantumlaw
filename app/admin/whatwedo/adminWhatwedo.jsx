'use client'

import { useState } from 'react';

export default function AdminWhatWeDoPage({ contents }) {
  
  const [selectedArea, setSelectedArea] = useState('all');

  // Get unique practice areas from content values
  const practiceAreas = [...new Set(contents
    .filter(content => content.key.startsWith('whatWedo'))
    .map(content => content.value)
    .filter(Boolean)
  )];

  // Filter contents based on selected area
  const filteredContents = contents.filter(content => {
    if (selectedArea === 'all') return content.key.startsWith('whatWedo');
    return content.value === selectedArea;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 text-black">
      <h1 className="text-2xl font-bold mb-6">What We Do Content</h1>
      
      {/* Filter Buttons */}
      <div className="mb-6 flex gap-2 flex-wrap text-sm">
        <button
          onClick={() => setSelectedArea('all')}
          className={`px-2 py-2 rounded-4xl ${
            selectedArea === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {practiceAreas.map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            className={`px-4 py-2 rounded-md ${
              selectedArea === area
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Practice Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Key
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredContents.map((content, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-blue-500">
                  {content.value}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {content.key}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {content.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

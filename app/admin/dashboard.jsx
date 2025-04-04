'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContentManager from '../components/ContentManager';
import { getContents } from '../actions/content';
import { getContent } from '../utils/content';

const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return !!localStorage.getItem('user'); // Example: check if user is logged in
};

export default function AdminDashboard({ contents }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login'); // Redirect to login if not authenticated
      }
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Admin Dashboard
      </h1>

      <ContentManager />
      <p className="text-gray-600 text-center pt-5">This is the Home Page</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {getContent('totalAmountAtStakeInDisputes', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">{
            getContent('totalAmountAtStakeInDisputesNumber', contents)
          }</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {getContent('numAwardsWonOrListedText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getContent('numAwardsWonOrListed', contents)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {getContent('numTransactionsText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getContent('numTransactions', contents)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {getContent('yearsPenaltyText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getContent('yearsPenalty', contents)}
          </p>
        </div>
      </div>
    </div>
  );
}
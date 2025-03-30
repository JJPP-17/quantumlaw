'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return !!localStorage.getItem('user'); // Example: check if user is logged in
};

export default function AdminDashboard() {
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
      <p className="text-gray-600 text-center pt-5">This is the Home Page</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Total Amount at Stake in Disputes
          </h2>
          <p className="text-3xl font-bold text-blue-600">117M+</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Awards Won or Listed
          </h2>
          <p className="text-3xl font-bold text-blue-600">98+</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Total Amount of Transactional and Advisory Matters To Date
          </h2>
          <p className="text-3xl font-bold text-blue-600">$870,860,369</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Total years in maximum penalty for Criminal Defence
          </h2>
          <p className="text-3xl font-bold text-blue-600">575</p>
        </div>
      </div>
    </div>
  );
}
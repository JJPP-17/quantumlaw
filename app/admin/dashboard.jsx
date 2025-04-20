'use client'
import ContentManager from '../components/ContentManager';
import { getValue } from '../utils/content';


export default function AdminDashboard({ contents }) {

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
            {getValue('totalAmountAtStakeInDisputes', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">{
            getValue('totalAmountAtStakeInDisputesNumber', contents)
          }</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {getValue('numAwardsWonOrListedText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getValue('numAwardsWonOrListed', contents)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {getValue('numTransactionsText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getValue('numTransactions', contents)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {getValue('yearsPenaltyText', contents)}
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {getValue('yearsPenalty', contents)}
          </p>
        </div>
      </div>
    </div>
  );
}
'use client'

import { getValue } from '../utils/content';


export default function AdminDashboard({ contents }) {

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 pb-10">
        Home Page Content
      </h1>

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Our Vision
          </h2>
          <p className="text-md text-blue-600">
            {getValue('visionText', contents)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <p className="text-md text-blue-600">
            {getValue('missionText', contents)}
          </p>
        </div>
      </div>
    </div>
  );
}
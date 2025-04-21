import CareersTable from '../../../components/admin/CareersTable';
import Link from 'next/link';

export default function CareersListPage() {
  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-15">
            <h1 className="text-2xl font-bold text-gray-900">Careers</h1>
            <Link
                href="/admin/careers"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
                Add New Career or Update Existing Career
            </Link>
        </div>
      <CareersTable />
    </div>
  );
}
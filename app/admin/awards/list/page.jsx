import AwardsTable from '../../../components/admin/AwardsTable';
import Link from 'next/link';


export default function AwardsListPage() {
  

  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-15">
            <h1 className="text-2xl font-bold text-gray-900">Awards</h1>
            <Link
                href="/admin/awards"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
                Add New Award or Update Existing Award
            </Link>
        </div>
      <AwardsTable/>
    </div>
  );
}
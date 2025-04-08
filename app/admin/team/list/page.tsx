import TeamTable from '../../../components/admin/TeamTable';
import Link from 'next/link';

export default function TeamListPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-15">
        <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
        <Link
          href="/admin/team"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Add New Member or Updating Existing Member
        </Link>
      </div>
      <TeamTable />
    </div>
  );
} 
export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Total Awards
                    </h2>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Team Members
                    </h2>
                    <p className="text-3xl font-bold text-blue-600">8</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Active Jobs
                    </h2>
                    <p className="text-3xl font-bold text-blue-600">3</p>
                </div>
            </div>
        </div>
    )
}
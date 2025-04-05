'use client'
import AdminNavbar from '../components/admin/AdminNavbar'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminFooter from '../components/admin/AdminFooter'

export default function AdminLayout({ children, contents }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar contents={contents} />
        <main className="flex-1 p-8">
          {children}
          <AdminFooter />
        </main>
      </div>
    </div>
  )
}
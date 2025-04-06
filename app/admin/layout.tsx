'use client'
import { ReactNode } from 'react';
import AdminNavbar from '../components/admin/AdminNavbar'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminFooter from '../components/admin/AdminFooter'

interface AdminLayoutProps {
  children: ReactNode;
  contents: any;
}

export default function AdminLayout({ children, contents }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4">
        <AdminNavbar />
        <div className="flex">
          <AdminSidebar contents={contents} />
          <main className="flex-1 p-8">
            {children}
            <AdminFooter />
          </main>
        </div>
      </div>
    </div>
  )
}
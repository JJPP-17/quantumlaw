import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { requireAdmin } from "../../lib/supabaseServer";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminFooter from "../components/admin/AdminFooter";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  try { await requireAdmin(); } catch { redirect("/login"); }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4">
        <AdminNavbar />
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-8">
            {children}
            <AdminFooter />
          </main>
        </div>
      </div>
    </div>
  );
}

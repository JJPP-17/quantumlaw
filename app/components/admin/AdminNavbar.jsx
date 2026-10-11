"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminNavbar() {
  const router = useRouter();
  async function signOut() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="h-20 flex flex-col items-center justify-center text-center">
          <Link href="/admin" className="text-2xl font-semibold text-gray-800 hover:text-gray-900 transition">Quantum Law Group admin</Link>
          <p className="text-sm text-gray-500 mt-1">Manage website content</p>
        </div>
        <button onClick={signOut} className="absolute right-4 top-7 text-sm text-blue-700 hover:underline">Sign out</button>
      </div>
    </nav>
  );
}

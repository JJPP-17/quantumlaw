"use client";
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex flex-col items-center justify-center text-center">
          <Link
            href="/admin"
            className="text-2xl font-semibold text-gray-800 hover:text-gray-900 transition"
          >
            Welcome Quantum Admin
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            You can manage your website here
          </p>
        </div>
      </div>
    </nav>
  );
}

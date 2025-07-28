'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: '/admin', label: 'Text Content' },
    { href: '/admin/dashboard', label: 'Update Content' },
    { href: '/admin/awards/list', label: 'Awards' },
    { href: '/admin/whatwedo', label: 'What We Do' },
    { href: '/admin/team/list', label: 'Team' },
    { href: '/admin/news', label: 'News' },
    { href: '/admin/careers/list', label: 'Careers' },
  ]

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
} 
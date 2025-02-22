"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart2, FileText, User } from "lucide-react"

const Navbar: React.FC = () => {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/dashboard", icon: BarChart2, label: "Dashboard" },
    { href: "/form", icon: FileText, label: "Form" },
    { href: "/profile", icon: User, label: "Profile" },
  ]

  return (
    <nav className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 space-y-8 shadow-md">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out ${
                pathname === item.href
                  ? "bg-money-green-100 text-money-green-800 dark:bg-money-green-800 dark:text-money-green-100 shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon
                size={20}
                className={pathname === item.href ? "text-money-green-600 dark:text-money-green-300" : ""}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar


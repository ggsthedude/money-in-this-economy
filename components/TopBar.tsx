"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { DollarSign, LogOut } from "lucide-react"

const TopBar: React.FC = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  return (
    <div className="bg-gradient-to-r from-deep-blue-800 to-deep-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <DollarSign className="mr-2 text-money-green-300" size={28} />
        <span className="text-2xl font-bold tracking-tight">MoneyInThisEconomy</span>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center px-4 py-2 bg-money-green-500 text-white rounded-full hover:bg-money-green-600 transition-colors duration-300 ease-in-out shadow-sm"
      >
        <LogOut size={18} className="mr-2" />
        Logout
      </button>
    </div>
  )
}

export default TopBar


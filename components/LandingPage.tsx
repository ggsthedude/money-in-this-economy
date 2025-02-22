import type React from "react"
import Link from "next/link"

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-[#0A2342]">MoneyInThisEconomy</h1>
      <p className="text-2xl mb-8 text-[#333333]">Take control of your finances in any economic climate</p>
      <Link
        href="/login"
        className="bg-[#FFD700] text-[#0A2342] font-semibold py-3 px-6 rounded-lg hover:bg-[#E6C200] transition-colors"
      >
        Get Started
      </Link>
    </div>
  )
}

export default LandingPage


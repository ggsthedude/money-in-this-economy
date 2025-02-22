"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Head from "next/head"
import Navbar from "./Navbar"
import { Moon, Sun } from "lucide-react"
import TopBar from "./TopBar"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = "MoneyInThisEconomy" }) => {
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout


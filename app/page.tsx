"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Layout from "../components/Layout"

const Home: React.FC = () => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true"
    setIsAuthenticated(authStatus)
    if (!authStatus) {
      router.push("/login")
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <Layout title="Home | MoneyInThisEconomy">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-deep-blue-800 dark:text-deep-blue-200">
            Financial News & Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay informed with the latest financial news and personalized recommendations.
          </p>
        </header>

        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-deep-blue-800 dark:text-deep-blue-200">
            Latest Financial News
          </h2>
          <div className="space-y-6">
            <article className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2 text-money-green-700 dark:text-money-green-300">
                Breaking News: Market Hits Record High
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                The stock market reached an all-time high today, with major indices gaining significant ground. Analysts
                are optimistic about the economic outlook.
              </p>
              <time className="text-sm text-gray-500 dark:text-gray-400">2025-01-08</time>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2 text-money-green-700 dark:text-money-green-300">
                Tech Conference 2025: Innovations in AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                The annual Tech Conference highlighted groundbreaking innovations in artificial intelligence, with
                keynote speeches from industry leaders.
              </p>
              <time className="text-sm text-gray-500 dark:text-gray-400">2025-01-07</time>
            </article>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-deep-blue-800 dark:text-deep-blue-200">
            Personalized Recommendations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-money-green-50 dark:bg-money-green-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-money-green-700 dark:text-money-green-300">
                Increase Your Savings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based on your spending habits, we recommend setting aside an additional 5% of your income for savings.
              </p>
            </div>
            <div className="p-4 bg-deep-blue-50 dark:bg-deep-blue-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-deep-blue-700 dark:text-deep-blue-300">
                Investment Opportunity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consider diversifying your portfolio with low-cost index funds to balance risk and potential returns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home


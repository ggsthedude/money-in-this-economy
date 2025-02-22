"use client"

import type React from "react"
import Layout from "../../components/Layout"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", Income: 4000, Expenses: 2400 },
  { name: "Feb", Income: 3000, Expenses: 1398 },
  { name: "Mar", Income: 2000, Expenses: 9800 },
  { name: "Apr", Income: 2780, Expenses: 3908 },
  { name: "May", Income: 1890, Expenses: 4800 },
  { name: "Jun", Income: 2390, Expenses: 3800 },
]

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard | MoneyInThisEconomy">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-deep-blue-800 dark:text-deep-blue-200">Financial Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-money-green-700 dark:text-money-green-300">Total Balance</h2>
            <p className="text-3xl font-bold">$12,345.67</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-money-green-700 dark:text-money-green-300">
              Monthly Income
            </h2>
            <p className="text-3xl font-bold">$5,000.00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-money-green-700 dark:text-money-green-300">
              Monthly Expenses
            </h2>
            <p className="text-3xl font-bold">$3,500.00</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue-800 dark:text-deep-blue-200">Income vs Expenses</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Income" fill="#4ade80" />
                <Bar dataKey="Expenses" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue-800 dark:text-deep-blue-200">
            Spending Categories
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Housing</span>
              <span className="font-semibold">$1,200.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Transportation</span>
              <span className="font-semibold">$500.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Food</span>
              <span className="font-semibold">$600.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Utilities</span>
              <span className="font-semibold">$300.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Entertainment</span>
              <span className="font-semibold">$200.00</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard


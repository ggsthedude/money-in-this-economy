"use client"

import type React from "react"
import { useState } from "react"
import { Doughnut, Bar } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"
import { ShoppingCart, Coffee, Car } from "lucide-react"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const Dashboard: React.FC = () => {
  const [showExpenditure, setShowExpenditure] = useState(false)
  const [showIncome, setShowIncome] = useState(false)

  const spendingData = {
    labels: ["Food", "Transport", "Entertainment", "Bills"],
    datasets: [
      {
        data: [800, 600, 400, 700],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  }

  const comparisonData = {
    labels: ["Current Month", "Last Month", "Last Year"],
    datasets: [
      {
        label: "Spending",
        data: [3200, 2800, 3000],
        backgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56"],
      },
    ],
  }

  return (
    <div className="space-y-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold">Personal Finance Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Spending</h2>
          <p className="text-3xl font-bold text-red-500">$3,200.00</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Remaining Budget</h2>
          <p className="text-3xl font-bold text-green-500">$1,000.00</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Savings</h2>
          <p className="text-3xl font-bold text-blue-500">$800.00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Spending by Category</h2>
          <Doughnut data={spendingData} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Spending Comparison</h2>
          <Bar data={comparisonData} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart className="mr-3 text-blue-500" />
              <span>Amazon Shopping</span>
            </div>
            <span className="font-semibold text-red-500">-$150.00</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <Coffee className="mr-3 text-green-500" />
              <span>Grocery Store</span>
            </div>
            <span className="font-semibold text-red-500">-$200.00</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <Car className="mr-3 text-yellow-500" />
              <span>Uber Ride</span>
            </div>
            <span className="font-semibold text-red-500">-$30.00</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Financial Goals</h2>
        <div className="mb-2">Save $5,000</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "24%" }}></div>
        </div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Current progress: $1,200.00</div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setShowExpenditure(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Enter Expenditure
        </button>
        <button
          onClick={() => setShowIncome(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Enter Income
        </button>
      </div>

      {showExpenditure && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Enter Expenditure</h2>
            {/* Add form fields for expenditure entry */}
            <button
              onClick={() => setShowExpenditure(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showIncome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Enter Income</h2>
            {/* Add form fields for income entry */}
            <button
              onClick={() => setShowIncome(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard


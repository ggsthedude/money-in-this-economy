"use client"

import type React from "react"
import { useState } from "react"
import Layout from "../../components/Layout"

const FinancialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    income: "",
    expenses: "",
    savings: "",
    investments: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Data submitted successfully!")
  }

  return (
    <Layout title="Update Financial Data | MoneyInThisEconomy">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-deep-blue-800 dark:text-deep-blue-200">Update Financial Data</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="income" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Monthly Income
            </label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-money-green-500 focus:ring focus:ring-money-green-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Monthly Expenses
            </label>
            <input
              type="number"
              id="expenses"
              name="expenses"
              value={formData.expenses}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-money-green-500 focus:ring focus:ring-money-green-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="savings" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Monthly Savings
            </label>
            <input
              type="number"
              id="savings"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-money-green-500 focus:ring focus:ring-money-green-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="investments" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Monthly Investments
            </label>
            <input
              type="number"
              id="investments"
              name="investments"
              value={formData.investments}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-money-green-500 focus:ring focus:ring-money-green-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-money-green-600 hover:bg-money-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-money-green-500"
            >
              Update Financial Data
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default FinancialForm


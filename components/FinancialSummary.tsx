import type React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
]

const FinancialSummary: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-[#0A2342]">Financial Summary</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#333333]">Stock Market Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0A2342" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#333333]">Investment Tracking</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Stocks</span>
              <span className="font-semibold text-green-500">+2.5%</span>
            </li>
            <li className="flex justify-between">
              <span>Bonds</span>
              <span className="font-semibold text-red-500">-0.8%</span>
            </li>
            <li className="flex justify-between">
              <span>Real Estate</span>
              <span className="font-semibold text-green-500">+1.2%</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#333333]">Budget Insights</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Income</span>
              <span className="font-semibold">$5,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Expenses</span>
              <span className="font-semibold">$3,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Savings</span>
              <span className="font-semibold text-green-500">$1,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialSummary


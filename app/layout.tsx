import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MoneyInThisEconomy',
  description: 'For all your financial needs',
  generator: 'MoneyInThisEconomy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

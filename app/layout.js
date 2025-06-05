// "use client"

import { Inter } from 'next/font/google'
import './ui/globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster />
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}

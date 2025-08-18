import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ModernHeader from "@/components/modern-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Silvera Group",
  description: "Engineering, Architecture, and Aerospace Solutions",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-transparent m-0 p-0`}>
        <ModernHeader />
        <main className="m-0 p-0">{children}</main>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "GDG Manipal University Jaipur",
  description: "Google Developer Groups - Manipal University Jaipur",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
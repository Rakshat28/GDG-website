"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.main>
            </AnimatePresence>
            <footer className="border-t py-6 md:py-8">
              <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Google Developer Groups - Manipal University Jaipur. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com/gdgmuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.instagram.com/gdgmuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gdgmuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}


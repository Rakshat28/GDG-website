"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Image src="/gdg-logo.png" alt="GDG Logo" width={40} height={40} className="h-10 w-10" />
          </motion.div>
          <motion.span
            className="hidden font-bold sm:inline-block"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            GDG Manipal University Jaipur
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${pathname === link.path ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button asChild variant="default" size="sm">
            <Link href="/#join">Join Us</Link>
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 pb-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg font-medium ${pathname === link.path ? "text-primary" : "text-foreground"}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/#join" onClick={closeMenu}>
                Join Us
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}


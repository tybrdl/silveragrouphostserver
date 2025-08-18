"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export default function ModernHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/engineering", label: "Engineering" },
    { href: "/architecture", label: "Architecture" },
    { href: "/aerospace", label: "Aerospace" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Main Header - Now with black background and blur effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-none border-none
          ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/70 backdrop-blur-sm"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <h1 className="text-2xl font-bold text-white tracking-wider">SILVERAGROUP</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-white group ${
                    pathname === item.href ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      pathname === item.href ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 relative overflow-hidden px-6 py-2 bg-white text-black rounded-sm font-medium group"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gray-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-white transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16"></div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <nav className="flex flex-col items-center space-y-6 py-10">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-3xl font-light transition-colors duration-300 flex items-center group ${
                  pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute top-0 left-0 inline-block transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {item.label}
                  </span>
                </span>
                <ChevronRight
                  className={`ml-2 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                    pathname === item.href ? "opacity-100 translate-x-0" : ""
                  }`}
                  size={20}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 px-8 py-3 bg-white text-black text-xl font-medium rounded-sm hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

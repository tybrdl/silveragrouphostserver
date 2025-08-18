"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Clock, Compass, Home, Building, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useEffect } from "react"
// Header import ve komponenti kaldırıldı

export default function ArchitecturePage() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const elementTop = reveal.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white animate-fade-in">
      {/* Header kaldırıldı */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kitchen-design-2.jpeg"
              alt="Architecture division"
              fill
              className="object-cover opacity-30 animate-scale-up"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32 mobile-py-reduced">
            <Link
              href="/"
              className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-all duration-300 hover:translate-x-[-4px] animate-slide-in-left"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex flex-col items-start gap-4 max-w-3xl">
              <div className="inline-flex items-center px-4 py-1 bg-zinc-800/80 rounded-full text-sm font-medium text-zinc-300 animate-slide-in-left">
                <Compass className="mr-2 h-4 w-4" />
                Architecture Division
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left delay-100">
                Designing the <span className="text-zinc-400">Future</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Creating visionary architectural designs that combine aesthetics, functionality, and sustainability to
                shape the built environment of tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Architectural Vision</h2>
                  <p className="text-zinc-400 mb-6">
                    At Silvera Group, our architecture division is committed to creating spaces that inspire, function
                    efficiently, and stand the test of time. We believe that great architecture goes beyond aesthetics
                    to address the needs of people, communities, and the environment.
                  </p>
                  <p className="text-zinc-400 mb-6">
                    Our team of architects, designers, and planners work collaboratively to develop innovative solutions
                    that balance form and function, tradition and innovation, and sustainability and performance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Building className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Sustainable Design</h3>
                      <p className="text-zinc-400">
                        Creating buildings that minimize environmental impact and maximize energy efficiency.
                      </p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Home className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Human-Centered</h3>
                      <p className="text-zinc-400">
                        Designing spaces that enhance the human experience and promote well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/kitchen-design-4.jpeg"
                    alt="Architectural design"
                    width={800}
                    height={800}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Architectural Services</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Comprehensive architectural services from concept to completion, designed to create spaces that
                  inspire and endure.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        {index === 1 && (
                          <>
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                            <path d="M12 3v6" />
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                            <path d="M12 3v6" />
                            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <path d="M2 22h20" />
                            <path d="M6 18V2" />
                            <path d="M18 18V2" />
                            <path d="M6 10h12" />
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <path d="M12 22c-4.2 0-8-3.22-8-8.2 0-4.98 3.8-9 8-9s8 4.02 8 9c0 4.98-3.8 8.2-8 8.2Z" />
                            <path d="M12 5v3" />
                            <path d="M8 9h8" />
                            <path d="m19 17-3-3" />
                            <path d="m5 17 3-3" />
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <path d="M2 12h20" />
                            <path d="M2 12a10 10 0 0 1 20 0" />
                            <path d="M2 12a10 10 0 0 0 20 0" />
                            <path d="M12 2v20" />
                          </>
                        )}
                        {index === 6 && (
                          <>
                            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                            <path d="M8 14h.01" />
                            <path d="M8 10h.01" />
                            <path d="M12 10h.01" />
                            <path d="M12 14h.01" />
                            <path d="M16 10h.01" />
                            <path d="M16 14h.01" />
                          </>
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {index === 1 && "Commercial Architecture"}
                      {index === 2 && "Residential Architecture"}
                      {index === 3 && "Institutional Architecture"}
                      {index === 4 && "Urban Planning"}
                      {index === 5 && "Sustainable Design"}
                      {index === 6 && "Interior Design"}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {index === 1 &&
                        "Design of office buildings, retail spaces, and mixed-use developments that balance aesthetics, functionality, and return on investment."}
                      {index === 2 &&
                        "Design of homes, multi-family residences, and residential communities that create comfortable, functional, and beautiful living spaces."}
                      {index === 3 &&
                        "Design of educational facilities, healthcare buildings, and civic structures that serve the needs of communities and organizations."}
                      {index === 4 &&
                        "Development of comprehensive plans for cities, neighborhoods, and districts that create vibrant, sustainable, and livable communities."}
                      {index === 5 &&
                        "Integration of environmentally responsible practices and technologies to create buildings that minimize resource consumption and environmental impact."}
                      {index === 6 &&
                        "Creation of interior spaces that enhance the user experience, reflect brand identity, and optimize functionality and aesthetics."}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Architectural Projects</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore our innovative architectural projects that combine form, function, and sustainability to
                  create inspiring spaces.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={`/images/kitchen-design-${index}.jpeg`}
                        alt={`Project ${index}`}
                        width={1280}
                        height={720}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4 text-zinc-500" />
                        <span className="text-sm text-zinc-500">{2023 - index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {index === 1 && "Eco-Friendly Corporate Headquarters"}
                        {index === 2 && "Urban Mixed-Use Development"}
                        {index === 3 && "Cultural Arts Center"}
                      </h3>
                      <p className="text-zinc-400 mb-4">
                        {index === 1 &&
                          "Design of a LEED Platinum-certified corporate headquarters that combines sustainable design with cutting-edge workplace concepts."}
                        {index === 2 &&
                          "Design of a vibrant mixed-use development that integrates residential, commercial, and public spaces to create a dynamic urban environment."}
                        {index === 3 &&
                          "Design of a contemporary arts center that provides flexible spaces for exhibitions, performances, and community engagement."}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-zinc-100 hover:text-white font-medium group transition-all duration-300"
                      >
                        View Project Details
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <div className="text-center mt-12">
                <Link href="/works?category=architecture">
                  <Button className="bg-zinc-100 text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Design Your Vision?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Partner with Silvera Group's Architecture Division to bring your architectural vision to life with
                  innovative design and expert execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mobile-full-width">
                  <Button className="bg-white text-black hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:scale-105">
                    Contact Our Architecture Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white bg-transparent hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="text-zinc-100">SILVERA</span>
                <span className="text-zinc-400">GROUP</span>
              </Link>
              <p className="text-zinc-400 text-sm">
                Building innovative solutions across Engineering, Aerospace, and Architecture.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Divisions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/engineering" className="text-zinc-400 hover:text-white text-sm">
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/aerospace" className="text-zinc-400 hover:text-white text-sm">
                    Aerospace
                  </Link>
                </li>
                <li>
                  <Link href="/architecture" className="text-zinc-400 hover:text-white text-sm">
                    Architecture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-zinc-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#careers" className="text-zinc-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/#news" className="text-zinc-400 hover:text-white text-sm">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-zinc-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/silvera-group/"
                    className="text-zinc-400 hover:text-white text-sm"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Silvera Group. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-zinc-500 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Clock, Rocket, Shield, Zap, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useEffect } from "react"
// Header import ve komponenti kaldırıldı

export default function AerospacePage() {
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
              src="/images/helicopter-naval.jpeg"
              alt="Aerospace division"
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
                <Rocket className="mr-2 h-4 w-4" />
                Aerospace Division
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left delay-100">
                Reaching New <span className="text-zinc-400">Heights</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Pushing the boundaries of aerospace technology with innovative solutions for aviation, defense, and
                space exploration.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="right">
                <div className="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/helicopter-naval.jpeg"
                    alt="Aerospace technology"
                    width={800}
                    height={800}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Aerospace Innovation</h2>
                  <p className="text-zinc-400 mb-6">
                    At Silvera Group, our aerospace division is dedicated to developing cutting-edge technologies that
                    redefine what's possible in aviation and space exploration. We combine advanced engineering with
                    innovative materials and systems to create solutions that are lighter, stronger, and more efficient.
                  </p>
                  <p className="text-zinc-400 mb-6">
                    Our team of aerospace engineers, materials scientists, and systems specialists work together to
                    address the most challenging aspects of flight, from improving fuel efficiency to enhancing safety
                    and performance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Zap className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Advanced Propulsion</h3>
                      <p className="text-zinc-400">
                        Developing next-generation propulsion systems for more efficient and sustainable flight.
                      </p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Shield className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Defense Systems</h3>
                      <p className="text-zinc-400">
                        Creating advanced defense technologies that enhance security and tactical capabilities.
                      </p>
                    </div>
                  </div>
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Aerospace Services</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Comprehensive aerospace solutions from concept to implementation, designed for performance and
                  reliability.
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
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                            <path d="m8 12 4-2 4 2" />
                            <path d="M15 13v5" />
                            <path d="M9 13v5" />
                            <path d="M12 7v3" />
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <path d="M4 11h16" />
                            <path d="M11 4h1v8h1" />
                            <path d="M18 22a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h4Z" />
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                            <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                            <path d="M8 12v4" />
                            <path d="M16 15.5v4" />
                          </>
                        )}
                        {index === 6 && (
                          <>
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                            <path d="M8.5 8.5v.01" />
                            <path d="M16 15.5v.01" />
                            <path d="M12 12v.01" />
                            <path d="M11 17v.01" />
                            <path d="M7 14v.01" />
                          </>
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {index === 1 && "Aircraft Design"}
                      {index === 2 && "Satellite Systems"}
                      {index === 3 && "Propulsion Systems"}
                      {index === 4 && "Defense Applications"}
                      {index === 5 && "Unmanned Systems"}
                      {index === 6 && "Space Exploration"}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {index === 1 &&
                        "Comprehensive design services for commercial, military, and specialized aircraft with a focus on performance and efficiency."}
                      {index === 2 &&
                        "Design and development of satellite technologies for communications, earth observation, and scientific research."}
                      {index === 3 &&
                        "Development of advanced propulsion technologies for aircraft, spacecraft, and unmanned aerial vehicles."}
                      {index === 4 &&
                        "Specialized aerospace solutions for defense applications, including surveillance, reconnaissance, and tactical systems."}
                      {index === 5 &&
                        "Design and development of unmanned aerial vehicles (UAVs) and autonomous systems for various applications."}
                      {index === 6 &&
                        "Development of technologies and systems for space exploration, including spacecraft components and habitation systems."}
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Aerospace Projects</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore our innovative aerospace projects that are pushing the boundaries of what's possible in flight
                  and space exploration.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/images/helicopter-naval.jpeg"
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
                        {index === 1 && "Next-Gen Aircraft Systems"}
                        {index === 2 && "Satellite Communication Network"}
                        {index === 3 && "Advanced UAV Platform"}
                      </h3>
                      <p className="text-zinc-400 mb-4">
                        {index === 1 &&
                          "Development of advanced avionics and control systems for next-generation commercial aircraft."}
                        {index === 2 &&
                          "Design and implementation of a global satellite communication network for high-speed data transmission."}
                        {index === 3 &&
                          "Development of a versatile unmanned aerial vehicle platform for surveillance, mapping, and emergency response."}
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
                <Link href="/works?category=aerospace">
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Reach New Heights?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Partner with Silvera Group's Aerospace Division to bring your most ambitious aerospace projects to
                  life with cutting-edge technology and expert execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mobile-full-width">
                  <Button className="bg-white text-black hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:scale-105">
                    Contact Our Aerospace Team
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

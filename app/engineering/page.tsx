"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, ChevronRight, Clock, Globe, Users, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useEffect } from "react"
// Header import ve komponenti kaldırıldı

export default function EngineeringPage() {
  // Initialize scroll animations
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
              src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.47.20-pRmdCpAZlGYxiVxQusXzG3ndV4beE4.jpg"
              alt="Engineering division"
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
                <Building2 className="mr-2 h-4 w-4" />
                Engineering Division
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left delay-100">
                Engineering <span className="text-zinc-400">Excellence</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Innovative engineering solutions for complex industrial and infrastructure challenges. Our team of
                experts delivers cutting-edge solutions across multiple engineering disciplines.
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
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Engineering Approach</h2>
                  <p className="text-zinc-400 mb-6">
                    At Silvera Group, our engineering division combines technical expertise with innovative thinking to
                    solve the most complex challenges. We specialize in developing sustainable solutions that optimize
                    performance, reduce costs, and minimize environmental impact.
                  </p>
                  <p className="text-zinc-400 mb-6">
                    Our multidisciplinary team brings together expertise in mechanical, electrical, civil, and systems
                    engineering to deliver comprehensive solutions for clients across industries.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Globe className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                      <p className="text-zinc-400">
                        Projects delivered across 30+ countries with local expertise and global standards.
                      </p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-4px]">
                      <Users className="h-8 w-8 text-zinc-300 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                      <p className="text-zinc-400">
                        Over 200 specialized engineers with advanced degrees and industry certifications.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/silveragrouplogo-8wcIopzX15ak93udDHpv2DdlrUOT3m.png"
                    alt="Engineering team"
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Engineering Services</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Comprehensive engineering solutions tailored to meet the unique needs of each project and client.
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
                        {index === 1 && <path d="M2 22h20M3 10v12M21 10v12m-9-4v-8M3 6l9-4 9 4" />}
                        {index === 2 && (
                          <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M9 20v-4.5a2.5 2.5 0 0 1 5 0V20M22 8h-4a2 2 0 1 0 0 4h4v4a2 2 0 1 1-4 0" />
                        )}
                        {index === 3 && <path d="M3 6h18M7 12h10M10 18h4" />}
                        {index === 4 && <path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />}
                        {index === 5 && (
                          <path d="M12 22c-4.2 0-8-3.22-8-8.2 0-4.98 3.8-9 8-9s8 4.02 8 9c0 4.98-3.8 8.2-8 8.2ZM12 5v3M8 9h8m-11 8 3-3m11 3-3-3" />
                        )}
                        {index === 6 && <path d="M12 2H2v10h10V2ZM12 12H2v10h10V12ZM22 2h-10v20h10V2Z" />}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {index === 1 && "Structural Engineering"}
                      {index === 2 && "Electrical Engineering"}
                      {index === 3 && "Mechanical Engineering"}
                      {index === 4 && "Civil Engineering"}
                      {index === 5 && "Environmental Engineering"}
                      {index === 6 && "Systems Engineering"}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {index === 1 &&
                        "Design and analysis of structures to ensure safety, functionality, and durability under various loads and conditions."}
                      {index === 2 &&
                        "Design and implementation of electrical systems, power distribution, automation, and control systems for various applications."}
                      {index === 3 &&
                        "Design and development of mechanical systems, HVAC, energy systems, and manufacturing processes."}
                      {index === 4 &&
                        "Design and construction of infrastructure projects including roads, bridges, water systems, and buildings."}
                      {index === 5 &&
                        "Development of sustainable solutions for waste management, water treatment, and pollution control."}
                      {index === 6 &&
                        "Integration of multiple engineering disciplines to design and manage complex systems throughout their lifecycle."}
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Engineering Projects</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore some of our most innovative and impactful engineering projects from around the world.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
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
                        {index === 1 && "Sustainable Energy Plant"}
                        {index === 2 && "Smart City Infrastructure"}
                        {index === 3 && "Advanced Manufacturing Facility"}
                      </h3>
                      <p className="text-zinc-400 mb-4">
                        {index === 1 &&
                          "Design and implementation of a state-of-the-art renewable energy facility combining solar, wind, and biomass technologies."}
                        {index === 2 &&
                          "Development of integrated smart city systems including traffic management, energy optimization, and public safety."}
                        {index === 3 &&
                          "Design and implementation of a fully automated manufacturing facility with Industry 4.0 technologies and systems."}
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
                <Link href="/works?category=engineering">
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Engineer the Future?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Partner with Silvera Group's Engineering Division to bring your most challenging projects to life with
                  innovative solutions and expert execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mobile-full-width">
                  <Button className="bg-white text-black hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:scale-105 animate-pulse">
                    Contact Our Engineering Team
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
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl transition-all duration-300 hover:scale-105"
              >
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
                  <Link
                    href="/engineering"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aerospace"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Aerospace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/architecture"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Architecture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#careers"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#news"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
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
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Silvera Group. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-zinc-500 hover:text-white text-sm transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-zinc-500 hover:text-white text-sm transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

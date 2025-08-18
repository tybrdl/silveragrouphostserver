"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"
import ScrollReveal from "@/components/scroll-reveal"
// Header import ve komponenti kaldırıldı

export default function Home() {
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header kaldırıldı */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black">
            <Image
              src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.27.32-8Ejz2kunqinAzEYjvasAAS0VhH0C2Y.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-50 animate-scale"
              priority
            />
          </div>

          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Building the <span className="text-gray-300">Future</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up delay-200">
              Silvera Group brings together expertise in Engineering, Aerospace, and Architecture to create innovative
              solutions for tomorrow's challenges.
            </p>

            <div className="animate-slide-up delay-400">
              <Link href="/works">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Divisions</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore our specialized divisions working at the forefront of technology and design.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
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
                      className="h-6 w-6 text-zinc-300"
                    >
                      <rect width="8" height="14" x="8" y="5" rx="1" />
                      <path d="M4 5h4" />
                      <path d="M4 10h4" />
                      <path d="M4 15h4" />
                      <path d="M16 5h4" />
                      <path d="M16 10h4" />
                      <path d="M16 15h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Engineering</h3>
                  <p className="text-zinc-400 mb-6">
                    Innovative engineering solutions for complex industrial and infrastructure challenges, delivered by
                    our team of experts across multiple disciplines.
                  </p>
                  <Link
                    href="/engineering"
                    className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
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
                      className="h-6 w-6 text-zinc-300"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aerospace</h3>
                  <p className="text-zinc-400 mb-6">
                    Cutting-edge aerospace technologies and solutions for aviation, defense, and space exploration that
                    push the boundaries of what's possible.
                  </p>
                  <Link
                    href="/aerospace"
                    className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
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
                      className="h-6 w-6 text-zinc-300"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                      <path d="M12 3v6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Architecture</h3>
                  <p className="text-zinc-400 mb-6">
                    Visionary architectural designs that combine aesthetics, functionality, and sustainability to create
                    inspiring spaces for people and communities.
                  </p>
                  <Link
                    href="/architecture"
                    className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore some of our most innovative and impactful projects across our divisions.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/helicopter-naval.jpeg"
                      alt="Aerospace Project"
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full">
                      Aerospace
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-100">Sikorsky SH-60 Seahawk</h3>
                    <p className="text-zinc-400 mb-4">
                      Advanced systems integration for naval helicopter operations and maritime security.
                    </p>
                    <Link
                      href="/works"
                      className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/mercedes-diplomatic.jpeg"
                      alt="Engineering Project"
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full">
                      Engineering
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-100">Mercedes-Benz S-Guard</h3>
                    <p className="text-zinc-400 mb-4">
                      Advanced security systems engineering for diplomatic and VIP transportation.
                    </p>
                    <Link
                      href="/works"
                      className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/kitchen-design-1.jpeg"
                      alt="Architecture Project"
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full">
                      Architecture
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-100">Modern Kitchen Design</h3>
                    <p className="text-zinc-400 mb-4">
                      Contemporary kitchen design combining functionality, aesthetics, and sustainable materials.
                    </p>
                    <Link
                      href="/works"
                      className="text-zinc-100 hover:text-white font-medium inline-flex items-center group transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12">
                <Link href="/works">
                  <Button className="bg-zinc-100 text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105">
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Work Together?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss how Silvera Group can help bring your vision to life with our expertise in
                  Engineering, Aerospace, and Architecture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105 text-white bg-black border-white">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105 bg-black text-white"
                    >
                      Learn More About Us
                    </Button>
                  </Link>
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
                    href="/about"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#news"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
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
                    href="#"
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
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 mt-8 pt-8">
            <div className="text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Silvera Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-zinc-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

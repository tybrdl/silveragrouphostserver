"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Filter, Search } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { useSearchParams, useRouter } from "next/navigation"
// Header import ve komponenti kaldırıldı

// Project type
type Project = {
  id: number
  title: string
  category: "engineering" | "aerospace" | "architecture"
  description: string
  image: string
  projectLink?: string
  featured?: boolean
}

// Projects data from Silvera Aerospace-Engineering-Architect portfolio
const projects: Project[] = [
  {
    id: 1,
    title: "Bell AH-1W SuperCobra",
    category: "aerospace",
    description:
      "The AH-1 Cobra is a single and twin-engine attack helicopter manufactured by Bell Helicopter. It is one of the pioneers of its kind.",
    image: "/images/bell-ah1w-supercobra.png",
    projectLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Airbus H225M Super Cougar - Turkish Armed Forces",
    category: "aerospace",
    description:
      "The Eurocopter EC725 Caracal, now called Airbus Helicopters H225M, is a long-range tactical transport military helicopter.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.25.24-wir199GGHsWy6gUqgzvnGTxLXxfh0G.jpg",
    projectLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Sikorsky SH-60 Seahawk - Turkish Armed Forces",
    category: "aerospace",
    description:
      "The Sikorsky SH-60/MH-60 Seahawk (or Sea Hawk) is a twin turboshaft engine, multi-mission United States Navy helicopter based on the United States Army UH-60 Black Hawk and a member of the Sikorsky S-70 family.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.29.50-7kBlRfK7mssBeQSTjY4YXwTUNErXGu.jpg",
    projectLink: "#",
  },
  {
    id: 4,
    title: "Sikorsky S-92 - Presidency of Türkiye",
    category: "aerospace",
    description:
      "The Sikorsky S-92 is an American twin-engine medium-lift helicopter built by Sikorsky Aircraft for the civil and military helicopter markets.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.30.46-KxPcMcRPuySn6kWbzlooiRgKmy2OP7.jpg",
    projectLink: "#",
  },
  {
    id: 5,
    title: "Bell AH-1Z Viper",
    category: "aerospace",
    description:
      "The AH-1 Cobra is a single and twin-engine attack helicopter manufactured by Bell Helicopter. It is one of the pioneers of its kind and its models are still used by many armies in the world today.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.33.16-YUvLvg7ZMRuUUBaJouGxVoA1midZzD.jpg",
    projectLink: "#",
  },
  {
    id: 6,
    title: "Airbus A319-100 ACJ - Presidency of Türkiye",
    category: "aerospace",
    description:
      "The Airbus A319 is a member of the Airbus A320 family of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners manufactured by Airbus.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.35.19-ZmJmSboM61gIipCJFGAGjZ31vlAAiC.jpg",
    projectLink: "#",
  },
  {
    id: 7,
    title: "Bell 429 - Turkish Police Organization",
    category: "aerospace",
    description:
      "The Bell 429 GlobalRanger is a light, twin-engine helicopter developed by Bell Helicopter and Korea Aerospace Industries.",
    image:
      "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.36.19-ROKvRV7yWF2fkHhON6M2NTNxwKe7Tb.jpg",
    projectLink: "#",
  },
  {
    id: 8,
    title: "Mercedes-Benz S-Guard S600 - Presidency of Türkiye",
    category: "engineering",
    description:
      "The Mercedes-Benz S600 Guard is part of Mercedes-Benz's armored vehicle lineup, specifically designed for VIPs, government officials, and business executives with high security needs.",
    image: "/images/mercedes-diplomatic.jpeg",
    featured: true,
  },
]

export default function WorksPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialCategory =
    (searchParams.get("category") as "engineering" | "aerospace" | "architecture" | "all") || "all"

  const [activeCategory, setActiveCategory] = useState<"engineering" | "aerospace" | "architecture" | "all">(
    initialCategory,
  )
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((project) => project.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query),
      )
    }

    setFilteredProjects(filtered)
  }, [activeCategory, searchQuery])

  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (activeCategory === "all") {
      params.delete("category")
    } else {
      params.set("category", activeCategory)
    }
    router.replace(`/works?${params.toString()}`)
  }, [activeCategory, router, searchParams])

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

  // Handle category change
  const handleCategoryChange = (category: "engineering" | "aerospace" | "architecture" | "all") => {
    setActiveCategory(category)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white animate-fade-in">
      {/* Header kaldırıldı */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.27.32-8Ejz2kunqinAzEYjvasAAS0VhH0C2Y.jpg"
              alt="Our Works"
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left delay-100">
                Our <span className="text-zinc-400">Works</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Explore our portfolio of innovative projects from Silvera Aerospace-Engineering-Architect featuring
                cutting-edge designs and solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-zinc-950 border-y border-zinc-900">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  size="lg"
                  className={`transition-all duration-300 bg-black text-slate-100 text-white  ${
                    activeCategory === "all"
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => handleCategoryChange("all")}
                >
                  All Projects
                </Button>
                <Button
                  variant={activeCategory === "engineering" ? "default" : "outline"}
                  size="lg"
                  className={`transition-all duration-300 bg-black text-slate-100 text-white ${
                    activeCategory === "engineering"
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => handleCategoryChange("engineering")}
                >
                  Engineering
                </Button>
                <Button
                  variant={activeCategory === "aerospace" ? "default" : "outline"}
                  size="lg"
                  className={`transition-all duration-300 text-white bg-black ${
                    activeCategory === "aerospace"
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => handleCategoryChange("aerospace")}
                >
                  Aerospace
                </Button>
                <Button
                  variant={activeCategory === "architecture" ? "default" : "outline"}
                  size="lg"
                  className={`transition-all duration-300 text-white text-white bg-black ${
                    activeCategory === "architecture"
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => handleCategoryChange("architecture")}
                >
                  Architecture
                </Button>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-700 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ScrollReveal key={project.id} delay={index * 100}>
                    <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px] hover:shadow-lg">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-zinc-100 text-black px-3 py-1 text-xs font-medium rounded-full">
                            Featured
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full capitalize">
                          {project.category}
                        </div>
                      </div>
                      <div className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-white bg-black">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-100">{project.title}</h3>
                        <p className="text-zinc-400 mb-4 line-clamp-2">{project.description}</p>
                        {project.projectLink ? (
                          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-white bg-black"
                            >
                              View Details
                            </Button>
                          </a>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 bg-black text-white"
                          >
                            View Project
                          </Button>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 mb-6">
                  <Filter className="h-8 w-8 text-zinc-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-zinc-400 mb-6">
                  No projects match your current filters. Try adjusting your search or category selection.
                </p>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white transition-all duration-300 bg-transparent"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Interested in Working Together?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss how Silvera Aerospace-Engineering-Architect can help bring your vision to life
                  with our expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-black hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:scale-105">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Learn About Us
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
              <p className="text-zinc-400 text-sm">Building innovative solutions across Engineering and Aerospace.</p>
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
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Silvera Group Holdings. All rights reserved.
            </p>
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

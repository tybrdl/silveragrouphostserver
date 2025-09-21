"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users, Globe, Award, Lightbulb } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

// Team member type
type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tayfun A.",
    role: "CEO & Founder",
    bio: "Tayfun A. founded Silvera Group with a vision to integrate cutting-edge engineering, aerospace innovation, and sustainable architecture. With over 25 years of experience in engineering and business leadership, she drives the company's strategic direction.",
    image: "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/userphoto-pQ0tEMLTGNJXUtwUy8MKf08Lnws1tZ.png",
  },
  {
    id: 2,
    name: "H.Buğra Ş.",
    role: "Chief Architect Officer",
    bio: "Marcus leads our Engineering Division with expertise in structural engineering and sustainable infrastructure. His innovative approach has been instrumental in developing our most groundbreaking engineering solutions.",
    image: "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/userphoto-pQ0tEMLTGNJXUtwUy8MKf08Lnws1tZ.png",
  },
  {
    id: 3,
    name: "Kerem B.",
    role: "Chief Generalist Officer",
    bio: "With a background in aerospace engineering and defense systems, Sophia brings technical excellence and visionary leadership to our Aerospace Division, pushing the boundaries of what's possible in flight and space technology.",
    image: "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/userphoto-pQ0tEMLTGNJXUtwUy8MKf08Lnws1tZ.png",
  },
]

// Timeline event type
type TimelineEvent = {
  year: number
  title: string
  description: string
}

// Sample timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: 2019,
    title: "Company Founded",
    description:
      "Silvera Group was founded as a small engineering consultancy focused on industrial infrastructure projects.",
  },
  {
    year: 2020,
    title: "Expansion into Architecture",
    description:
      "The company expanded its services to include architectural design, with a focus on sustainable commercial buildings.",
  },
  {
    year: 2021,
    title: "Aerospace Division Launch",
    description:
      "Silvera Group established its Aerospace Division, beginning with aircraft component design for commercial aviation.",
  },
  {
    year: 2022,
    title: "Country Expansion",
    description: "The company opened its first international offices in Turkey, beginning a period of global growth.",
  },
  {
    year: 2023,
    title: "Major Defense Contract",
    description: "Secured a landmark contract to develop advanced aerospace systems for defense applications.",
  },
  {
    year: 2024,
    title: "Sustainability Initiative",
    description: "Launched a company-wide sustainability initiative, committing to carbon-neutral operations by 2030.",
  },
  {
    year: 2025,
    title: "Innovation Center",
    description:
      "Opened the Silvera Innovation Center, a state-of-the-art facility for cross-disciplinary research and development.",
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"company" | "team" | "values">("company")

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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.27.32-8Ejz2kunqinAzEYjvasAAS0VhH0C2Y.jpg"
              alt="About Silvera Group"
              fill
              className="object-cover opacity-30 animate-scale-up"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <Link
              href="/"
              className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-all duration-300 hover:translate-x-[-4px] animate-slide-in-left"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex flex-col items-start gap-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left delay-100">
                About <span className="text-zinc-400">Us</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Learn about our company, our team, and the values that drive our innovation across Engineering,
                Aerospace, and Architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-8 bg-zinc-950 border-y border-zinc-900">
          <div className="container">
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-2">
              <Button
                variant={activeTab === "company" ? "default" : "outline"}
                size="lg"
                className={`transition-all duration-300 bg-neutral-950 border-slate-50 text-white ${
                  activeTab === "company"
                    ? "bg-zinc-100 text-black hover:bg-zinc-200"
                    : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                }`}
                onClick={() => setActiveTab("company")}
              >
                Our Company
              </Button>
              <Button
                variant={activeTab === "team" ? "default" : "outline"}
                size="lg"
                className={`transition-all duration-300 text-white bg-black ${
                  activeTab === "team"
                    ? "bg-zinc-100 text-black hover:bg-zinc-200"
                    : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                }`}
                onClick={() => setActiveTab("team")}
              >
                Leadership Team
              </Button>
              <Button
                variant={activeTab === "values" ? "default" : "outline"}
                size="lg"
                className={`transition-all duration-300 text-black bg-black ${
                  activeTab === "values"
                    ? "bg-zinc-100 text-black hover:bg-zinc-200"
                    : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                }`}
                onClick={() => setActiveTab("values")}
              >
                Our Values
              </Button>
            </div>
          </div>
        </section>

        {/* Company Section */}
        {activeTab === "company" && (
          <>
            {/* Company Overview */}
            <section className="py-16 md:py-24 bg-black">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <ScrollReveal direction="left">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
                      <p className="text-zinc-400 mb-6">
                        Founded in 2019, Silvera Group began as a small engineering consultancy with a vision to create
                        innovative solutions for complex industrial challenges. Over the years, we&apos;ve grown into a
                        global multidisciplinary firm at the intersection of engineering, aerospace, and architecture.
                      </p>
                      <p className="text-zinc-400 mb-6">
                        Our journey has been defined by a relentless pursuit of excellence and innovation. From our
                        first engineering projects to our expansion into architecture and aerospace, we&apos;ve
                        maintained our commitment to pushing boundaries and creating solutions that shape the future.
                      </p>
                      <p className="text-zinc-400">
                        Today, Silvera Group operates in 1 countries with over 25 employees in Turkey. We continue to be
                        driven by our founding vision: to integrate cutting-edge technology, sustainable practices, and
                        human-centered design to solve the world&apos;s most challenging problems.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right">
                    <div className="relative aspect-square overflow-hidden rounded-lg group">
                      <Image
                        src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/silveragrouplogo-8wcIopzX15ak93udDHpv2DdlrUOT3m.png"
                        alt="Silvera Group HeadQuarters"
                        width={800}
                        height={800}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-zinc-950">
              <div className="container">
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Mission & Vision</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                      Our purpose and direction that guides everything we do.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <ScrollReveal direction="left">
                    <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-zinc-400 mb-6">
                        To create innovative solutions at the intersection of engineering, aerospace, and architecture
                        that solve complex challenges and improve lives around the world.
                      </p>
                      <p className="text-zinc-400">
                        We are committed to delivering excellence in every project, integrating sustainable practices,
                        and pushing the boundaries of what&apos;s possible through continuous innovation and
                        collaboration.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right">
                    <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                      <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                      <p className="text-zinc-400 mb-6">
                        To be the global leader in integrated engineering, aerospace, and architectural solutions that
                        shape a more sustainable, efficient, and connected future.
                      </p>
                      <p className="text-zinc-400">
                        We envision a world where our innovations enable sustainable infrastructure, advanced
                        transportation, and inspiring spaces that enhance human experience and protect our planet for
                        future generations.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24 bg-black">
              <div className="container">
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                      Key milestones in Silvera Group&apos;s history of innovation and growth.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-zinc-800"></div>

                  {/* Timeline events */}
                  <div className="space-y-12">
                    {timelineEvents.map((event, index) => (
                      <ScrollReveal key={event.year} delay={index * 100}>
                        <div
                          className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-[-8px] md:left-1/2 transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-zinc-100 border-4 border-zinc-900"></div>

                          {/* Content */}
                          <div className="md:w-1/2"></div>
                          <div
                            className={`bg-zinc-900 p-6 rounded-lg md:w-1/2 ml-6 md:ml-0 transition-all duration-300 hover:bg-zinc-800 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                          >
                            <div className="flex items-center mb-2">
                              <Calendar className="h-5 w-5 text-zinc-400 mr-2" />
                              <span className="text-xl font-bold">{event.year}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-zinc-400">{event.description}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Global Presence */}
            <section className="py-16 md:py-24 bg-zinc-950">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <ScrollReveal direction="left">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.29.50-7kBlRfK7mssBeQSTjY4YXwTUNErXGu.jpg"
                        alt="Global map"
                        width={1280}
                        height={720}
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Global Presence</h2>
                      <p className="text-zinc-400 mb-6">
                        With headquarters in Turkey and offices across Istanbul and Ankara Silvera Group delivers
                        projects worldwide with local expertise and global standards.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <div className="text-3xl font-bold mb-2">1</div>
                          <div className="text-zinc-400">Countries</div>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <div className="text-3xl font-bold mb-2">2</div>
                          <div className="text-zinc-400">Offices</div>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <div className="text-3xl font-bold mb-2">4+</div>
                          <div className="text-zinc-400">Employees</div>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <div className="text-3xl font-bold mb-2">85</div>
                          <div className="text-zinc-400">Projects</div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <section className="py-16 md:py-24 bg-black">
            <div className="container">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Leadership Team</h2>
                  <p className="text-zinc-400 max-w-2xl mx-auto">
                    Meet the experts and visionaries leading Silvera Group&apos;s innovation across Engineering,
                    Aerospace, and Architecture.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <ScrollReveal key={member.id} delay={index * 100}>
                    <div className="bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px] hover:shadow-lg group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-zinc-400 mb-4">{member.role}</p>
                        <p className="text-zinc-300 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Values Section */}
        {activeTab === "values" && (
          <section className="py-16 md:py-24 bg-black">
            <div className="container">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
                  <p className="text-zinc-400 max-w-2xl mx-auto">
                    The principles that guide our work and define our culture at Silvera Group.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollReveal direction="left" delay={100}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                      <Lightbulb className="h-6 w-6 text-zinc-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Innovation</h3>
                    <p className="text-zinc-400">
                      We embrace creativity and forward thinking to develop groundbreaking solutions that push the
                      boundaries of what&apos;s possible in engineering, aerospace, and architecture.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                      <Award className="h-6 w-6 text-zinc-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Excellence</h3>
                    <p className="text-zinc-400">
                      We are committed to the highest standards of quality and performance in everything we do, from
                      design and engineering to project execution and client service.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={300}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                      <Globe className="h-6 w-6 text-zinc-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                    <p className="text-zinc-400">
                      We integrate environmental responsibility into all our work, developing solutions that minimize
                      resource consumption, reduce emissions, and promote a healthier planet.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left" delay={400}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                      <Users className="h-6 w-6 text-zinc-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                    <p className="text-zinc-400">
                      We believe in the power of diverse perspectives and cross-disciplinary teamwork to solve complex
                      challenges and deliver exceptional results for our clients.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
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
                        className="h-6 w-6"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M12 18v-6" />
                        <path d="M8 15h8" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Integrity</h3>
                    <p className="text-zinc-400">
                      We conduct our business with honesty, transparency, and ethical standards, building trust with our
                      clients, partners, employees, and communities.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={600}>
                  <div className="bg-zinc-900 p-8 rounded-lg h-full transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-8px]">
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
                        className="h-6 w-6"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Safety</h3>
                    <p className="text-zinc-400">
                      We prioritize the safety and well-being of our employees, clients, and the public in all our
                      operations, designs, and solutions.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our Team</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  We&apos;re always looking for talented individuals who share our values and passion for innovation.
                  Explore career opportunities at Silvera Group.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="hover:bg-zinc-200 transition-all duration-300 hover:scale-105 animate-pulse bg-black">
                    View Career Opportunities
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105 bg-black text-white"
                  >
                    Learn About Our Culture
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

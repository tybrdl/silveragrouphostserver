"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
// Header import ve komponenti kaldırıldı

// Office location type
type OfficeLocation = {
  id: number
  city: string
  country: string
  address: string
  phone: string
  email: string
  hours: string
  image: string
}

// Sample office locations
const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    city: "Istanbul",
    country: "Turkey",
    address: "Atalar, Doğu Cd. Akdeniz Ap No:80 B, 34862 Kartal/İstanbul",
    phone: "+90 (505) 000 0000",
    email: "info@silveragroup.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    image: "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/Silvera.png",
  },
]

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState<number>(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
      setFormSubmitted(false)
    }, 5000)
  }

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
              src="https://e8ljj1chplhqghas.public.blob.vercel-storage.com/blob-2025-04-15%20at%2014.27.32-8Ejz2kunqinAzEYjvasAAS0VhH0C2Y.jpg"
              alt="Contact Silvera Group"
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
                Contact <span className="text-zinc-400">Us</span>
              </h1>
              <p className="text-lg text-zinc-400 md:text-xl max-w-2xl animate-slide-in-left delay-200">
                Get in touch with our team to discuss your project, request information, or explore partnership
                opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                  <p className="text-zinc-400 mb-8">
                    Fill out the form below, and our team will get back to you as soon as possible. We look forward to
                    hearing about your project and how we can help bring your vision to life.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-zinc-300" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="text-zinc-400">info@silveragroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-zinc-300" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="text-zinc-400">+90 (505) 000 0000</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-zinc-300" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Headquarters</h3>
                        <p className="text-zinc-400">Atalar, Doğu Cd. Akdeniz Ap No:80 B, 34862 Kartal/İstanbul</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-zinc-900 rounded-lg p-8">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6">
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
                          className="h-8 w-8 text-green-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                      <p className="text-zinc-400 mb-6">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        variant="outline"
                        className="border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white transition-all duration-300 bg-transparent"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mobile-full-width">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                            placeholder="Hakkı Hakyemez"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                            placeholder="hakkihakyemez@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mobile-full-width">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                            placeholder="+90 (505) 000 0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="Engineering Services">Engineering Services</option>
                          <option value="Aerospace Solutions">Aerospace Solutions</option>
                          <option value="Architectural Design">Architectural Design</option>
                          <option value="Partnership Opportunity">Partnership Opportunity</option>
                          <option value="Career Inquiry">Career Inquiry</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 text-white"
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>
                      <div>
                        <Button
                          type="submit"
                          className="w-full bg-zinc-100 text-black hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Global Offices</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  With offices around the world, we're ready to serve you wherever you are. Find the Silvera Group
                  location nearest to you.
                </p>
              </div>
            </ScrollReveal>

            {/* Office Locations Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 mb-12">
              {officeLocations.map((office) => (
                <Button
                  key={office.id}
                  variant={activeLocation === office.id ? "default" : "outline"}
                  size="lg"
                  className={`transition-all duration-300 ${
                    activeLocation === office.id
                      ? "bg-zinc-100 text-black hover:bg-zinc-200"
                      : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
                  }`}
                  onClick={() => setActiveLocation(office.id)}
                >
                  {office.city}
                </Button>
              ))}
            </div>

            {/* Active Office Details */}
            {officeLocations.map(
              (office) =>
                office.id === activeLocation && (
                  <div key={office.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={
                            office.image ||
                            "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/Silvera.png" ||
                            "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/Silvera.png" ||
                            "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/Silvera.png" ||
                            "https://e8ljj1chplhqghas.public.blob.vercel-storage.com/Silvera.png" ||
                            "/placeholder.svg"
                          }
                          alt={`${office.city} office`}
                          width={600}
                          height={400}
                          className="object-cover"
                        />
                      </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right">
                      <div className="bg-zinc-900 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-6 mt-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <MapPin className="h-5 w-5 text-zinc-400 mt-1" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium">Address</h4>
                              <p className="text-zinc-400">{office.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <Phone className="h-5 w-5 text-zinc-400 mt-1" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium">Phone</h4>
                              <p className="text-zinc-400">{office.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <Mail className="h-5 w-5 text-zinc-400 mt-1" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium">Email</h4>
                              <p className="text-zinc-400">{office.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <Clock className="h-5 w-5 text-zinc-400 mt-1" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-lg font-medium">Office Hours</h4>
                              <p className="text-zinc-400">{office.hours}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <Button
                            variant="outline"
                            className="border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-white bg-black"
                          >
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                ),
            )}
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Find Us</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Explore our global presence and find the Silvera Group office nearest to you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <iframe
                  title="Eyüp Usta Harita"
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=%C4%B0stanbul&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Find answers to common questions about working with Silvera Group.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800">
                  <h3 className="text-xl font-bold mb-3">
                    What is the typical process for starting a project with Silvera Group?
                  </h3>
                  <p className="text-zinc-400">
                    Our process typically begins with an initial consultation to understand your needs and goals. We
                    then develop a proposal outlining scope, timeline, and budget. Once approved, we move into design
                    and implementation phases, with regular check-ins and updates throughout the project.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800">
                  <h3 className="text-xl font-bold mb-3">Do you work on international projects?</h3>
                  <p className="text-zinc-400">
                    Yes, Silvera Group has extensive experience working on international projects. With offices in
                    multiple countries and a global team of experts, we're equipped to handle projects anywhere in the
                    world, ensuring compliance with local regulations and standards.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={300}>
                <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800">
                  <h3 className="text-xl font-bold mb-3">How do you approach sustainability in your projects?</h3>
                  <p className="text-zinc-400">
                    Sustainability is core to our approach across all divisions. We integrate environmentally
                    responsible practices, energy-efficient designs, and sustainable materials into every project. Our
                    goal is to minimize environmental impact while maximizing performance and longevity.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={400}>
                <div className="bg-zinc-900 p-6 rounded-lg transition-all duration-300 hover:bg-zinc-800">
                  <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
                  <p className="text-zinc-400">
                    We serve a wide range of industries including commercial, residential, healthcare, education,
                    transportation, defense, energy, and government sectors. Our multidisciplinary approach allows us to
                    bring innovative solutions to diverse challenges across industries.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Project?</h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss how Silvera Group can bring your vision to life with innovative solutions
                  and expert execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-black hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:scale-105">
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    View Our Portfolio
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

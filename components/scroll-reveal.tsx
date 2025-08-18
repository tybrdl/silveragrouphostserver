"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  direction?: "up" | "left" | "right"
  delay?: number
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
          }
        })
      },
      {
        threshold: window.innerWidth < 768 ? 0.05 : threshold, // Lower threshold on mobile for better performance
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, delay])

  const getRevealClass = () => {
    switch (direction) {
      case "left":
        return "reveal-left"
      case "right":
        return "reveal-right"
      default:
        return "reveal"
    }
  }

  return (
    <div ref={ref} className={`${getRevealClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

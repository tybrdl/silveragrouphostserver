"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const TouchButton = React.forwardRef<HTMLButtonElement, TouchButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-white text-black hover:bg-gray-200 active:bg-gray-300": variant === "default",
            "border border-white text-white hover:bg-white/10 active:bg-white/20": variant === "outline",
            "text-white hover:bg-white/10 active:bg-white/20": variant === "ghost",
            "h-12 px-6 py-3 text-base": size === "default",
            "h-10 px-4 py-2 text-sm": size === "sm",
            "h-14 px-8 py-4 text-lg": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
TouchButton.displayName = "TouchButton"

export { TouchButton }

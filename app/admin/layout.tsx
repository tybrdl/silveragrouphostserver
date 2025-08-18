"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, ImageIcon, FileText, Settings, Users, LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <div className="w-64 border-r border-zinc-800 bg-black hidden md:block">
        <div className="h-16 border-b border-zinc-800 flex items-center px-6">
          <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-zinc-100">ADMIN</span>
            <span className="text-zinc-400">PANEL</span>
          </Link>
        </div>
        <div className="p-4">
          <nav className="space-y-2">
            <Link href="/admin">
              <Button
                variant={isActive("/admin") ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive("/admin")
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/photos">
              <Button
                variant={isActive("/admin/photos") ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive("/admin/photos")
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Photos
              </Button>
            </Link>
            <Link href="/admin/projects">
              <Button
                variant={isActive("/admin/projects") ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive("/admin/projects")
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <FileText className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </Link>
            <Link href="/admin/users">
              <Button
                variant={isActive("/admin/users") ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive("/admin/users")
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button
                variant={isActive("/admin/settings") ? "default" : "ghost"}
                className={`w-full justify-start ${
                  isActive("/admin/settings")
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-900">
                <LogOut className="mr-2 h-4 w-4" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 bg-black flex items-center justify-between px-6">
          <div className="md:hidden flex items-center gap-2 font-bold text-xl">
            <span className="text-zinc-100">ADMIN</span>
            <span className="text-zinc-400">PANEL</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">Admin User</div>
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">A</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-zinc-950 p-6">{children}</main>
      </div>
    </div>
  )
}

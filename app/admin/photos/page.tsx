"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Search, Filter, MoreVertical, Trash2, Edit, Eye, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample photo data
const samplePhotos = [
  {
    id: 1,
    title: "Engineering Project 1",
    category: "engineering",
    uploadDate: "2023-10-15",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Aerospace Design",
    category: "aerospace",
    uploadDate: "2023-10-12",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Modern Architecture",
    category: "architecture",
    uploadDate: "2023-10-10",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Engineering Facility",
    category: "engineering",
    uploadDate: "2023-10-08",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Aerospace Component",
    category: "aerospace",
    uploadDate: "2023-10-05",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Building Design",
    category: "architecture",
    uploadDate: "2023-10-03",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
]

export default function PhotosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"all" | "engineering" | "aerospace" | "architecture">("all")

  // Filter photos based on search query and category
  const filteredPhotos = samplePhotos.filter((photo) => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || photo.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Photos</h1>
          <p className="text-zinc-400">Manage photos for the website</p>
        </div>
        <Link href="/admin/photos/upload">
          <Button className="bg-zinc-100 text-black hover:bg-zinc-200">
            <Plus className="mr-2 h-4 w-4" />
            Upload New Photo
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex overflow-x-auto scrollbar-hide space-x-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            className={`transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-zinc-100 text-black hover:bg-zinc-200"
                : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Photos
          </Button>
          <Button
            variant={activeCategory === "engineering" ? "default" : "outline"}
            size="sm"
            className={`transition-all duration-300 ${
              activeCategory === "engineering"
                ? "bg-zinc-100 text-black hover:bg-zinc-200"
                : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
            }`}
            onClick={() => setActiveCategory("engineering")}
          >
            Engineering
          </Button>
          <Button
            variant={activeCategory === "aerospace" ? "default" : "outline"}
            size="sm"
            className={`transition-all duration-300 ${
              activeCategory === "aerospace"
                ? "bg-zinc-100 text-black hover:bg-zinc-200"
                : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
            }`}
            onClick={() => setActiveCategory("aerospace")}
          >
            Aerospace
          </Button>
          <Button
            variant={activeCategory === "architecture" ? "default" : "outline"}
            size="sm"
            className={`transition-all duration-300 ${
              activeCategory === "architecture"
                ? "bg-zinc-100 text-black hover:bg-zinc-200"
                : "border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:text-white"
            }`}
            onClick={() => setActiveCategory("architecture")}
          >
            Architecture
          </Button>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search photos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-700 text-white"
          />
        </div>
      </div>

      {/* Photos Grid */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative aspect-video group">
                <Image src={photo.thumbnail || "/placeholder.svg"} alt={photo.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-xs rounded capitalize">
                  {photo.category}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white">{photo.title}</h3>
                    <p className="text-xs text-zinc-400">Uploaded on {photo.uploadDate}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                      <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-zinc-800" />
                      <DropdownMenuItem className="text-red-500 hover:bg-zinc-800 hover:text-red-500 cursor-pointer">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-zinc-900 rounded-lg border border-zinc-800">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-6">
            <Filter className="h-8 w-8 text-zinc-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">No photos found</h3>
          <p className="text-zinc-400 mb-6">
            No photos match your current filters. Try adjusting your search or category selection.
          </p>
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white"
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
  )
}

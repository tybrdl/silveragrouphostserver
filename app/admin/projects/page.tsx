"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, MoreVertical, Trash2, Edit, Eye, Clock, Calendar } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample project data
const sampleProjects = [
  {
    id: 1,
    title: "Sustainable Energy Plant",
    category: "engineering",
    status: "Published",
    createdAt: "2023-10-15",
    updatedAt: "2023-10-16",
  },
  {
    id: 2,
    title: "Next-Gen Aircraft Components",
    category: "aerospace",
    status: "Published",
    createdAt: "2023-10-12",
    updatedAt: "2023-10-14",
  },
  {
    id: 3,
    title: "Eco-Friendly Corporate Headquarters",
    category: "architecture",
    status: "Published",
    createdAt: "2023-10-10",
    updatedAt: "2023-10-11",
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    category: "engineering",
    status: "Draft",
    createdAt: "2023-10-08",
    updatedAt: "2023-10-09",
  },
  {
    id: 5,
    title: "Satellite Communication Network",
    category: "aerospace",
    status: "Draft",
    createdAt: "2023-10-05",
    updatedAt: "2023-10-07",
  },
  {
    id: 6,
    title: "Urban Mixed-Use Development",
    category: "architecture",
    status: "Published",
    createdAt: "2023-10-03",
    updatedAt: "2023-10-04",
  },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"all" | "engineering" | "aerospace" | "architecture">("all")

  // Filter projects based on search query and category
  const filteredProjects = sampleProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="text-zinc-400">Manage projects for the website</p>
        </div>
        <Button className="bg-zinc-100 text-black hover:bg-zinc-200">
          <Plus className="mr-2 h-4 w-4" />
          Create New Project
        </Button>
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
            All Projects
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
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-700 text-white"
          />
        </div>
      </div>

      {/* Projects Table */}
      {filteredProjects.length > 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
                <TableHead className="text-zinc-400">Title</TableHead>
                <TableHead className="text-zinc-400">Category</TableHead>
                <TableHead className="text-zinc-400">Status</TableHead>
                <TableHead className="text-zinc-400">Created</TableHead>
                <TableHead className="text-zinc-400">Updated</TableHead>
                <TableHead className="text-zinc-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id} className="border-zinc-800 hover:bg-zinc-800/50">
                  <TableCell className="font-medium text-white">{project.title}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-zinc-800 text-zinc-300">
                      {project.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "Published"
                          ? "bg-green-900/20 text-green-400"
                          : "bg-yellow-900/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.createdAt}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{project.updatedAt}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
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
                        <DropdownMenuSeparator className="bg-zinc-800" />
                        <DropdownMenuItem className="text-red-500 hover:bg-zinc-800 hover:text-red-500 cursor-pointer">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-16 bg-zinc-900 rounded-lg border border-zinc-800">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-6">
            <Filter className="h-8 w-8 text-zinc-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">No projects found</h3>
          <p className="text-zinc-400 mb-6">
            No projects match your current filters. Try adjusting your search or category selection.
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

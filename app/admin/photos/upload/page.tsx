"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload, X, Check } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PhotoUploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    altText: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle category selection
  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
      alert("Please select a file to upload")
      return
    }

    if (!formData.title || !formData.category) {
      alert("Please fill in all required fields")
      return
    }

    setUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setUploading(false)
      setUploadSuccess(true)

      // Reset form after 2 seconds
      setTimeout(() => {
        setSelectedFile(null)
        setPreview(null)
        setUploadSuccess(false)
        setFormData({
          title: "",
          description: "",
          category: "",
          tags: "",
          altText: "",
        })
      }, 2000)
    }, 2000)
  }

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0] || null
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  // Remove selected file
  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/photos">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Upload Photo</h1>
          <p className="text-zinc-400">Add a new photo to the website</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Area */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Photo Upload</CardTitle>
            <CardDescription className="text-zinc-400">Select or drag and drop an image file</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                preview ? "border-zinc-700" : "border-zinc-800"
              }`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {preview ? (
                <div className="space-y-4">
                  <div className="relative aspect-video mx-auto overflow-hidden rounded-lg">
                    <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                    <button
                      onClick={handleRemoveFile}
                      className="absolute top-2 right-2 bg-black/70 rounded-full p-1 hover:bg-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-sm text-zinc-400">
                    {selectedFile?.name} ({Math.round(selectedFile?.size / 1024)} KB)
                  </div>
                </div>
              ) : (
                <div className="py-12 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-medium">Click to upload or drag and drop</p>
                      <p className="text-zinc-500 text-sm mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    </div>
                  </div>
                </div>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
          </CardContent>
        </Card>

        {/* Photo Details Form */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Photo Details</CardTitle>
            <CardDescription className="text-zinc-400">Enter information about the photo</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter photo title"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter photo description"
                  className="bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600 min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={handleCategoryChange} required>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="aerospace">Aerospace</SelectItem>
                    <SelectItem value="architecture">Architecture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas"
                  className="bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="altText">Alt Text</Label>
                <Input
                  id="altText"
                  name="altText"
                  value={formData.altText}
                  onChange={handleInputChange}
                  placeholder="Enter alternative text for accessibility"
                  className="bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600"
                />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-zinc-100 text-black hover:bg-zinc-200"
                  disabled={uploading || uploadSuccess || !selectedFile}
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                      Uploading...
                    </>
                  ) : uploadSuccess ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Uploaded Successfully
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

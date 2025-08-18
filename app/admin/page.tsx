"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, ImageIcon, FileText, Users, Eye, Upload, Clock } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="text-zinc-400">Welcome to the Silvera Group admin panel.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-zinc-400 text-sm font-normal">Total Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">24</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-zinc-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-zinc-400 text-sm font-normal">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">12</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <FileText className="h-5 w-5 text-zinc-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-zinc-400 text-sm font-normal">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">5</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Users className="h-5 w-5 text-zinc-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-zinc-400 text-sm font-normal">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">1,254</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Eye className="h-5 w-5 text-zinc-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription className="text-zinc-400">Latest actions on the site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-zinc-800">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    {i % 3 === 0 ? (
                      <Upload className="h-4 w-4 text-zinc-300" />
                    ) : i % 2 === 0 ? (
                      <Eye className="h-4 w-4 text-zinc-300" />
                    ) : (
                      <FileText className="h-4 w-4 text-zinc-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">
                      {i % 3 === 0 ? "New photo uploaded" : i % 2 === 0 ? "Project viewed" : "Project updated"}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {i % 3 === 0
                        ? "Engineering Division"
                        : i % 2 === 0
                          ? "Aerospace Division"
                          : "Architecture Division"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock className="h-3 w-3" />
                    <span>{i}h ago</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
            <CardDescription className="text-zinc-400">Visits over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-80">
            <div className="flex flex-col items-center justify-center text-zinc-400">
              <BarChart className="h-16 w-16 mb-4" />
              <p>Traffic analytics will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

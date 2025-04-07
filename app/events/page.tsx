"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ChevronDown, Filter, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const events = [
    {
      id: 1,
      title: "Solana India Tour 2025",
      date: "24th February 2025",
      location: "Manipal University Jaipur",
      category: "Workshop",
      year: "2025",
      image: "",
      description:
        "Hands-on experience with Solana development, networking, and career opportunities in blockchain.",
      link: "/events/devfest-2023",
    },
    {
      id: 2,
      title: "SuperMove Tour: Build on Aptos Dappathon",
      date: "November 16, 2025",
      location: "Manipal University Jaipur",
      category: "Hackathon",
      year: "2025",
      image: "",
      description:
        "A 12-hous Hackathon to learn, build, and Earn on Aptos",
      link: "/events/android-study-jam",
    },
    {
      id: 3,
      title: "Build with AI - Tech Winter",
      date: "December 29, 2024",
      location: "Online",
      category: "study-jam",
      year: "2024",
      image: "",
      description:
        "A build with AI, join us for an engaging session of learning.",
      link: "/events/cloud-study-jam",
    },
    {
      id: 4,
      title: "Plinth'25 - Collaborative GDG Event",
      date: "January 24, 2025",
      location: "LNMIIT Jaipur",
      category: "Annual Event",
      year: "2025",
      image: "",
      description:
        "Plinth, the annual techno-management fest of LNMIIT Jaipur.",
      link: "/events/flutter-forward",
    },
  ]

  // Filter events based on search query and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter
    const matchesYear = yearFilter === "all" || event.year === yearFilter

    return matchesSearch && matchesCategory && matchesYear
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore past and upcoming events organized by GDG Manipal University Jaipur
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="md:hidden">
                <Button variant="outline" className="w-full" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>
              <div className="hidden md:flex gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="study-jam">Study Jam</SelectItem>
                    <SelectItem value="bootcamp">Bootcamp</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filters */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="md:hidden">
              <CollapsibleContent className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Category</label>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="study-jam">Study Jam</SelectItem>
                        <SelectItem value="bootcamp">Bootcamp</SelectItem>
                        <SelectItem value="hackathon">Hackathon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Year</label>
                    <Select value={yearFilter} onValueChange={setYearFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </motion.div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} variants={item} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-4">No events found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("all")
                  setYearFilter("all")
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Don't miss out on our upcoming events! Join our community to receive notifications about future
                workshops, conferences, and meetups.
              </p>
              <Button asChild size="lg">
                <Link href="/#join">Join Our Community</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    location: string
    category: string
    year: string
    image: string
    description: string
    link: string
  }
  variants: any
}

function EventCard({ event, variants }: EventCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="relative h-48">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            {event.category.charAt(0).toUpperCase() + event.category.slice(1).replace("-", " ")}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-muted-foreground mb-6 line-clamp-3">{event.description}</p>
          <Button asChild variant="outline" size="sm">
            <Link href={event.link}>View Details</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}


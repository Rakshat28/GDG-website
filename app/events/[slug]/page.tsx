"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock event data - in a real app, this would come from a database
const eventsData = {
  "devfest-2023": {
    title: "DevFest 2023",
    date: "November 18, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium, Manipal University Jaipur",
    attendees: 350,
    image: "/event1.svg",
    description:
      "DevFest is GDG's annual community-led developer event that offers speaker sessions across multiple product areas, all-day hack-a-thons, codelabs, and more. DevFest 2023 at Manipal University Jaipur brought together developers, designers, and tech enthusiasts for a day of learning, networking, and fun.",
    highlights: [
      "Keynote on the future of Google technologies and AI",
      "Technical sessions on Android, Flutter, Web, Cloud, and Machine Learning",
      "Hands-on codelabs and workshops",
      "Panel discussion on career opportunities in tech",
      "Networking session with industry professionals",
      "Exciting prizes and Google swag for participants",
    ],
    speakers: [
      {
        name: "Rahul Sharma",
        role: "Lead Organizer, GDG Manipal University Jaipur",
        image: "/team1.svg",
      },
      {
        name: "Priya Patel",
        role: "Technical Lead, GDG Manipal University Jaipur",
        image: "/team2.svg",
      },
      {
        name: "Sundar Kumar",
        role: "Android Developer Advocate, Google",
        image: "/speaker1.svg",
      },
      {
        name: "Meera Joshi",
        role: "Cloud Engineer, Google",
        image: "/speaker2.svg",
      },
    ],
    gallery: ["/gallery1.svg", "/gallery2.svg", "/gallery3.svg", "/gallery4.svg"],
  },
  "android-study-jam": {
    title: "Android Study Jam",
    date: "February 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "CS Department, Manipal University Jaipur",
    attendees: 120,
    image: "/event2.svg",
    description:
      "Android Study Jams are community-organized study groups for people learning Android development. This series of hands-on workshops covered Android app development with Kotlin, from basics to publishing your app on Google Play Store.",
    highlights: [
      "Introduction to Android Studio and Kotlin",
      "Building UI with Jetpack Compose",
      "Working with data and APIs",
      "Implementing Material Design components",
      "Publishing apps to Google Play Store",
    ],
    speakers: [
      {
        name: "Amit Kumar",
        role: "Event Coordinator, GDG Manipal University Jaipur",
        image: "/team3.svg",
      },
      {
        name: "Arjun Reddy",
        role: "Mobile Development Lead, GDG Manipal University Jaipur",
        image: "/team7.svg",
      },
    ],
    gallery: ["/gallery5.svg", "/gallery6.svg", "/gallery7.svg"],
  },
  "cloud-study-jam": {
    title: "Google Cloud Study Jam",
    date: "March 22, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Online",
    attendees: 180,
    image: "/event3.svg",
    description:
      "This virtual study jam provided participants with hands-on experience using Google Cloud Platform. Through guided labs and expert assistance, attendees learned about cloud computing concepts, Google Cloud services, and how to deploy applications to the cloud.",
    highlights: [
      "Introduction to Google Cloud Platform",
      "Hands-on labs with Qwiklabs",
      "Building and deploying a simple web application",
      "Working with Cloud Storage, Firestore, and Cloud Functions",
      "Free Google Cloud credits for participants",
      "Opportunity to earn Google Cloud skill badges",
    ],
    speakers: [
      {
        name: "Sneha Gupta",
        role: "Design Lead, GDG Manipal University Jaipur",
        image: "/team4.svg",
      },
      {
        name: "Vikram Singh",
        role: "Cloud Engineer, Google",
        image: "/speaker2.svg",
      },
    ],
    gallery: ["/gallery8.svg", "/gallery9.svg"],
  },
  "flutter-forward": {
    title: "Flutter Forward Extended",
    date: "September 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "CS Department, Manipal University Jaipur",
    attendees: 150,
    image: "/event4.svg",
    description:
      "Flutter Forward Extended was a community-led event that brought the excitement and content of the Flutter Forward event to our local community. We explored the latest updates in the Flutter framework and learned how to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    highlights: [
      "Overview of Flutter 3.0 and latest features",
      "Building responsive UIs with Flutter",
      "State management techniques",
      "Integration with Firebase and other Google services",
      "Hands-on coding sessions and challenges",
    ],
    speakers: [
      {
        name: "Arjun Reddy",
        role: "Mobile Development Lead, GDG Manipal University Jaipur",
        image: "/team7.svg",
      },
      {
        name: "Neha Verma",
        role: "Flutter Developer, GDG Manipal University Jaipur",
        image: "/team6.svg",
      },
    ],
    gallery: ["/gallery5.svg", "/gallery6.svg", "/gallery7.svg"],
  },
  "women-techmakers-iwd": {
    title: "Women Techmakers IWD 2023",
    date: "March 8, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium, Manipal University Jaipur",
    attendees: 200,
    image: "/event5.svg",
    description:
      "Women Techmakers is Google's program for celebrating International Women's Day and creating visibility, community, and resources for women in technology. Our event featured inspiring talks from women in tech, workshops on Google technologies, and networking opportunities.",
    highlights: [
      "Keynote on diversity and inclusion in tech",
      "Panel discussion with women leaders in technology",
      "Technical workshops on various Google technologies",
      "Career development and mentorship sessions",
      "Networking opportunities with industry professionals",
    ],
    speakers: [
      {
        name: "Priya Patel",
        role: "Technical Lead, GDG Manipal University Jaipur",
        image: "/team2.svg",
      },
      {
        name: "Sneha Gupta",
        role: "Design Lead, GDG Manipal University Jaipur",
        image: "/team4.svg",
      },
      {
        name: "Meera Joshi",
        role: "Community Manager, GDG Manipal University Jaipur",
        image: "/team8.svg",
      },
      {
        name: "Dr. Ananya Mishra",
        role: "Faculty Advisor, Manipal University Jaipur",
        image: "/team10.svg",
      },
    ],
    gallery: ["/gallery1.svg", "/gallery2.svg", "/gallery3.svg", "/gallery4.svg"],
  },
}

export default function EventDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching event data
    setTimeout(() => {
      setEvent(eventsData[slug] || null)
      setLoading(false)
    }, 500)
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="container py-16 md:py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Event Not Found</h1>
        <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/events">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-green-50/80 dark:from-blue-950/30 dark:to-green-950/30 -z-10" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold tracking-tight mb-6">{event.title}</h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{event.attendees} Attendees</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <a href="#gallery">View Gallery</a>
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden aspect-video"
            >
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">About the Event</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p>{event.description}</p>
                </div>

                <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
                <ul className="space-y-2 mb-8">
                  {event.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary h-6 w-6 text-sm mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Gallery Section */}
              <motion.div
                id="gallery"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <h2 className="text-3xl font-bold mb-6">Event Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${event.title} Gallery Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Speakers</h2>
                <div className="space-y-4">
                  {event.speakers.map((speaker: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{speaker.name}</h3>
                          <p className="text-sm text-muted-foreground">{speaker.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold mb-6">Interested in Future Events?</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Join our community to stay updated on upcoming events and workshops.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/#join">Join Our Community</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore More Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out other events organized by GDG Manipal University Jaipur
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(eventsData)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, relatedEvent]: [string, any]) => (
                  <Card key={key} className="overflow-hidden h-full transition-all hover:shadow-md">
                    <div className="relative h-48">
                      <Image
                        src={relatedEvent.image || "/placeholder.svg"}
                        alt={relatedEvent.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{relatedEvent.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{relatedEvent.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{relatedEvent.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/events/${key}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild>
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


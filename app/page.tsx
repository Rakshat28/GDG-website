"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setSubmitted(true)
    setEmail("")
  }

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-3xl blur-3xl opacity-50" />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Image src="/gdg-logo.png" alt="GDG Logo" width={120} height={120} className="mb-6" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Google Developer Groups
            <span className="block text-primary">Manipal University Jaipur</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect, learn, and grow with a community of developers passionate about Google technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="#join">
                Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/events">Explore Events</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">What is GDG Manipal University Jaipur?</h2>
              <p className="text-muted-foreground mb-6">
                Google Developer Groups (GDGs) are community-led groups that provide a platform for developers to learn
                about Google technologies and tools through events, workshops, and meetups.
              </p>
              <p className="text-muted-foreground mb-6">
                GDG Manipal University Jaipur is a local chapter focused on building a strong developer community within
                the university and surrounding areas.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Learn Together</h3>
                    <p className="text-sm text-muted-foreground">Participate in workshops, codelabs, and study jams</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Build Together</h3>
                    <p className="text-sm text-muted-foreground">Collaborate on projects and hackathons</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Grow Together</h3>
                    <p className="text-sm text-muted-foreground">Network with industry professionals and peers</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-xl blur-xl opacity-70 -z-10" />
              <Image
                src="/community.svg"
                alt="Community Illustration"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Events
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Check out some of our recent events and activities
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={item}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="" alt="Solana India Tour" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>24th February 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Solana India Tour 2025</h3>
                  <p className="text-muted-foreground mb-4">
                  Hands-on experience with Solana development, networking, and career opportunities in blockchain.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="" alt="SuperMove Tour" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>November 16, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">SuperMove Tour: Build on Aptos Dappathon</h3>
                  <p className="text-muted-foreground mb-4">
                  A 12-hous Hackathon to learn, build, and Earn on Aptos
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src="" alt="Tech Winter Break" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>December 29, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build with AI - Tech Winter</h3>
                  <p className="text-muted-foreground mb-4">
                  A build with AI, join us for an engaging session of learning.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild variant="outline">
              <Link href="/events">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
  <div className="container">
    <div className="text-center mb-12">
      <motion.h2
        className="text-3xl font-bold tracking-tight mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>
      <motion.p
        className="text-muted-foreground max-w-2xl mx-auto mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Discover the passionate individuals who make our community thrive
      </motion.p>
      
      {/* Team Illustration with CTA */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full max-w-md h-64 mb-8">
          <Image 
            src="/team-illustration.svg" // Replace with your team illustration
            alt="Team illustration"
            fill
            className="object-contain"
          />
        </div>
        <Button asChild size="lg">
          <Link href="/team">
            Meet the Full Team <Users className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </div>
</section>


      {/* Join Community Section */}
      <section id="join" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Community</h2>
              <p className="text-muted-foreground">
                Be part of our WhatsApp group to stay updated on upcoming events, workshops, and opportunities.
              </p>
            </motion.div>

            <motion.div
              className="bg-background rounded-xl p-8 shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  className="text-center py-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Thank You for Joining!</h3>
                  <p className="text-muted-foreground mb-4">
                    You'll receive an invitation link to our WhatsApp group shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>Submit Another Email</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll send you an invitation link to join our WhatsApp group.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-sm font-medium">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select your interest
                      </option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full">
                    Join the Community
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about GDG Manipal University Jaipur
            </motion.p>
          </div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a Google Developer Group?</AccordionTrigger>
                <AccordionContent>
                  Google Developer Groups (GDGs) are community-led groups that provide a platform for developers to
                  learn about Google technologies and tools through events, workshops, and meetups. These groups are
                  open to anyone interested in Google's developer technology.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I join GDG Manipal University Jaipur?</AccordionTrigger>
                <AccordionContent>
                  You can join our community by filling out the form in the "Join Our Community" section on our website.
                  You'll receive an invitation link to our WhatsApp group where we share updates about upcoming events
                  and activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to be a student at Manipal University Jaipur to join?</AccordionTrigger>
                <AccordionContent>
                  No, GDG Manipal University Jaipur is open to everyone interested in Google technologies, regardless of
                  whether you're a student at the university or not. We welcome developers, designers, and tech
                  enthusiasts from all backgrounds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are the events free to attend?</AccordionTrigger>
                <AccordionContent>
                  Yes, most of our events are free to attend. Occasionally, some specialized workshops or conferences
                  might have a nominal fee to cover operational costs, but we always strive to make our events as
                  accessible as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I become a speaker at GDG events?</AccordionTrigger>
                <AccordionContent>
                  We're always looking for speakers who are passionate about technology! If you're interested in giving
                  a talk or conducting a workshop, please reach out to us through our contact form or email us at
                  contact@gdgmuj.org with your proposal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I volunteer with GDG Manipal University Jaipur?</AccordionTrigger>
                <AccordionContent>
                  We welcome volunteers who want to help organize and run our events. Volunteering is a great way to
                  network, gain experience, and contribute to the tech community. Contact us to learn about current
                  volunteering opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("core")

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

  const coreTeam = [
    {
      id: 1,
      name: "Rakshat Pratap Singh",
      role: "Outreach Co-Lead",
      image: "/team1.svg",
      bio: "Computer Science student passionate about building communities and sharing knowledge about Google technologies.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 2,
      name: "Yashika Yadav",
      role: "Outreach Co-Lead",
      image: "/team2.svg",
      bio: "Enthusiastic about community building and connecting people through technology.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 3,
      name: "Sahil Kulhari",
      role: "Outreach Co-Lead",
      image: "/team3.svg",
      bio: "Tech enthusiast focused on expanding community reach and creating impactful connections.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 4,
      name: "Prayash Pratim Baruah",
      role: "Marketing Co-Lead",
      image: "/team4.svg",
      bio: "Loves to conduct workshops and create engaging marketing content.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 5,
      name: "Dhriti Joshi",
      role: "Marketing Co-Lead",
      image: "/team5.svg",
      bio: "Creative marketer with a passion for tech community growth and brand development.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 6,
      name: "Utpala Venkata Pavan Kumar",
      role: "Web Dev Co-Lead",
      image: "/team6.svg",
      bio: "Web development enthusiast focused on creating seamless digital experiences for the community.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 7,
      name: "Karthikey Kushagra",
      role: "Web Dev Co-Lead",
      image: "/team7.svg",
      bio: "Passionate about building innovative web solutions and mentoring fellow developers.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 8,
      name: "Vivek Kumar Garg",
      role: "Web Dev Co-Lead",
      image: "/team8.svg",
      bio: "Full-stack developer dedicated to creating robust web platforms for community engagement.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 9,
      name: "Yash Mishra",
      role: "Media Co-Lead",
      image: "/team9.svg",
      bio: "Creative media professional focused on capturing and showcasing community events.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      id: 10,
      name: "Prathmesh",
      role: "Media Co-Lead",
      image: "/team10.svg",
      bio: "Visual storyteller dedicated to creating compelling content for the community.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
  ]
  const executiveTeam = [
    {
      id: 1,
      name: "Rakshika Ranjan",
      role: "Lead",
      image: "/team1.svg",
      bio: "Overall lead of GDG Muj, responsible for guiding the team and setting community vision.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:rakshika@gdgmuj.org",
      },
    },
    {
      id: 2,
      name: "Vardan Aggarwal",
      role: "Outreach Lead",
      image: "/team2.svg",
      bio: "Specializes in building partnerships and expanding the community's reach to new audiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:vardan@gdgmuj.org",
      },
    },
    {
      id: 3,
      name: "Aditya Verma",
      role: "Operations Lead",
      image: "/team3.svg",
      bio: "Ensures smooth operations and logistics for all GDG Muj events and activities.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:aditya@gdgmuj.org",
      },
    },
    {
      id: 4,
      name: "Tia Jain",
      role: "Marketing Lead",
      image: "/team4.svg",
      bio: "Leads all marketing initiatives and brand development for GDG Muj.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:tia@gdgmuj.org",
      },
    },
    {
      id: 5,
      name: "Satwik Sarthak",
      role: "Web Development Lead",
      image: "/team5.svg",
      bio: "Frontend specialist focused on creating engaging web experiences for the community.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:satwik@gdgmuj.org",
      },
    },
    {
      id: 6,
      name: "Rakesh Mali",
      role: "Web Development Lead",
      image: "/team6.svg",
      bio: "Full-stack developer who leads web development initiatives and workshops.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:rakesh@gdgmuj.org",
      },
    },
    {
      id: 7,
      name: "Vikram Singh",
      role: "Web Development Specialist",
      image: "/team7.svg",
      bio: "Frontend developer specializing in React and Next.js. Conducts web development workshops for beginners.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "mailto:vikram@gdgmuj.org",
      },
    },
  ]

  const facultyAdvisors = [
    {
      id: 9,
      name: "Dr. Harish Sharma",
      role: "Faculty Advisor",
      image: "/team9.svg",
      bio: "Professor of Computer Science AI/ML with expertise in AI and Machine Learning. Provides guidance and mentorship to the GDG team.",
      social: {
        linkedin: "#",
        email: "",
      },
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals behind GDG Manipal University Jaipur who work tirelessly to build and
              nurture our tech community.
            </p>
          </motion.div>

          <Tabs defaultValue="core" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex justify-between w-full max-w-xl mx-auto bg-gray-100 p-2 rounded-lg shadow-sm">
            <TabsTrigger value="executive">Executive</TabsTrigger>
            <TabsTrigger value="core">Core Team</TabsTrigger>
            <TabsTrigger value="working">Working Team</TabsTrigger>
            <TabsTrigger value="faculty">Faculty Advisor</TabsTrigger>
          </TabsList>


            <TabsContent value="executive">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                animate={activeTab === "executive" ? "show" : "hidden"}
              >
                {executiveTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} variants={item} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="core">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                animate={activeTab === "core" ? "show" : "hidden"}
              >
                {coreTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} variants={item} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="working">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                animate={activeTab === "working" ? "show" : "hidden"}
              >
                {executiveTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} variants={item} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="faculty">
              <motion.div
                className="flex justify-center"
                variants={container}
                initial="hidden"
                animate={activeTab === "faculty" ? "show" : "hidden"}
              >
                {facultyAdvisors.map((member) => (
                  <TeamMemberCard key={member.id} member={member} variants={item} />
                ))}
              </motion.div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-8">
                Interested in becoming a part of GDG Manipal University Jaipur? We're always looking for passionate
                individuals to join our team as volunteers and organizers.
              </p>
              <Button asChild size="lg">
                <Link href="/#join">Apply to Volunteer</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    image: string
    bio: string
    social: {
      twitter?: string
      linkedin?: string
      github?: string
      email: string
    }
  }
  variants: any
}

function TeamMemberCard({ member, variants }: TeamMemberProps) {
  return (
    <motion.div variants={variants}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="pt-6 px-6">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/20">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
        </div>
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          <p className="text-sm mt-2">{member.bio}</p>
          <div className="flex justify-center gap-3 mt-4">
            {member.social.twitter && (
              <Link href={member.social.twitter}>
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            {member.social.linkedin && (
              <Link href={member.social.linkedin}>
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            {member.social.github && (
              <Link href={member.social.github}>
                <Github className="h-5 w-5" />
              </Link>
            )}
            {member.social.email && (
              <Link href={member.social.email}>
                <Mail className="h-5 w-5" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

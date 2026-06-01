"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  color: string
  borderColor: string
  image?: string
  liveDemo?: string
}

const projects: Project[] = [
  {
    title: 'MedFind',
    category: 'Healthcare Platform',
    description: 'MedFind is a MERN stack healthcare platform helping users locate medicines and nearby pharmacies with available stock during emergencies.',
    features: ['Medicine Search', 'Pharmacy Locator', 'Real-Time Availability', 'Emergency Access', 'User-Friendly Interface'],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    image: '/medfind-preview.png',
    liveDemo: 'https://medfind-red.vercel.app/',
  },
  {
    title: 'TrailBliss',
    category: 'Tour Planning Platform',
    description: 'A travel planning and tour package management platform that helps users discover destinations, customize trips, and manage bookings seamlessly.',
    features: ['Tour Packages', 'Destination Discovery', 'Trip Planning', 'Authentication', 'Admin Dashboard'],
    technologies: ['React.js', 'Django', 'Python', 'MongoDB'],
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    image: '/trailbliss-preview.png',
    liveDemo: 'https://trailblisss.netlify.app/',
  },
  {
    title: 'SmartCivic',
    category: 'Smart Civic Complaint Management System',
    description: 'A smart civic complaint management platform enabling citizens to report public issues and monitor resolution status efficiently.',
    features: ['Complaint Registration', 'Complaint Tracking', 'Admin Dashboard', 'Real-Time Updates', 'Status Monitoring'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    color: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
    image: '/smartcivic-preview.png',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`glass group overflow-hidden rounded-2xl border ${project.borderColor}`}
    >
      {/* Project Image */}
      <div className={`relative aspect-video bg-gradient-to-br ${project.color}`}>
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <ImageIcon className="mx-auto mb-2 h-12 w-12 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground/50">Project Screenshot</p>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          {project.liveDemo && (
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {project.category}
        </span>
        
        <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
        
        <p className="mb-4 text-sm text-muted-foreground text-pretty">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 lg:py-32" ref={ref}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore my recent work and the technologies I&apos;ve used to build them
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

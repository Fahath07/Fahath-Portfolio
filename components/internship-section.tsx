"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Code, Users, GitBranch, CheckCircle } from 'lucide-react'

const internships = [
  {
    id: 1,
    position: "MERN Stack Intern",
    company: "CodeHub Nexus",
    duration: "December 2025",
    icon: Briefcase,
    responsibilities: [
      "Developed full-stack web applications",
      "Built REST APIs with Express.js",
      "Implemented CRUD operations",
      "Designed responsive user interfaces",
      "Collaborated using Git and GitHub",
      "Debugged and optimized application performance"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "GitHub"],
  }
]

function InternshipCard({ internship, index }: { internship: typeof internships[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="glass group overflow-hidden rounded-2xl border border-primary/30 p-8"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20">
            <internship.icon className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{internship.position}</h3>
            <p className="text-lg text-primary font-semibold">{internship.company}</p>
            <p className="text-sm text-muted-foreground mt-1">{internship.duration}</p>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="mb-3 text-lg font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-secondary" />
          Responsibilities & Achievements
        </h4>
        <ul className="space-y-2">
          {internship.responsibilities.map((responsibility, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-secondary shrink-0" />
              <span>{responsibility}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="mb-3 text-lg font-semibold text-foreground flex items-center gap-2">
          <Code className="h-5 w-5 text-accent" />
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {internship.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function InternshipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="internships" className="relative py-20 lg:py-32" ref={ref}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Internship Experience</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional experience developing real-world applications and improving technical skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <InternshipCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

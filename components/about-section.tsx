"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Lightbulb, Database } from 'lucide-react'

const highlights = [
  { icon: Code, label: 'Web Development', color: 'text-primary' },
  { icon: Lightbulb, label: 'UI/UX Design', color: 'text-secondary' },
  { icon: Database, label: 'Database Management', color: 'text-accent' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative aspect-square">
              {/* Background decorations */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-primary/30" />
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-secondary/30" />
              
              {/* Main image container */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Fahath Al Salam"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                className="glass absolute -bottom-6 -right-6 rounded-xl p-4"
              >
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-secondary">
              Computer Science Engineering Student
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                I am <span className="font-semibold text-foreground">Fahath Al Salam</span>, a Computer Science and Engineering 
                student at <span className="text-primary">Sri Eshwar College of Engineering</span> with a strong passion 
                for Full Stack Development and creating technology-driven solutions for real-world problems.
              </p>
              
              <p className="text-pretty">
                My interests include web development, UI/UX design, database management, and AI-powered applications. 
                I enjoy building scalable and user-friendly applications that deliver meaningful impact.
              </p>
              
              <p className="text-pretty">
                I have developed projects such as <span className="text-primary">MedFind</span>, 
                <span className="text-secondary"> SmartCivic</span>, and <span className="text-accent"> TrailBliss</span>, 
                focusing on healthcare accessibility, civic issue management, and travel planning solutions.
              </p>
            </div>

            {/* Skill highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass flex items-center gap-2 rounded-full px-4 py-2"
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

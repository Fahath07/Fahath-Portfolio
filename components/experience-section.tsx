"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const journeySteps = [
  { title: 'Started with HTML & CSS', description: 'Built my first web pages', color: 'bg-primary' },
  { title: 'Learned JavaScript', description: 'Added interactivity to websites', color: 'bg-secondary' },
  { title: 'Explored Python Programming', description: 'Discovered backend development', color: 'bg-accent' },
  { title: 'Built Full Stack Applications', description: 'Combined frontend and backend', color: 'bg-primary' },
  { title: 'Learned Django & Flask', description: 'Mastered Python web frameworks', color: 'bg-secondary' },
  { title: 'Database Integration', description: 'Worked with MongoDB & MySQL', color: 'bg-accent' },
  { title: 'UI/UX Design with Figma', description: 'Enhanced design skills', color: 'bg-primary' },
  { title: 'Modern Full Stack Development', description: 'React.js and advanced patterns', color: 'bg-secondary' },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            My path from beginner to full stack developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className={`absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full ${step.color} md:left-1/2`}
                />

                {/* Content */}
                <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass inline-block rounded-xl p-4"
                  >
                    <span className={`inline-block h-2 w-2 rounded-full ${step.color} mb-2`} />
                    <h3 className="font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

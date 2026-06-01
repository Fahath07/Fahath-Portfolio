"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react'

const educationData = [
  {
    id: 1,
    institution: "Sri Eshwar College of Engineering",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "Expected Graduation: 2028",
    location: "Coimbatore, Tamil Nadu",
    icon: GraduationCap,
    highlights: ['Full Stack Development', 'Web Technologies', 'Database Systems', 'Software Engineering', 'AI/ML Basics'],
    type: "college"
  },
  {
    id: 2,
    institution: "Veveaham Matric Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC) - Computer Science",
    period: "2022 - 2024",
    percentage: "90.3%",
    location: "Dharapuram, Tamil Nadu",
    icon: School,
    highlights: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
    type: "school"
  },
  {
    id: 3,
    institution: "Veveaham Matric Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "2021 - 2022",
    percentage: "83.6%",
    location: "Dharapuram, Tamil Nadu",
    icon: School,
    highlights: ['Mathematics', 'Science', 'Social Studies', 'English', 'Tamil'],
    type: "school"
  }
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-1/2 md:block" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
                  className="absolute left-8 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2 md:block"
                />

                {/* Spacer for alternating layout */}
                <div className="hidden w-1/2 md:block" />

                {/* Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/50">
                    {/* Header with gradient */}
                    <div className={`p-6 ${edu.type === 'college' ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20' : 'bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${edu.type === 'college' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                          <edu.icon className={`h-7 w-7 ${edu.type === 'college' ? 'text-primary' : 'text-secondary'}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {edu.institution}
                          </h3>
                          <p className={edu.type === 'college' ? 'text-secondary' : 'text-accent'}>
                            {edu.degree}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        {edu.percentage && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="text-sm font-semibold text-accent">{edu.percentage}</span>
                          </div>
                        )}
                      </div>

                      {/* Academic highlights */}
                      <div className="mt-4">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          {edu.type === 'college' ? 'Academic Focus' : 'Subjects'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((item, idx) => (
                            <motion.span
                              key={item}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
                              className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

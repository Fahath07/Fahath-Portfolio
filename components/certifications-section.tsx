"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen } from 'lucide-react'

interface Certification {
  id: number
  title: string
  issuer: string
  issuerIcon: string
  color: string
  borderColor: string
  bgColor: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Design Thinking – A Primer",
    issuer: "NPTEL",
    issuerIcon: "📚",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/10",
  },
  {
    id: 2,
    title: "HTML, CSS & Bootstrap Certification Course for Beginners",
    issuer: "Udemy",
    issuerIcon: "🎓",
    color: "text-orange-400",
    borderColor: "border-orange-400/30",
    bgColor: "bg-orange-400/10",
  },
  {
    id: 3,
    title: "C Programming Basics",
    issuer: "LinkedIn Learning",
    issuerIcon: "💼",
    color: "text-cyan-400",
    borderColor: "border-cyan-400/30",
    bgColor: "bg-cyan-400/10",
  },
  {
    id: 4,
    title: "The Complete Introduction to C++ Programming",
    issuer: "Udemy",
    issuerIcon: "🎓",
    color: "text-green-400",
    borderColor: "border-green-400/30",
    bgColor: "bg-green-400/10",
  },
  {
    id: 5,
    title: "Mastering Data Structures Using C",
    issuer: "Udemy",
    issuerIcon: "🎓",
    color: "text-purple-400",
    borderColor: "border-purple-400/30",
    bgColor: "bg-purple-400/10",
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass group relative overflow-hidden rounded-xl border ${cert.borderColor} p-6 transition-all`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 ${cert.bgColor}`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Award className={`h-6 w-6 ${cert.color}`} />
            <span className="text-2xl">{cert.issuerIcon}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {cert.title}
        </h3>

        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <p className={`text-sm font-semibold ${cert.color}`}>
            {cert.issuer}
          </p>
        </div>
      </div>

      {/* Accent line */}
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-${cert.color} to-transparent`} />
    </motion.div>
  )
}

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="relative py-20 lg:py-32" ref={ref}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional certifications and courses completed to enhance technical expertise
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

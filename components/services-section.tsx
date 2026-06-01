"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Layers, Palette, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive and modern websites that work flawlessly across all devices.',
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    borderColor: 'hover:border-primary/50',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Developing complete frontend and backend solutions with seamless integration.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/20',
    borderColor: 'hover:border-secondary/50',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive user experiences that delight and engage users.',
    color: 'text-accent',
    bgColor: 'bg-accent/20',
    borderColor: 'hover:border-accent/50',
  },
  {
    icon: Zap,
    title: 'Problem Solving',
    description: 'Creating technology-driven solutions for real-world challenges.',
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    borderColor: 'hover:border-primary/50',
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            What I can do for you
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass group rounded-2xl border border-transparent p-6 transition-colors ${service.borderColor}`}
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${service.bgColor} transition-transform group-hover:scale-110`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

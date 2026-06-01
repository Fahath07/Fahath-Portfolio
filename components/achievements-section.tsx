"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Code, Heart, Lightbulb, BookOpen, Zap, Target } from 'lucide-react'

interface Achievement {
  icon: React.ComponentType<any>
  title: string
  description?: string
  color: string
  bgColor: string
  type: 'hackathon' | 'achievement'
}

const achievements: Achievement[] = [
  { 
    icon: Trophy, 
    title: 'Top 10 Finalist in GenAI Hackathon 2025', 
    description: 'Among 150+ teams',
    color: 'text-yellow-400', 
    bgColor: 'bg-yellow-400/20',
    type: 'hackathon'
  },
  { 
    icon: Target, 
    title: '12th Finalist in Melinia\'26 Hackathon', 
    description: 'CIT Coimbatore - 240+ teams',
    color: 'text-blue-400', 
    bgColor: 'bg-blue-400/20',
    type: 'hackathon'
  },
  { icon: Code, title: 'Developed Multiple Full Stack Projects', color: 'text-primary', bgColor: 'bg-primary/20', type: 'achievement' },
  { icon: Heart, title: 'Built Healthcare, Tourism, and Civic Solutions', color: 'text-secondary', bgColor: 'bg-secondary/20', type: 'achievement' },
  { icon: Lightbulb, title: 'Strong Problem Solving Skills', color: 'text-accent', bgColor: 'bg-accent/20', type: 'achievement' },
  { icon: BookOpen, title: 'Continuous Learner', color: 'text-secondary', bgColor: 'bg-secondary/20', type: 'achievement' },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 lg:py-32" ref={ref}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass flex flex-col gap-3 rounded-2xl p-6 ${achievement.type === 'hackathon' ? 'ring-1 ring-yellow-400/50' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${achievement.bgColor}`}>
                  <achievement.icon className={`h-7 w-7 ${achievement.color}`} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-pretty">{achievement.title}</p>
                  {achievement.description && (
                    <p className={`text-sm mt-1 ${achievement.color}`}>
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
              {achievement.type === 'hackathon' && (
                <div className="flex items-center gap-2 ml-16">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs font-semibold text-yellow-400">Featured Achievement</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

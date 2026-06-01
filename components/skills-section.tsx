"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Wrench, 
  Palette, 
  Brain, 
  MessageSquare,
  BookOpen,
  Trophy,
  Languages
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  color: string
  borderColor: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="h-6 w-6" />,
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: <Globe className="h-6 w-6" />,
    color: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
    skills: ['HTML5', 'CSS3', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6" />,
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    color: 'from-chart-4/20 to-chart-4/5',
    borderColor: 'border-chart-4/30',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Core Subjects',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    skills: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'AIML'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-6 w-6" />,
    color: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
    skills: ['Git', 'GitHub', 'AWS', 'Vercel', 'Postman', 'Power BI', 'Jupyter Notebook'],
  },
  {
    title: 'Design & Editing',
    icon: <Palette className="h-6 w-6" />,
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    skills: ['Figma', 'Adobe After Effects', 'CapCut'],
  },
]

const codingProfiles = [
  { platform: 'LeetCode', stat: '150+ Problems Solved', icon: <Trophy className="h-5 w-5" /> },
  { platform: 'SkillRack', stat: '1000+ Problems Solved', icon: <Trophy className="h-5 w-5" /> },
  { platform: 'SkillRack Badges', stat: '200+ Bronze Badges', icon: <Trophy className="h-5 w-5" /> },
]

const softSkills = [
  'Leadership',
  'Team Collaboration',
  'Communication',
  'Critical Thinking',
  'Adaptability',
  'Time Management',
  'Problem Solving',
]

const languagesKnown = ['English', 'Tamil', 'Hindi']

const interests = [
  'Full Stack Development',
  'UI/UX Design',
  'Artificial Intelligence',
  'Software Engineering',
  'Automobile Technology',
  'Travel & Exploration',
]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`glass rounded-2xl p-6 border ${category.borderColor} bg-gradient-to-br ${category.color}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/50 text-primary">
          {category.icon}
        </div>
        <h3 className="text-lg font-bold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 + skillIndex * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-background/60 px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-primary/20 hover:text-primary"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-20 lg:py-32" ref={ref}>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Technologies and tools I work with to build amazing projects
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Coding Profiles</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 rounded-xl bg-primary/10 p-4 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  {profile.icon}
                </div>
                <span className="font-semibold">{profile.platform}</span>
                <span className="text-sm text-muted-foreground">{profile.stat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <Brain className="h-6 w-6 text-secondary" />
            <h3 className="text-xl font-bold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2 font-medium text-secondary"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Known & Interests */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Languages Known */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <Languages className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold">Languages Known</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {languagesKnown.map((lang, index) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-accent/30 bg-accent/10 px-5 py-2 font-medium text-accent"
                >
                  {lang}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <MessageSquare className="h-6 w-6 text-chart-4" />
              <h3 className="text-xl font-bold">Interests</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-chart-4/30 bg-chart-4/10 px-5 py-2 font-medium text-chart-4"
                >
                  {interest}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

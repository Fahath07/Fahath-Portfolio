"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Download, Mail, Briefcase, GraduationCap, Code, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Code, label: '3+ Major Projects', color: 'text-primary' },
  { icon: Briefcase, label: 'Full Stack Developer', color: 'text-secondary' },
  { icon: GraduationCap, label: 'CSE Student', color: 'text-accent' },
  { icon: Sparkles, label: 'Open to Opportunities', color: 'text-primary' },
]

function Particles() {
  const [particles, setParticles] = useState<Array<{
    left: string; top: string; width: string; height: string;
    background: string; opacity: number; animationDelay: string;
  }>>([])

  useEffect(() => {
    setParticles(
      [...Array(20)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 8 + 4}px`,
        height: `${Math.random() * 8 + 4}px`,
        background: i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#38BDF8' : '#22C55E',
        opacity: Math.random() * 0.5 + 0.1,
        animationDelay: `${Math.random() * 5}s`,
      }))
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((style, i) => (
        <motion.div key={i} className="particle" style={style} />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="animated-gradient relative min-h-screen overflow-hidden">
      <Particles />
      
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-lg text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl"
            >
              <span className="gradient-text">Fahath Al Salam</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-lg text-secondary sm:text-xl"
            >
              Computer Science Engineering Student | Full Stack Developer | Problem Solver
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 max-w-2xl text-muted-foreground text-pretty"
            >
              Passionate about building scalable web applications, designing intuitive user experiences, 
              and solving real-world problems through technology. Currently pursuing Computer Science 
              and Engineering while expanding my expertise in modern full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <a href="/fahath-resume.pdf" download="Fahath_Al_Salam_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass flex flex-col items-center gap-2 rounded-xl p-4"
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <span className="text-center text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-secondary/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-accent/30"
              />
              
              {/* Center content */}
              <div className="glass absolute inset-12 flex items-center justify-center rounded-full">
                <div className="text-center">
                  <Code className="mx-auto mb-2 h-16 w-16 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">Full Stack</p>
                  <p className="gradient-text text-lg font-bold">Developer</p>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glass absolute -right-4 top-1/4 rounded-xl p-3"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="glass absolute -left-4 top-1/2 rounded-xl p-3"
              >
                <span className="text-2xl">🐍</span>
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="glass absolute bottom-1/4 right-0 rounded-xl p-3"
              >
                <span className="text-2xl">🗄️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

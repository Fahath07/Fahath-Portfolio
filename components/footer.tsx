"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Fahath07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/fahath-al-salam-a67968326', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fahathalsalam@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-2 text-xl font-bold gradient-text">Fahath Al Salam</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Computer Science Engineering Student | Full Stack Developer
            </p>
            <p className="text-sm italic text-secondary">
              &quot;Building Smart Solutions for Real-World Challenges&quot;
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-wrap gap-4 md:justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border-t border-border pt-8 text-center"
        >
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            © 2026 Fahath Al Salam. Made with <Heart className="h-4 w-4 text-primary" /> All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

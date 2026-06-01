"use client"

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { ProjectsSection } from '@/components/projects-section'
import { InternshipSection } from '@/components/internship-section'
import { AchievementsSection } from '@/components/achievements-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ExperienceSection } from '@/components/experience-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { LoadingScreen } from '@/components/loading-screen'

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <InternshipSection />
        <AchievementsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

import { Suspense, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import NeuralField from './NeuralField.jsx'
import { profile } from '../data/portfolioData.js'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-grid bg-grid-cell pt-28 pb-8"
    >
      {/* 3D ambient background — drifts and scales as you scroll past the hero */}
      <motion.div className="absolute inset-0 opacity-70" style={{ y: bgY, scale: bgScale }}>
        <Suspense fallback={null}>
          <NeuralField />
        </Suspense>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-void/60 to-void pointer-events-none" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center w-full"
      >
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mono-tag text-xs text-verified border border-verified/30 rounded-full px-3 py-1 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-verified animate-blink" />
             OPEN TO WORK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink text-glow"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-cyan font-display"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-muted leading-relaxed"
          >
            {profile.tagline} Real-time forgery detection, modular AI systems, and full-stack
            apps — engineered from Hosur, Tamil Nadu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="bg-cyan text-void font-semibold px-6 py-3 rounded-md hover:bg-cyan/90 transition-colors mono-tag text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-ink/20 text-ink px-6 py-3 rounded-md hover:border-cyan/60 hover:text-cyan transition-colors mono-tag text-sm"
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-cyan transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Photo slot — the "scan target" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80"
        >
          <div className="absolute inset-0 rounded-full border border-cyan/30 animate-floaty" />
          <div className="absolute -inset-3 rounded-full border border-dashed border-cyan/15" />
          <div className="absolute inset-0 rounded-full overflow-hidden bg-surface2 card-border">
            {!imgError ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-display text-5xl text-cyan/60">
                {initials}
              </div>
            )}
            {/* scanline sweep over the photo */}
            <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-cyan/0 via-cyan/25 to-cyan/0 animate-scanline" />
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-cyan transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown className="animate-floaty" size={22} />
      </a>
    </section>
  )
}

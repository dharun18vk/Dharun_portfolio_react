import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import Tilt from './Tilt.jsx'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" label="Stack" title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06} className="h-full">
              <Tilt strength={6} className="h-full">
                <div className="card-border rounded-lg p-5 bg-surface/60 h-full hover:border-cyan/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-medium text-ink">{s.group}</h3>
                  </div>
                  <div className="h-1.5 w-full bg-void rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-dim to-cyan rounded-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="mono-tag text-[11px] text-muted border border-muted/20 rounded px-2 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

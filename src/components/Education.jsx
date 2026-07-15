import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import Tilt from './Tilt.jsx'
import { education, achievements } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="relative py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10">
        <div>
          <SectionHeader index="05" label="Background" title="Education" />
          <div className="relative pl-6 border-l border-cyan/20 space-y-6">
            {education.map((ed) => (
              <Reveal key={ed.degree}>
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,217,255,0.5)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-ink">{ed.degree}</h3>
                    <span className="mono-tag text-xs text-cyan">{ed.period}</span>
                  </div>
                  <p className="text-muted mt-1">{ed.school}</p>
                  <p className="mono-tag text-xs text-verified mt-1">{ed.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p className="mono-tag text-xs text-muted uppercase tracking-[0.2em] mb-6 mt-1">
            Achievements
          </p>
          <div className="space-y-4">
            {achievements.map((a) => (
              <Reveal key={a.title}>
                <Tilt strength={6}>
                  <div className="card-border rounded-lg p-4 bg-surface/50">
                    <p className="text-ink font-medium text-sm">{a.title}</p>
                    <p className="text-muted text-xs mt-1">{a.detail}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" label="Track record" title="Experience" />
        <div className="space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="card-border rounded-lg p-6 bg-surface/50 hover:border-cyan/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl font-medium text-ink">{e.role}</h3>
                  <span className="mono-tag text-xs text-cyan">{e.period}</span>
                </div>
                <p className="text-muted mb-4">{e.org}</p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-cyan mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

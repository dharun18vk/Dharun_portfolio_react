import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import Tilt from './Tilt.jsx'
import { profile } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="relative py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" label="Profile" title="About" />
        <Reveal delay={0.1} className="grid md:grid-cols-3 gap-8">
          <p className="md:col-span-2 text-muted leading-relaxed text-lg">{profile.summary}</p>
          <Tilt strength={6}>
            <div className="card-border rounded-lg p-5 bg-surface/50 mono-tag text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-muted">Location</span>
                <span className="text-ink text-right">{profile.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Focus</span>
                <span className="text-cyan text-right">AI / ML Systems</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Status</span>
                <span className="text-verified text-right">Open to Work</span>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}

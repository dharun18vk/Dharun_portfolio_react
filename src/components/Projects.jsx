import SectionHeader from './SectionHeader.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" label="Case files" title="Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title + i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

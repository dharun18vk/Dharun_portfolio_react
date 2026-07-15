import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Tilt from './Tilt.jsx'

export default function ProjectCard({ project, index }) {
  if (!project.active) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="rounded-lg border border-dashed border-muted/30 p-6 flex flex-col items-center justify-center text-center min-h-[280px]"
      >
        <span className="mono-tag text-xs text-muted uppercase tracking-widest mb-2">
          Slot {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-muted text-sm">{project.description}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Tilt strength={9} className="h-full">
        <div className="card-border rounded-lg p-6 bg-surface/60 hover:border-cyan/50 transition-[border-color] duration-200 flex flex-col min-h-[280px] h-full">
          <div className="flex items-start justify-between mb-3">
            <span className="mono-tag text-[10px] uppercase tracking-widest text-cyan border border-cyan/30 rounded px-2 py-0.5">
              {project.tag}
            </span>
          </div>

          <h3 className="font-display text-lg font-medium text-ink mb-2">{project.title}</h3>
          <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

          <ul className="space-y-1.5 mb-4 flex-1">
            {project.points?.slice(0, 2).map((p) => (
              <li key={p} className="flex gap-2 text-xs text-muted">
                <span className="text-magenta mt-0.5">/</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-3 border-t border-ink/10">
            <div className="flex flex-wrap gap-1.5">
              {project.tools?.map((t) => (
                <span key={t} className="mono-tag text-[10px] text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-ink transition-colors"
                  title="View Source Code"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

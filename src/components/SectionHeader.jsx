import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, label, title }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 mb-7">
        <span className="mono-tag text-xs text-cyan/70 border border-cyan/30 rounded px-2 py-1">
          {index}
        </span>
        <div>
          <p className="mono-tag text-xs text-muted uppercase tracking-[0.2em] mb-1">{label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan/30 to-transparent ml-2" />
      </div>
    </Reveal>
  )
}

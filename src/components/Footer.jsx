import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-cyan/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 mono-tag text-xs text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React · Three.js · Framer Motion</span>
      </div>
    </footer>
  )
}

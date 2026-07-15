import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { Link } from "react-router-dom";

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
  { href: "/resume", label: "Resume" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/80 backdrop-blur-md border-b border-cyan/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-ink tracking-tight">
          DK<span className="text-cyan">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.href === "/resume" ? (
                <Link
                  to="/resume"
                  className="mono-tag text-xs uppercase tracking-wider text-muted hover:text-cyan transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="mono-tag text-xs uppercase tracking-wider text-muted hover:text-cyan transition-colors"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden md:flex" />
          <button
            className="md:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden bg-void/95 border-t border-cyan/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="mono-tag text-sm uppercase tracking-wider text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  )
}

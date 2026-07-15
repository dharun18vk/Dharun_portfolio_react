import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import Tilt from './Tilt.jsx'
import { profile } from '../data/portfolioData.js'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="06" label="Connect" title="Get in Touch" />
        <Reveal>
          <Tilt strength={4} className="max-w-2xl mx-auto">
            <div className="card-border rounded-lg p-8 sm:p-12 bg-surface/60 text-center">
              <p className="text-muted mb-8">
                Have a role, a project, or an idea worth building? I'm currently open to work and
                happy to talk.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mono-tag text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 border border-ink/15 rounded-md py-3 hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  <Mail size={16} /> {profile.email}
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-center gap-2 border border-ink/15 rounded-md py-3 hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  <Phone size={16} /> {profile.phone}
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-ink/15 rounded-md py-3 hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-ink/15 rounded-md py-3 hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>

              {/* Resume Button */}
              <div className="mt-5">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full rounded-md border border-cyan/50 bg-cyan/10 px-5 py-3 hover:bg-cyan/20 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText size={18} />
                    <span className="font-medium">Resume</span>
                  </div>
                  <Link
                      to="/resume"
                      className="flex items-center justify-center gap-2 border border-cyan rounded-lg px-5 py-3 hover:bg-cyan/10"
                  >
                      <FileText size={18}/>
                      View Resume
                  </Link>
                </a>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}

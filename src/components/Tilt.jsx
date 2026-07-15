import { useRef, useState } from 'react'

export default function Tilt({ children, className = '', strength = 8 }) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)')

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(
      `perspective(900px) rotateX(${py * -strength}deg) rotateY(${px * strength}deg) translateZ(4px)`
    )
  }

  function handleLeave() {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor-hover
      style={{ transform, transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
      className={className}
    >
      {children}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const dotX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 })
  const dotY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 })
  const ringX = useSpring(x, { stiffness: 140, damping: 18 })
  const ringY = useSpring(y, { stiffness: 140, damping: 18 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target.closest('a, button, [data-cursor-hover]')
      setHovering(!!el)
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.documentElement.classList.add('custom-cursor-active')

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Core dot — snaps to the pointer */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicking ? 6 : 7,
          height: clicking ? 6 : 7,
          backgroundColor: 'rgb(var(--c-cyan))',
        }}
      />
      {/* Trailing scan ring — lags slightly, expands on hover, ticks like a rangefinder */}
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full border"
        animate={{
          width: hovering ? 54 : clicking ? 22 : 32,
          height: hovering ? 54 : clicking ? 22 : 32,
          opacity: hovering ? 0.95 : 0.55,
          rotate: hovering ? 90 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgb(var(--c-cyan))',
          borderWidth: 1,
          borderStyle: hovering ? 'dashed' : 'solid',
        }}
      />
    </>
  )
}

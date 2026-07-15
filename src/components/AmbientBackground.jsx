import { Suspense, useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from '../context/ThemeContext.jsx'

function DriftShape({ position, speed, rotSpeed, color, shape }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * rotSpeed * 0.35
    ref.current.rotation.y += delta * rotSpeed * 0.55
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4
  })

  return (
    <mesh ref={ref} position={position}>
      {shape}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.24} />
    </mesh>
  )
}

// Reads page scroll and turns it into 3D motion — the whole ambient
// scene slowly rotates and drifts as the person scrolls, so the 3D
// feel keeps unfolding rather than sitting static behind the content.
function ScrollGroup({ children }) {
  const groupRef = useRef()
  const scrollRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = max > 0 ? window.scrollY / max : 0
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return
    const s = scrollRef.current
    groupRef.current.rotation.y = s * Math.PI * 0.6
    groupRef.current.rotation.z = s * 0.25
    groupRef.current.position.y = s * 2.5
  })

  return <group ref={groupRef}>{children}</group>
}

function Shapes({ theme }) {
  const primary = theme === 'dark' ? '#00D9FF' : '#00819E'
  const accent = theme === 'dark' ? '#FF2E63' : '#C5184E'

  const shapes = useMemo(
    () => [
      { position: [-4.6, 2.4, -3], speed: 0.4, rotSpeed: 0.5, color: primary, shape: <icosahedronGeometry args={[0.85, 0]} /> },
      { position: [4.9, -1.6, -4], speed: 0.32, rotSpeed: 0.4, color: accent, shape: <torusGeometry args={[0.65, 0.22, 8, 24]} /> },
      { position: [-3.6, -3.2, -2.5], speed: 0.55, rotSpeed: 0.6, color: primary, shape: <octahedronGeometry args={[0.65, 0]} /> },
      { position: [3.9, 3.1, -5], speed: 0.25, rotSpeed: 0.3, color: accent, shape: <torusKnotGeometry args={[0.42, 0.14, 64, 8]} /> },
      { position: [0.2, -2.6, -6], speed: 0.2, rotSpeed: 0.25, color: primary, shape: <icosahedronGeometry args={[1, 0]} /> },
      { position: [-0.5, 4, -4.5], speed: 0.3, rotSpeed: 0.45, color: accent, shape: <octahedronGeometry args={[0.5, 0]} /> },
      { position: [5.4, 4.2, -6], speed: 0.28, rotSpeed: 0.35, color: primary, shape: <torusGeometry args={[0.5, 0.16, 8, 20]} /> },
      { position: [-5.2, -0.5, -5], speed: 0.22, rotSpeed: 0.5, color: accent, shape: <octahedronGeometry args={[0.55, 0]} /> },
    ],
    [primary, accent]
  )

  return (
    <ScrollGroup>
      {shapes.map((s, i) => (
        <DriftShape key={i} {...s} />
      ))}
    </ScrollGroup>
  )
}

export default function AmbientBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-80" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Shapes theme={theme} />
        </Suspense>
      </Canvas>
    </div>
  )
}

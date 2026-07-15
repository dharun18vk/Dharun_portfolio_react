import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext.jsx'

// Generates a sphere-distributed point cloud that behaves like a
// CNN feature map / face-mesh — nodes drift, and nearby nodes are
// linked with faint edges, echoing the network he actually builds.
function NodeField({ count = 260 }) {
  const pointsRef = useRef()
  const linesRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const { theme } = useTheme()

  const dotColor = theme === 'dark' ? '#00D9FF' : '#00819E'
  const lineColor = theme === 'dark' ? '#0891A8' : '#7FBFD1'
  const dotOpacity = theme === 'dark' ? 0.85 : 0.6
  const lineOpacity = theme === 'dark' ? 0.25 : 0.18

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.2 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.65
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const linePositions = []
    const maxDist = 1.1
    for (let i = 0; i < count; i++) {
      const ax = positions[i * 3]
      const ay = positions[i * 3 + 1]
      const az = positions[i * 3 + 2]
      let links = 0
      for (let j = i + 1; j < count && links < 2; j++) {
        const bx = positions[j * 3]
        const by = positions[j * 3 + 1]
        const bz = positions[j * 3 + 2]
        const d = Math.hypot(ax - bx, ay - by, az - bz)
        if (d < maxDist) {
          linePositions.push(ax, ay, az, bx, by, bz)
          links++
        }
      }
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    return geo
  }, [positions, count])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.06
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mouse.current.y * 0.25,
        0.02
      )
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = pointsRef.current.rotation.y
      linesRef.current.rotation.x = pointsRef.current.rotation.x
    }
    mouse.current.x = state.pointer.x
    mouse.current.y = state.pointer.y
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color={dotColor} transparent opacity={dotOpacity} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color={lineColor} transparent opacity={lineOpacity} />
      </lineSegments>
    </group>
  )
}

export default function NeuralField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute !inset-0"
    >
      <NodeField />
    </Canvas>
  )
}

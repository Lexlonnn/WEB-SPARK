"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  rotation: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 30, // 30-70px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 5, // 0-5s
      rotation: Math.random() * 360,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-[0.08]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" className="text-purple-400" />
            <g stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-400">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  )
}

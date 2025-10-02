"use client"

import { useEffect, useState } from "react"

// Slide 1: Building blocks assembling
export function BuildingBlocksAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-chart-1 to-chart-2 rounded-lg"
            style={{
              animation: `float-in 1s ease-out ${i * 0.2}s both`,
              left: `${(i % 2) * 60}px`,
              top: `${Math.floor(i / 2) * 60}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Slide 2: Speed indicators
export function SpeedIndicatorsAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute left-0 h-2 bg-gradient-to-r from-chart-1 to-transparent rounded-full"
            style={{
              top: `${i * 30}px`,
              width: `${(i + 1) * 30}px`,
              animation: `speed-line 1.5s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Slide 3: Component boxes assembling
export function ComponentBoxesAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border-4 border-chart-1 rounded-lg animate-pulse-slow" />
        <div className="absolute top-4 left-4 right-4 h-12 bg-chart-2/50 rounded animate-slide-down" />
        <div className="absolute bottom-4 left-4 right-4 h-12 bg-chart-1/50 rounded animate-slide-up" />
        <div className="absolute top-20 left-4 right-4 bottom-20 bg-chart-2/30 rounded animate-fade-in-delay-2" />
      </div>
    </div>
  )
}

// Slide 4: Code morphing
export function CodeMorphAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48 font-mono text-4xl font-bold">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-chart-1 animate-morph-1">{"<"}</span>
          <span className="text-chart-2 animate-morph-2">{"/"}</span>
          <span className="text-chart-1 animate-morph-3">{">"}</span>
        </div>
      </div>
    </div>
  )
}

// Slide 5: Setup checklist
export function SetupChecklistAnimation() {
  const [checks, setChecks] = useState([false, false, false])

  useEffect(() => {
    const timers = [
      setTimeout(() => setChecks([true, false, false]), 500),
      setTimeout(() => setChecks([true, true, false]), 1000),
      setTimeout(() => setChecks([true, true, true]), 1500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="space-y-4">
        {checks.map((checked, i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
              checked ? "border-chart-1 bg-chart-1/20" : "border-muted"
            }`}
          >
            {checked && <span className="text-chart-1 text-2xl animate-scale-in">✓</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Slide 6: Component nesting
export function ComponentNestingAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border-4 border-chart-1 rounded-lg animate-pulse-slow" />
        <div className="absolute inset-4 border-4 border-chart-2 rounded-lg animate-pulse-slow-delay-1" />
        <div className="absolute inset-8 border-4 border-chart-1 rounded-lg animate-pulse-slow-delay-2" />
      </div>
    </div>
  )
}

// Slide 7: JSX transformation
export function JSXTransformAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="text-6xl font-bold">
          <span className="text-chart-1 inline-block animate-bounce-slow">{"{"}</span>
          <span className="text-chart-2 inline-block animate-bounce-slow-delay-1">JS</span>
          <span className="text-chart-1 inline-block animate-bounce-slow-delay-2">{"}"}</span>
        </div>
      </div>
    </div>
  )
}

// Slide 8: Props flow
export function PropsFlowAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-chart-1 rounded-lg" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-chart-2 rounded-lg" />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 w-2 h-2 bg-chart-1 rounded-full"
            style={{
              animation: `flow-down 2s ease-in-out ${i * 0.3}s infinite`,
              top: "20%",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Slide 9: State counter
export function StateCounterAnimation() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c + 1) % 10)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="text-8xl font-bold text-chart-1 animate-scale-pulse">{count}</div>
      </div>
    </div>
  )
}

// Slide 10: Click ripple
export function ClickRippleAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-chart-1 rounded-full animate-ripple" />
        <div className="absolute w-16 h-16 bg-chart-2 rounded-full animate-ripple-delay-1" />
        <div className="absolute w-16 h-16 bg-chart-1 rounded-full animate-ripple-delay-2" />
      </div>
    </div>
  )
}

// Slide 11: Hooks connecting
export function HooksConnectAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path
            d="M 50 100 Q 100 50 150 100"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-chart-1"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ animation: "draw-path 2s ease-out infinite" }}
          />
          <circle cx="50" cy="100" r="8" className="fill-chart-1 animate-pulse-slow" />
          <circle cx="150" cy="100" r="8" className="fill-chart-2 animate-pulse-slow-delay-1" />
        </svg>
      </div>
    </div>
  )
}

// Slide 12: Router navigation
export function RouterNavigationAnimation() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % 3)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="space-y-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-32 h-12 rounded-lg border-2 transition-all duration-300 ${
              i === active ? "border-chart-1 bg-chart-1/20 scale-110" : "border-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Slide 13: Styling palette
export function StylingPaletteAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2"
            style={{
              animation: `color-pulse 2s ease-in-out ${i * 0.1}s infinite`,
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Slide 14: Advantages checkmarks
export function AdvantagesAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="text-9xl text-chart-1 animate-bounce-slow">✓</div>
      </div>
    </div>
  )
}

// Slide 15: Celebration
export function CelebrationAnimation() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
      <div className="relative w-48 h-48">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-chart-1 to-chart-2 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              animation: `confetti-${i % 4} 2s ease-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

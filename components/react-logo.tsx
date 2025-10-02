"use client"

export default function ReactLogo() {
  return (
    <div className="relative w-32 h-32 animate-float">
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" className="text-primary" />
        <g stroke="currentColor" strokeWidth="1" fill="none" className="text-primary">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </div>
  )
}

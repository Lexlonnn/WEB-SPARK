"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import FloatingParticles from "@/components/floating-particles"
import CounterMUI from "@/components/counter-mui"
import {
  BuildingBlocksAnimation,
  SpeedIndicatorsAnimation,
  ComponentBoxesAnimation,
  CodeMorphAnimation,
  SetupChecklistAnimation,
  ComponentNestingAnimation,
  JSXTransformAnimation,
  PropsFlowAnimation,
  StateCounterAnimation,
  ClickRippleAnimation,
  HooksConnectAnimation,
  RouterNavigationAnimation,
  StylingPaletteAnimation,
  AdvantagesAnimation,
  CelebrationAnimation,
} from "@/components/slide-animations"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Introduction to React.js",
    subtitle: "Building Efficient User Interfaces",
    footer: "Your Name, Date, Organization",
    animation: BuildingBlocksAnimation,
  },
  {
    id: 2,
    type: "content",
    title: "Introduction",
    subtitle: "What is React?",
    points: [
      "React is a JavaScript library for building user interfaces",
      "Created by Facebook (Meta)",
      "Makes websites dynamic and interactive",
      "Analogy: React is like LEGO blocks for building websites",
    ],
    code: "function Hello() {\n  return <h1>Hello, World!</h1>;\n}",
    animation: SpeedIndicatorsAnimation,
    demoLink: "/topics/what-is-react",
  },
  {
    id: 3,
    type: "content",
    title: "Why React?",
    points: [
      "Traditional HTML/JS is hard to scale",
      "React uses reusable components",
      "Virtual DOM → updates only what changes (fast)",
      "Strong community and tools",
      "Analogy: Like changing one bulb instead of rewiring the whole house",
    ],
    animation: ComponentBoxesAnimation,
  },
  {
    id: 4,
    type: "content",
    title: "Key Features of React",
    points: [
      "Component-Based → build UI with blocks",
      "Virtual DOM → efficient updates",
      "One-Way Data Flow → predictable",
      "JSX → write HTML in JS",
    ],
    code: "function App() {\n  return (\n    <div>\n      <Header />\n      <Footer />\n    </div>\n  );\n}",
    animation: CodeMorphAnimation,
  },
  {
    id: 5,
    type: "content",
    title: "Setting Up React",
    subtitle: "Getting Started",
    points: [
      "Install Node.js & npm",
      "Create a project with Create React App",
      "Folder structure: src/, public/, node_modules/",
    ],
    code: "npx create-react-app my-app\ncd my-app\nnpm start",
    animation: SetupChecklistAnimation,
  },
  {
    id: 6,
    type: "content",
    title: "React Components",
    subtitle: "UI Building Blocks",
    points: ["Functional components → modern way", "Class components → older style", "Components = UI building blocks"],
    code: "function Welcome() {\n  return <h1>Welcome to React</h1>;\n}",
    animation: ComponentNestingAnimation,
    demoLink: "/topics/components",
  },
  {
    id: 7,
    type: "content",
    title: "JSX (JavaScript XML)",
    subtitle: "Write HTML inside JavaScript",
    points: ["Lets you write HTML inside JS", "Must return a single root element", "Can use JS inside {}"],
    code: 'function Greeting() {\n  const name = "Sanjana";\n  return <h1>Hello {name}</h1>;\n}',
    animation: JSXTransformAnimation,
    demoLink: "/topics/jsx",
  },
  {
    id: 8,
    type: "content",
    title: "Props in React",
    subtitle: "Component Inputs",
    points: [
      "Props = inputs to components",
      "Make components reusable",
      "Read-only",
      "Analogy: Props are like ingredients in a recipe",
    ],
    code: 'function User(props) {\n  return <h2>Hello {props.name}</h2>;\n}\n\n<User name="Sanjana" />',
    animation: PropsFlowAnimation,
    demoLink: "/topics/props",
  },
  {
    id: 9,
    type: "content",
    title: "State in React",
    subtitle: "Component Data Management",
    points: [
      "State = data a component controls",
      "State changes → re-render UI",
      "Use useState hook",
      "Analogy: Like a scoreboard that updates automatically",
    ],
    code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Add\n      </button>\n    </div>\n  );\n}',
    animation: StateCounterAnimation,
  },
  {
    id: 10,
    type: "demo",
    title: "State Demo: Counter Example",
    subtitle: "See State in Action",
    code: 'import { useState } from "react";\n\nconst Counter = () => {\n  const [b, setb] = useState(0);\n  \n  const adder = () => {\n    setb(b => b + 1);\n  };\n  \n  const subtractor = () => {\n    setb(b => b - 1);\n  };\n  \n  return (\n    <div>\n      <h3>Count: {b}</h3>\n      <button onClick={adder}>+</button>\n      <button onClick={subtractor}>-</button>\n    </div>\n  );\n};',
    animation: StateCounterAnimation,
  },
  {
    id: 11,
    type: "content",
    title: "Event Handling",
    subtitle: "Responding to User Actions",
    points: ["React events use camelCase: onClick, onChange", "Use functions to handle events"],
    code: 'function ClickMe() {\n  function handleClick() {\n    alert("Button clicked!");\n  }\n  return (\n    <button onClick={handleClick}>\n      Click Me\n    </button>\n  );\n}',
    animation: ClickRippleAnimation,
    demoLink: "/topics/events",
  },
  {
    id: 12,
    type: "content",
    title: "React Hooks",
    subtitle: "Modern React Features",
    points: ["useState → manage state", "useEffect → side effects (APIs, timers)", "useContext → global state"],
    code: 'import { useEffect } from "react";\n\nfunction Timer() {\n  useEffect(() => {\n    console.log("Component loaded");\n  }, []);\n  return <h1>Timer Example</h1>;\n}',
    animation: HooksConnectAnimation,
    demoLink: "/topics/hooks",
  },
  {
    id: 13,
    type: "content",
    title: "React Router (Navigation)",
    subtitle: "Single Page Applications",
    points: ["React for SPAs (Single Page Apps)", "Navigate without page reload"],
    code: 'import { BrowserRouter, Routes, Route }\n  from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about"\n          element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
    animation: RouterNavigationAnimation,
  },
  {
    id: 14,
    type: "content",
    title: "Styling in React",
    subtitle: "Making Your App Beautiful",
    points: [
      'Inline styles: <div style={{color: "blue"}}>Hello</div>',
      "CSS Modules: Scoped styles",
      "Material UI: Ready-made styled components",
    ],
    animation: StylingPaletteAnimation,
    demoLink: "/topics/styling",
  },
  {
    id: 15,
    type: "content",
    title: "Advantages of React",
    points: [
      "Reusable components → faster dev",
      "High performance with Virtual DOM",
      "Large community & ecosystem",
      "React Native → mobile apps",
      "Analogy: React is like a Swiss Army knife → multipurpose and efficient",
    ],
    animation: AdvantagesAnimation,
  },
  {
    id: 16,
    type: "conclusion",
    title: "Conclusion & Q/A",
    points: [
      "Recap: Components, Props, State, Hooks, Router",
      "React = efficient, scalable, popular",
      "Start with small projects (To-Do app, Counter)",
      "Open for questions",
    ],
    footer: "Thank you! Questions?",
    animation: CelebrationAnimation,
  },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [showOverview, setShowOverview] = useState(false)
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "o" || e.key === "O") {
        e.preventDefault()
        setShowOverview(!showOverview)
      } else if (e.key === "?" || e.key === "/") {
        e.preventDefault()
        setShowKeyboardHelp(!showKeyboardHelp)
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, showOverview, showKeyboardHelp])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection("forward")
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection("backward")
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "forward" : "backward")
    setCurrentSlide(index)
    setShowOverview(false)
  }

  const slide = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100
  const SlideAnimation = slide.animation

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-purple-100 via-purple-50 to-cyan-50 text-foreground flex flex-col relative overflow-hidden">
      <FloatingParticles />

      <div className="absolute top-20 left-20 w-8 h-8 text-purple-300 opacity-60 animate-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div
        className="absolute top-40 right-32 w-6 h-6 text-cyan-300 opacity-50 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 right-20 w-10 h-10 text-purple-200 opacity-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div
        className="absolute top-1/2 left-10 w-7 h-7 text-cyan-200 opacity-50 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-purple-200/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8 md:p-16 relative z-10">
        {SlideAnimation && <SlideAnimation />}

        <div
          key={currentSlide}
          className={`max-w-5xl w-full ${direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"}`}
        >
          {slide.type === "title" && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-purple-600 font-semibold animate-fade-in-delay-1">
                {slide.subtitle}
              </p>
              {slide.footer && <p className="text-lg text-gray-600 mt-16 animate-fade-in-delay-2">{slide.footer}</p>}
            </div>
          )}

          {slide.type === "content" && (
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                {slide.subtitle && <p className="text-xl md:text-2xl text-purple-600 font-medium">{slide.subtitle}</p>}
              </div>

              <ul className="space-y-4 text-xl md:text-2xl">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-purple-500 mt-1 text-2xl font-bold">▸</span>
                    <span className="text-pretty text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>

              {slide.code && (
                <div className="mt-8 bg-purple-50/80 border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors duration-300 animate-fade-in-delay-3 shadow-lg shadow-purple-100">
                  <pre className="text-lg md:text-xl font-mono text-purple-700 overflow-x-auto">
                    <code>{slide.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {slide.type === "demo" && (
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                {slide.subtitle && <p className="text-xl md:text-2xl text-purple-600 font-medium">{slide.subtitle}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-fade-in-delay-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Code</h3>
                  <div className="bg-purple-50/80 border-2 border-purple-200 rounded-lg p-6 shadow-lg shadow-purple-100">
                    <pre className="text-base md:text-lg font-mono text-purple-700 overflow-x-auto">
                      <code>{slide.code}</code>
                    </pre>
                  </div>
                </div>

                <div className="animate-fade-in-delay-2">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Output</h3>
                  <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-300 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                    <CounterMUI />
                  </div>
                </div>
              </div>
            </div>
          )}

          {slide.type === "conclusion" && (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-balance mb-8 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h2>

              <ul className="space-y-4 text-xl md:text-2xl mb-12">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-cyan-500 mt-1 text-2xl font-bold">▸</span>
                    <span className="text-pretty text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>

              {slide.footer && (
                <p className="text-3xl md:text-4xl font-bold text-center mt-16 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent animate-fade-in-delay-4">
                  {slide.footer}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-purple-200 backdrop-blur-sm bg-white/80 p-4 md:p-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="lg"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <Dialog open={showOverview} onOpenChange={setShowOverview}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-100 hover:text-purple-700 transition-all duration-200"
              >
                <Grid3x3 className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Slide Overview</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {slides.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(index)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                      index === currentSlide
                        ? "border-purple-500 bg-purple-50"
                        : "border-purple-200 hover:border-purple-400"
                    }`}
                  >
                    <div className="text-xs text-purple-600 mb-2">Slide {index + 1}</div>
                    <div className="font-semibold text-sm line-clamp-2 text-gray-800">{s.title}</div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-400"
                    : index < currentSlide
                      ? "w-2 bg-purple-300"
                      : "w-2 bg-purple-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-purple-700 font-mono text-sm bg-purple-100 px-3 py-1 rounded-full font-semibold">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2 hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-200 hover:scale-105"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

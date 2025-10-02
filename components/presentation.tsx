"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Keyboard, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Introduction to React.js",
    subtitle: "Building Efficient User Interfaces",
    footer: "Your Name, Date, Organization",
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
  },
  {
    id: 6,
    type: "content",
    title: "React Components",
    subtitle: "UI Building Blocks",
    points: ["Functional components → modern way", "Class components → older style", "Components = UI building blocks"],
    code: "function Welcome() {\n  return <h1>Welcome to React</h1>;\n}",
  },
  {
    id: 7,
    type: "content",
    title: "JSX (JavaScript XML)",
    subtitle: "Write HTML inside JavaScript",
    points: ["Lets you write HTML inside JS", "Must return a single root element", "Can use JS inside {}"],
    code: 'function Greeting() {\n  const name = "Sanjana";\n  return <h1>Hello {name}</h1>;\n}',
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
  },
  {
    id: 10,
    type: "content",
    title: "Event Handling",
    subtitle: "Responding to User Actions",
    points: ["React events use camelCase: onClick, onChange", "Use functions to handle events"],
    code: 'function ClickMe() {\n  function handleClick() {\n    alert("Button clicked!");\n  }\n  return (\n    <button onClick={handleClick}>\n      Click Me\n    </button>\n  );\n}',
  },
  {
    id: 11,
    type: "content",
    title: "React Hooks",
    subtitle: "Modern React Features",
    points: ["useState → manage state", "useEffect → side effects (APIs, timers)", "useContext → global state"],
    code: 'import { useEffect } from "react";\n\nfunction Timer() {\n  useEffect(() => {\n    console.log("Component loaded");\n  }, []);\n  return <h1>Timer Example</h1>;\n}',
  },
  {
    id: 12,
    type: "content",
    title: "React Router (Navigation)",
    subtitle: "Single Page Applications",
    points: ["React for SPAs (Single Page Apps)", "Navigate without page reload"],
    code: 'import { BrowserRouter, Routes, Route }\n  from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about"\n          element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
  },
  {
    id: 13,
    type: "content",
    title: "Styling in React",
    subtitle: "Making Your App Beautiful",
    points: [
      'Inline styles: <div style={{color: "blue"}}>Hello</div>',
      "CSS Modules: Scoped styles",
      "Material UI: Ready-made styled components",
    ],
  },
  {
    id: 14,
    type: "content",
    title: "Advantages of React",
    points: [
      "Reusable components → faster dev",
      "High performance with Virtual DOM",
      "Large community & ecosystem",
      "React Native → mobile apps",
      "Analogy: React is like a Swiss Army knife → multipurpose and efficient",
    ],
  },
  {
    id: 15,
    type: "conclusion",
    title: "Conclusion & Q/A",
    points: [
      "Recap: Components, Props, State, Hooks, Router",
      "React = efficient, scalable, popular",
      "Start with small projects (To-Do app, Counter)",
      "Open for questions",
    ],
    footer: "Thank you! Questions?",
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

  return (
    <div className="h-screen w-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 via-background to-chart-2/5 pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-chart-1 to-chart-2 transition-all duration-300 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8 md:p-16 relative z-10">
        <div
          key={currentSlide}
          className={`max-w-5xl w-full ${direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left"}`}
        >
          {slide.type === "title" && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-in-delay-1">{slide.subtitle}</p>
              {slide.footer && (
                <p className="text-lg text-muted-foreground mt-16 animate-fade-in-delay-2">{slide.footer}</p>
              )}
            </div>
          )}

          {slide.type === "content" && (
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {slide.title}
                </h2>
                {slide.subtitle && <p className="text-xl md:text-2xl text-muted-foreground">{slide.subtitle}</p>}
              </div>

              <ul className="space-y-4 text-xl md:text-2xl">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-chart-1 mt-1 text-2xl">▸</span>
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              {slide.code && (
                <div className="mt-8 bg-secondary/50 border border-border rounded-lg p-6 hover:border-chart-1/50 transition-colors duration-300 animate-fade-in-delay-3">
                  <pre className="text-lg md:text-xl font-mono text-chart-1 overflow-x-auto">
                    <code>{slide.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {slide.type === "conclusion" && (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-balance mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h2>

              <ul className="space-y-4 text-xl md:text-2xl mb-12">
                {slide.points?.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-in-delay-${Math.min(index + 1, 5)} hover:translate-x-2 transition-transform duration-200`}
                  >
                    <span className="text-chart-2 mt-1 text-2xl">▸</span>
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              {slide.footer && (
                <p className="text-3xl md:text-4xl font-bold text-center mt-16 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent animate-fade-in-delay-4">
                  {slide.footer}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border/50 backdrop-blur-sm bg-background/80 p-4 md:p-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="lg"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2 hover:bg-chart-1/10 hover:text-chart-1 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <Dialog open={showOverview} onOpenChange={setShowOverview}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-chart-1/10 hover:text-chart-1 transition-all duration-200"
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
                      index === currentSlide ? "border-chart-1 bg-chart-1/10" : "border-border hover:border-chart-1/50"
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-2">Slide {index + 1}</div>
                    <div className="font-semibold text-sm line-clamp-2">{s.title}</div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showKeyboardHelp} onOpenChange={setShowKeyboardHelp}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-chart-2/10 hover:text-chart-2 transition-all duration-200"
              >
                <Keyboard className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Keyboard Shortcuts</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Next slide</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">→</kbd>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">Space</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Previous slide</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">←</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">First slide</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">Home</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Last slide</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">End</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Slide overview</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">O</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Keyboard help</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">?</kbd>
                </div>
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
                    ? "w-8 bg-gradient-to-r from-chart-1 to-chart-2"
                    : index < currentSlide
                      ? "w-2 bg-chart-1/30"
                      : "w-2 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-muted-foreground font-mono text-sm bg-muted/50 px-3 py-1 rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2 hover:bg-chart-2/10 hover:text-chart-2 transition-all duration-200 hover:scale-105"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

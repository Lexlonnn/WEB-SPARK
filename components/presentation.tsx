"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import FloatingParticles from "@/components/floating-particles"
import {
  BuildingBlocksAnimation,
  SpeedIndicatorsAnimation,
  ComponentBoxesAnimation,
  CodeMorphAnimation,
  SetupChecklistAnimation,
  ComponentNestingAnimation,
  JSXTransformAnimation,
} from "@/components/slide-animations"

type Slide = {
  id: number
  type: "title" | "content" | "conclusion"
  title: string
  subtitle?: string
  points?: string[]
  footer?: string
  visualSuggestion?: string
  speakerNotes?: string[]
  animation?: () => JSX.Element
}

const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    title: "The Evolution of the Web: From HTML to Next.js",
    subtitle: "Web Development",
    animation: BuildingBlocksAnimation,
  },
  {
    id: 2,
    type: "content",
    title: "The \"Stone Age\" – Plain HTML",
    subtitle: "In the beginning, we wrote every page by hand",
    points: [
      "The concept: every page was written and managed manually.",
      "The problem: if a site had 50 pages, changing one logo meant editing 50 files.",
      "Teams spent more time maintaining files than improving the product.",
      "Key takeaway: HTML is great for content, but terrible for management at scale.",
    ],
    animation: SpeedIndicatorsAnimation,
  },
  {
    id: 3,
    type: "content",
    title: "The \"Industrial Revolution\" – Enter React",
    subtitle: "The solution: components",
    points: [
      "Instead of rebuilding the same UI on every page, we create reusable components.",
      "One shared Header component can be used across the whole app.",
      "Change the logo once, and every page updates instantly.",
      "This introduced real reuse and faster team productivity.",
    ],
    visualSuggestion: "A Lego brick labeled 'Navbar' being snapped onto different pages.",
    animation: ComponentBoxesAnimation,
  },
  {
    id: 4,
    type: "content",
    title: "The \"React Hangover\" – Why React wasn’t enough",
    subtitle: "The issue: Client-Side Rendering (CSR)",
    points: [
      "Users may see a blank white screen briefly while JavaScript loads.",
      "Search bots struggle to see content quickly in pure CSR pages.",
      "SEO quality can drop when content isn’t immediately available.",
      "Users on slow phones and networks feel this delay the most.",
    ],
    animation: CodeMorphAnimation,
  },
  {
    id: 5,
    type: "content",
    title: "The Superhero – Next.js",
    subtitle: "A framework built on top of React",
    points: [
      "The big win: Server-Side Rendering (SSR).",
      "The server prepares the page before sending it to the user.",
      "Users see real content instantly on first load.",
      "Analogy: React is the ingredients; Next.js is the cooked meal delivered to your table.",
    ],
    animation: SetupChecklistAnimation,
  },
  {
    id: 6,
    type: "content",
    title: "Managing Your Tools – What is a Package Manager?",
    points: [
      "Every project needs tools and libraries to work efficiently.",
      "A package manager is like an app store for your code.",
      "The package.json file is your shopping list.",
      "It tells your computer exactly which tools to download so the app runs correctly.",
    ],
    animation: ComponentNestingAnimation,
  },
  {
    id: 7,
    type: "content",
    title: "NPM vs. PNPM – The Great Choice",
    points: [
      "NPM: the standard and reliable option, but heavy over time.",
      "NPM often downloads duplicate copies of the same tools per project.",
      "PNPM: the smarter option that shares one tool copy across projects.",
      "PNPM reduces disk usage and speeds up installs in day-to-day development.",
    ],
    speakerNotes: ["PNPM saves your hard drive and your time."],
    animation: JSXTransformAnimation,
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

      <div className="absolute top-0 left-0 right-0 h-1 bg-purple-200/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ease-out origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="absolute top-4 right-6 z-40 pointer-events-none">
        <div className="flex flex-col items-end scale-50 md:scale-64 origin-right">
          <svg width="180" height="42" viewBox="0 0 153 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1383 20.3296C25.1491 20.3296 25.9685 21.149 25.9685 22.1598V22.8523C25.9685 24.2455 24.839 25.3749 23.4458 25.3749H23.1985C20.6923 25.3749 18.9281 24.4186 17.9059 22.506C16.2571 24.8473 13.7674 26.018 10.4368 26.018C8.14779 26.018 5.34208 27.6679 5.34208 29.9569V32.5966C5.34208 34.0718 4.14622 35.2677 2.67104 35.2677C1.19587 35.2677 0 34.0718 0 32.5966V3.31407C0 1.83889 1.19587 0.643029 2.67104 0.643029C4.14622 0.643029 5.34208 1.83889 5.34208 3.31407V15.2843C5.34208 17.098 5.83672 18.5159 6.82599 19.5382C7.81527 20.5275 9.15079 21.0221 10.8326 21.0221C12.7452 21.0221 14.2785 20.445 15.4327 19.2909C16.5868 18.1037 17.1639 16.2901 17.1639 13.8499V3.31407C17.1639 1.8389 18.3598 0.643029 19.835 0.643029C21.3101 0.643029 22.506 1.83889 22.506 3.31407V18.6973C22.506 19.1919 22.6544 19.5877 22.9512 19.8844C23.248 20.1812 23.6437 20.3296 24.1383 20.3296Z" fill="#2563eb"/>
            <path d="M36.3698 14.8516C36.3698 17.6585 38.6452 19.9339 41.4521 19.9339H47.7464C49.2489 19.9339 50.4669 21.1519 50.4669 22.6544C50.4669 24.1569 49.2489 25.3749 47.7464 25.3749H40.5742C35.1106 25.3749 30.6814 20.9458 30.6814 15.4822V3.48713C30.6814 1.91634 31.9548 0.642962 33.5256 0.642962C35.0964 0.642962 36.3698 1.91634 36.3698 3.48713V14.8516Z" fill="#2563eb"/>
            <path d="M59.8129 15.2843C58.7621 15.2843 57.9617 16.2684 58.4303 17.2089C58.9174 18.1868 59.6055 18.9962 60.4945 19.6371C61.9125 20.6264 63.6437 21.121 65.6882 21.121C67.5877 21.121 69.1691 20.6624 70.4325 19.7452C71.5123 18.9612 72.9583 18.5738 74.1105 19.247C75.3877 19.9933 75.7849 21.6941 74.7145 22.7151C72.4064 24.917 69.3812 26.018 65.6388 26.018C61.6157 26.018 58.3676 24.7978 55.8944 22.3576C53.4212 19.8844 52.1846 16.7682 52.1846 13.009C52.1846 9.31568 53.4047 6.23244 55.8449 3.75925C58.2851 1.25308 61.4179 0 65.243 0C68.8704 0 71.8382 1.26957 74.1465 3.80871C76.4878 6.34785 77.6584 9.43109 77.6584 13.0584C77.6584 14.3417 76.5074 15.2843 75.2242 15.2843H59.8129ZM57.7246 10.9315H72.2669C71.9042 8.91997 71.0633 7.40308 69.7442 6.38083C68.4582 5.35858 66.9413 4.84745 65.1936 4.84745C63.215 4.84745 61.5662 5.39155 60.2472 6.47975C58.9282 7.56796 58.0873 9.05187 57.7246 10.9315Z" fill="#2563eb"/>
            <path d="M101.802 3.31408C101.802 1.8389 102.998 0.643029 104.473 0.643029C105.948 0.643029 107.144 1.8389 107.144 3.31407V22.7039C107.144 24.179 105.948 25.3749 104.473 25.3749C102.998 25.3749 101.802 24.1791 101.802 22.7039V21.8135C99.7902 24.6165 96.9049 26.018 93.1456 26.018C89.7491 26.018 86.8472 24.7649 84.44 22.2587C82.0328 19.7196 80.8291 16.6363 80.8291 13.009C80.8291 9.34865 82.0328 6.26541 84.44 3.75925C86.8472 1.25308 89.7491 0 93.1456 0C96.9049 0 99.7902 1.38499 101.802 4.15496V3.31408ZM88.3971 18.6973C89.881 20.1812 91.7441 20.9232 93.9865 20.9232C96.2288 20.9232 98.092 20.1812 99.5759 18.6973C101.06 17.1804 101.802 15.2843 101.802 13.009C101.802 10.7336 101.06 8.85402 99.5759 7.3701C98.092 5.85321 96.2288 5.09477 93.9865 5.09477C91.7441 5.09477 89.881 5.85321 88.3971 7.3701C86.9132 8.85402 86.1712 10.7336 86.1712 13.009C86.1712 15.2843 86.9132 17.1804 88.3971 18.6973Z" fill="#2563eb"/>
            <path d="M118.713 4.79799C119.698 2.56375 121.313 1.14337 123.558 0.536855C125.051 0.133504 126.33 1.45163 126.33 2.99824C126.33 4.61579 124.926 5.83049 123.373 6.28221C122.516 6.53136 121.721 6.92697 120.988 7.46903C119.471 8.55723 118.713 10.3709 118.713 12.91V22.7039C118.713 24.1791 117.517 25.3749 116.042 25.3749C114.566 25.3749 113.37 24.1791 113.37 22.7039V3.31407C113.37 1.8389 114.566 0.643029 116.042 0.643029C117.517 0.643029 118.713 3.31407V4.79799Z" fill="#2563eb"/>
            <path d="M143.286 0C146.122 0 148.414 0.906835 150.161 2.72051C151.909 4.53418 152.783 7.02386 152.783 10.1895V22.7039C152.783 24.1791 151.587 25.3749 150.112 25.3749C148.637 25.3749 147.441 24.1791 147.441 22.7039V10.7336C147.441 8.88699 146.946 7.46903 145.957 6.47975C144.968 5.49048 143.616 4.99584 141.901 4.99584C140.021 4.99584 138.505 5.58941 137.35 6.77654C136.196 7.93069 135.619 9.71139 135.619 12.1186V22.7039C135.619 24.1791 134.423 25.3749 132.948 25.3749C131.473 25.3749 130.277 24.1791 130.277 22.7039V3.31407C130.277 1.8389 131.473 0.643029 132.948 0.643029C134.423 0.643029 135.619 1.83889 135.619 3.31407V3.80871C137.235 1.26957 139.791 0 143.286 0Z" fill="#2563eb"/>
          </svg>
          <span className="text-[12px] font-black text-blue-600 tracking-[0.3em] mr-0 -mt-2 uppercase">ASI</span>
        </div>
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
              <p className="text-2xl md:text-3xl text-purple-600 font-semibold animate-fade-in-delay-1">{slide.subtitle}</p>

              {(slide.visualSuggestion || slide.speakerNotes?.length) && (
                <div className="max-w-4xl mx-auto text-left space-y-4">
                  {slide.visualSuggestion && (
                    <div className="bg-cyan-50/80 border-2 border-cyan-200 rounded-lg p-4 shadow-md">
                      <p className="text-sm uppercase tracking-wide text-cyan-700 font-semibold mb-1">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-purple-50/80 border-2 border-purple-200 rounded-lg p-4 shadow-md">
                      <p className="text-sm uppercase tracking-wide text-purple-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-purple-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
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

              {(slide.visualSuggestion || slide.speakerNotes?.length) && (
                <div className="grid md:grid-cols-2 gap-4 animate-fade-in-delay-3">
                  {slide.visualSuggestion && (
                    <div className="bg-cyan-50/80 border-2 border-cyan-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-cyan-700 font-semibold mb-2">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-purple-50/80 border-2 border-purple-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-purple-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-purple-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
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

              {(slide.visualSuggestion || slide.speakerNotes?.length) && (
                <div className="grid md:grid-cols-2 gap-4 animate-fade-in-delay-3">
                  {slide.visualSuggestion && (
                    <div className="bg-cyan-50/80 border-2 border-cyan-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-cyan-700 font-semibold mb-2">Visual Suggestion</p>
                      <p className="text-lg text-gray-800">{slide.visualSuggestion}</p>
                    </div>
                  )}

                  {slide.speakerNotes?.length ? (
                    <div className="bg-purple-50/80 border-2 border-purple-200 rounded-lg p-4 shadow-md">
                      <p className="text-xs uppercase tracking-wide text-purple-700 font-semibold mb-2">Speaker Notes</p>
                      <ul className="space-y-2 text-base md:text-lg">
                        {slide.speakerNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-800">
                            <span className="text-purple-500 font-bold mt-0.5">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
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
                      index === currentSlide ? "border-purple-500 bg-purple-50" : "border-purple-200 hover:border-purple-400"
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
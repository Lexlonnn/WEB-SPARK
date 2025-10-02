import { Button } from "@/components/ui/button"
import ReactLogo from "@/components/react-logo"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <ReactLogo />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Learn React Basics
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">
          Master the fundamentals: Introduction, Components, Props, and State
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Start Learning
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            View Topics
          </Button>
        </div>
      </div>
    </section>
  )
}

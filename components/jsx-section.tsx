"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"

interface JsxSectionProps {
  isActive: boolean
}

export default function JsxSection({ isActive }: JsxSectionProps) {
  const [showResult, setShowResult] = useState(false)

  const correctCode = "<h1>Hello, React!</h1>"

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            JSX: JavaScript + HTML
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">Write HTML-like code directly in JavaScript</p>
        </div>

        <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 mb-8 shadow-2xl">
          <h3 className="text-3xl font-semibold mb-6">What is JSX?</h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              JSX stands for <strong className="text-primary">JavaScript XML</strong>. It's a special syntax that lets
              you write HTML-like code inside your JavaScript files. This makes it much easier to see what your UI will
              look like!
            </p>
            <div className="glass p-6 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-2 text-primary">Why JSX is awesome:</p>
                  <p className="text-muted-foreground">
                    Instead of creating elements with complicated JavaScript functions, you can write code that looks
                    like HTML. It's more readable and easier to understand what you're building!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">JSX Code:</span>
            </div>
            <pre className="glass p-6 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-primary">{correctCode}</code>
            </pre>
            <Button className="mt-6 w-full" size="lg" onClick={() => setShowResult(!showResult)}>
              {showResult ? "Hide Result" : "Show Result"}
            </Button>
          </Card>

          <Card
            className={`p-8 backdrop-blur-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 shadow-xl transition-all duration-500 ${showResult ? "scale-100 opacity-100" : "scale-95 opacity-50"}`}
          >
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Renders as:</span>
            </div>
            <div className="glass p-8 rounded-lg border-2 border-primary/30">
              <h1 className="text-4xl font-bold text-primary">Hello, React!</h1>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">JSX makes it easy to see what your UI will look like!</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

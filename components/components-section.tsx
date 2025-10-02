"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ComponentsSectionProps {
  isActive: boolean
}

export default function ComponentsSection({ isActive }: ComponentsSectionProps) {
  const [componentCount, setComponentCount] = useState(1)

  const handleAddComponent = () => {
    setComponentCount(Math.min(componentCount + 1, 5))
  }

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Function Components
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">Components are reusable building blocks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Component Code:</span>
            </div>
            <pre className="glass p-6 rounded-lg overflow-x-auto text-sm">
              <code className="font-mono text-primary">
                {`function Hello() {
  return (
    <h1>Hello World</h1>
  );
}`}
              </code>
            </pre>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-muted-foreground">Click below to reuse this component multiple times!</p>
              <div className="flex gap-2">
                <Button onClick={handleAddComponent} disabled={componentCount >= 5} size="lg">
                  Add Component
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setComponentCount(Math.max(componentCount - 1, 0))}
                  disabled={componentCount <= 0}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {Array.from({ length: componentCount }).map((_, i) => (
              <Card
                key={i}
                className="p-6 backdrop-blur-xl bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 shadow-xl animate-in slide-in-from-right duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h1 className="text-3xl font-bold text-primary">Hello World</h1>
                <p className="text-xs text-muted-foreground mt-2">Component #{i + 1}</p>
              </Card>
            ))}
            {componentCount === 0 && (
              <Card className="p-12 text-center backdrop-blur-xl bg-muted/20 border-border/50">
                <p className="text-muted-foreground">Click "Add Component" to see reusability in action!</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

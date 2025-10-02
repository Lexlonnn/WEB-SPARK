"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NestingSectionProps {
  isActive: boolean
}

export default function NestingSection({ isActive }: NestingSectionProps) {
  const [nestedComponents, setNestedComponents] = useState<string[]>([])

  const availableComponents = ["Header", "Button", "Card"]

  const addComponent = (component: string) => {
    if (nestedComponents.length < 3) {
      setNestedComponents([...nestedComponents, component])
    }
  }

  const removeComponent = (index: number) => {
    setNestedComponents(nestedComponents.filter((_, i) => i !== index))
  }

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Nesting Components
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">Components can contain other components</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Code:</span>
            </div>
            <pre className="glass p-6 rounded-lg overflow-x-auto text-sm">
              <code className="font-mono text-primary">
                {`function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}`}
              </code>
            </pre>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-4">Try building your own nested structure:</p>
              <div className="flex flex-wrap gap-2">
                {availableComponents.map((comp) => (
                  <Button
                    key={comp}
                    onClick={() => addComponent(comp)}
                    disabled={nestedComponents.length >= 3}
                    size="lg"
                  >
                    Add {comp}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <div className="relative">
            <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 shadow-xl">
              <div className="text-sm text-muted-foreground mb-4 font-mono">App Component</div>
              <div className="space-y-4 min-h-[300px]">
                {nestedComponents.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">Add components to see nesting in action</div>
                ) : (
                  nestedComponents.map((comp, i) => (
                    <Card
                      key={i}
                      className="p-6 backdrop-blur-sm bg-primary/20 border-primary/40 animate-in slide-in-from-left duration-300 relative group"
                    >
                      <div className="text-xs text-muted-foreground mb-2 font-mono">{comp} Component</div>
                      <h1 className="text-2xl font-bold text-primary">{comp} Content</h1>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeComponent(i)}
                      >
                        ✕
                      </Button>
                    </Card>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

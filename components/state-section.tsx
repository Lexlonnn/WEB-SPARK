"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StateSectionProps {
  isActive: boolean
}

export default function StateSection({ isActive }: StateSectionProps) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            State: Making Things Interactive
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">
            State lets components remember and update information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Counter Component:</span>
            </div>
            <pre className="glass p-6 rounded-lg overflow-x-auto text-sm">
              <code className="font-mono text-primary">
                {`function Counter() {
  const [count, setCount] = 
    useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => 
        setCount(count + 1)
      }>
        Increment
      </button>
    </div>
  );
}`}
              </code>
            </pre>
          </Card>

          <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-secondary/30 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Live Demo:</span>
            </div>
            <div className="glass p-8 rounded-lg border-2 border-secondary/40 text-center space-y-6">
              <div>
                <p className="text-lg text-muted-foreground mb-2">Current Count:</p>
                <p className="text-7xl font-bold text-secondary animate-in zoom-in duration-200" key={count}>
                  {count}
                </p>
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                <Button onClick={handleIncrement} size="lg" className="bg-secondary hover:bg-secondary/90">
                  Increment
                </Button>
                <Button onClick={() => setCount(count - 1)} size="lg" variant="outline">
                  Decrement
                </Button>
                <Button onClick={() => setCount(0)} size="lg" variant="outline">
                  Reset
                </Button>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              State updates cause the component to re-render with new data!
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

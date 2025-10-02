"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PropsSectionProps {
  isActive: boolean
}

export default function PropsSection({ isActive }: PropsSectionProps) {
  const [name, setName] = useState("Alice")

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Props: Passing Data
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">Send data to components to make them dynamic</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Component with Props:</span>
            </div>
            <pre className="glass p-6 rounded-lg overflow-x-auto text-sm mb-6">
              <code className="font-mono text-primary">
                {`function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}

<Welcome name="${name}" />`}
              </code>
            </pre>

            <div className="space-y-4">
              <Label htmlFor="name-input" className="text-lg">
                Try changing the name:
              </Label>
              <Input
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name"
                className="text-lg p-6 backdrop-blur-sm bg-background/50"
              />
            </div>
          </Card>

          <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30 shadow-xl">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-mono">Output:</span>
            </div>
            <div className="glass p-8 rounded-lg border-2 border-accent/40 transition-all duration-300">
              <h1 className="text-5xl font-bold text-accent animate-in fade-in duration-300" key={name}>
                Hello, {name}!
              </h1>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Props let you customize components with different data!
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

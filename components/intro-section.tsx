"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface IntroSectionProps {
  isActive: boolean
}

const blocks = [
  { id: 1, label: "Header", color: "bg-blue-500" },
  { id: 2, label: "Button", color: "bg-cyan-500" },
  { id: 3, label: "Card", color: "bg-teal-500" },
]

export default function IntroSection({ isActive }: IntroSectionProps) {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null)

  return (
    <section className="h-screen w-full overflow-y-auto px-8 py-12 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            What is React?
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">
            A JavaScript library for building user interfaces
          </p>
        </div>

        <Card className="p-8 backdrop-blur-xl bg-card/40 border-border/50 mb-8 shadow-2xl">
          <h3 className="text-3xl font-semibold mb-6">Understanding React</h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              React is a powerful tool created by Facebook (now Meta) that helps developers build websites and apps.
              Instead of writing everything from scratch every time, React lets you create reusable pieces called{" "}
              <strong className="text-primary">components</strong>.
            </p>
            <div className="glass p-6 rounded-xl border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-2 text-primary">Think of it like Lego blocks:</p>
                  <p className="text-muted-foreground">
                    Just like you can use the same Lego piece to build different things, you can use the same React
                    component in many places. Once you build a button component, you can use it everywhere in your app
                    without writing the code again!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`${block.color} text-white p-8 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-${block.color}/50 animate-float`}
              style={{ animationDelay: `${block.id * 0.2}s` }}
              onMouseEnter={() => setHoveredBlock(block.id)}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <div className="text-xl font-semibold">{block.label}</div>
              {hoveredBlock === block.id && (
                <div className="mt-2 text-sm opacity-90 animate-in fade-in duration-300">Reusable component!</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

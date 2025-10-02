"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComponentsPage() {
  const [showOutput, setShowOutput] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-purple-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Presentation
          </Button>
        </Link>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-purple-200 p-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
            React Components
          </h1>
          <p className="text-xl text-purple-600 mb-8">UI Building Blocks</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`function Welcome(props) {
  return (
    <div className="card">
      <h1>Welcome to React</h1>
      <p>Hello, {props.name}!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}`}</code>
                </pre>
              </div>

              <Button
                onClick={() => setShowOutput(!showOutput)}
                className="mt-4 bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
              >
                <Play className="mr-2 h-4 w-4" />
                {showOutput ? "Hide" : "Show"} Output
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Output</h2>
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-lg p-6 min-h-[300px]">
                {showOutput ? (
                  <div className="space-y-4">
                    <WelcomeComponent name="Alice" />
                    <WelcomeComponent name="Bob" />
                    <WelcomeComponent name="Charlie" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-purple-400">
                    Click "Show Output" to see the component in action
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Concepts</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Components are reusable pieces of UI
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Functional components are the modern way to write React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Components can accept props to customize their behavior
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Components can be composed together to build complex UIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function WelcomeComponent({ name }: { name: string }) {
  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h1 className="text-2xl font-bold text-purple-700 mb-2">Welcome to React</h1>
      <p className="text-gray-700">Hello, {name}!</p>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HooksPage() {
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
            React Hooks
          </h1>
          <p className="text-xl text-purple-600 mb-8">Modern React Features</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
  return (
    <div>
      <h2>Time: {seconds}s</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
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
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                {showOutput ? (
                  <TimerComponent />
                ) : (
                  <div className="text-purple-400">Click "Show Output" to see hooks in action</div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Concepts</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                useState manages component state
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                useEffect handles side effects like API calls, timers, subscriptions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Hooks must be called at the top level of components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                useEffect cleanup function prevents memory leaks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimerComponent() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const reset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-md w-full">
      <h2 className="text-5xl font-bold text-purple-700 mb-6 text-center">{seconds}s</h2>
      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={() => setIsRunning(!isRunning)}
          className={`${
            isRunning
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={reset}
          className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

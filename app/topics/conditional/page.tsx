"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConditionalPage() {
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
            Conditional Rendering
          </h1>
          <p className="text-xl text-purple-600 mb-8">Showing Content Based on Conditions</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back!</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
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
                {showOutput ? "Hide" : "Show"} Interactive Output
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Output</h2>
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                {showOutput ? (
                  <LoginStatusComponent />
                ) : (
                  <div className="text-purple-400">Click "Show Interactive Output" to see conditional rendering</div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Concepts</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Use ternary operator for if-else: condition ? true : false
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Use && operator for simple if: condition && component
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Return null to render nothing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Conditional rendering is essential for dynamic UIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoginStatusComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-md w-full text-center">
      {isLoggedIn ? (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-600">Welcome back!</h2>
          <p className="text-gray-700">You are logged in</p>
          <Button
            onClick={() => setIsLoggedIn(false)}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-700">Please log in</h2>
          <p className="text-gray-700">You need to login to continue</p>
          <Button
            onClick={() => setIsLoggedIn(true)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          >
            Login
          </Button>
        </div>
      )}
    </div>
  )
}

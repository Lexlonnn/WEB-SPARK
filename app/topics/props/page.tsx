"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PropsPage() {
  const [showOutput, setShowOutput] = useState(false)
  const [userName, setUserName] = useState("Sanjana")
  const [userAge, setUserAge] = useState("25")
  const [userRole, setUserRole] = useState("Developer")

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
            Props in React
          </h1>
          <p className="text-xl text-purple-600 mb-8">Component Inputs</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard 
        name="Sanjana" 
        age="25" 
        role="Developer" 
      />
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
                  <div>
                    <div className="space-y-3 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age:</label>
                        <input
                          type="text"
                          value={userAge}
                          onChange={(e) => setUserAge(e.target.value)}
                          className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role:</label>
                        <input
                          type="text"
                          value={userRole}
                          onChange={(e) => setUserRole(e.target.value)}
                          className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <UserCard name={userName} age={userAge} role={userRole} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-purple-400">
                    Click "Show Output" to see props in action
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
                Props are inputs passed to components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Props make components reusable with different data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Props are read-only and cannot be modified by the component
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Think of props like ingredients in a recipe
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserCard({ name, age, role }: { name: string; age: string; role: string }) {
  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-3">{name}</h2>
      <p className="text-gray-700 mb-2">Age: {age}</p>
      <p className="text-gray-700">Role: {role}</p>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ListsPage() {
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
            Lists & Keys
          </h1>
          <p className="text-xl text-purple-600 mb-8">Rendering Multiple Items</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Master hooks" }
  ]);
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
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
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-lg p-6 min-h-[300px]">
                {showOutput ? (
                  <TodoListComponent />
                ) : (
                  <div className="flex items-center justify-center h-full text-purple-400">
                    Click "Show Interactive Output" to see lists in action
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
                Use .map() to render lists of items in React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Each list item needs a unique key prop for React to track changes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Keys should be stable, unique identifiers (like IDs)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Avoid using array indexes as keys when items can be reordered
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoListComponent() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Master hooks" },
  ])

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-700 mb-4">Todo List</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg p-3 hover:bg-purple-100 transition-colors"
          >
            <span className="text-gray-700">{todo.text}</span>
            <Button
              onClick={() => removeTodo(todo.id)}
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p className="text-gray-400 text-center mt-4">All todos completed!</p>}
    </div>
  )
}

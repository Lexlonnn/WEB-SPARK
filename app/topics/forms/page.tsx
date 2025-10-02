"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FormsPage() {
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
            Forms in React
          </h1>
          <p className="text-xl text-purple-600 mb-8">Handling User Input</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sample Code</h2>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <pre className="text-sm font-mono text-purple-700 overflow-x-auto">
                  <code>{`function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted: \${formData.name}\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <textarea name="message" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
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
                  <ContactFormComponent />
                ) : (
                  <div className="flex items-center justify-center h-full text-purple-400">
                    Click "Show Interactive Output" to see forms in action
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
                Controlled components: React state controls form input values
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Use onChange to update state as user types
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Use onSubmit to handle form submission
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">▸</span>
                Always call e.preventDefault() to prevent page reload
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg p-6 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
        >
          Submit
        </Button>
      </form>
      {submitted && (
        <div className="mt-4 bg-green-50 border-2 border-green-300 rounded-lg p-3 text-green-700 text-center">
          Form submitted successfully!
        </div>
      )}
    </div>
  )
}

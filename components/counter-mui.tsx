"use client"

import { useState } from "react"
import { Button } from "@mui/material"

export default function CounterMUI() {
  const [b, setb] = useState(0)

  const adder = () => {
    setb((b) => b + 1)
  }

  const subtractor = () => {
    setb((b) => b - 1)
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-5xl font-bold text-purple-700 mb-8 text-center">Count: {b}</h3>
      <div className="flex gap-4 justify-center">
        <Button
          variant="contained"
          onClick={adder}
          size="large"
          sx={{
            backgroundColor: "#9333ea",
            "&:hover": {
              backgroundColor: "#7e22ce",
            },
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={subtractor}
          size="large"
          sx={{
            backgroundColor: "#9333ea",
            "&:hover": {
              backgroundColor: "#7e22ce",
            },
          }}
        >
          -
        </Button>
      </div>
    </div>
  )
}

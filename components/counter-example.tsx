"use client"

import { useNavigate, Route, Routes } from "react-router-dom"
import { Button } from "@mui/material"
import Counter from "./components/Counter"

function App() {
  const navigate = useNavigate()

  return (
    <>
      {/* Button to navigate to Counter */}
      <Button variant="contained" onClick={() => navigate("/count")} style={{ margin: "20px" }}>
        Counter
      </Button>

      {/* Routes */}
      <Routes>
        <Route path="/count" element={<Counter />} />
      </Routes>
    </>
  )
}

export default App

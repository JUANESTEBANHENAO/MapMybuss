import { useState } from 'react'
import './App.css'
import Mapa from "./components/Mapa/Mapa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mapa/>
    </>
  )
}

export default App

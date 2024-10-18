import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GettingAPIData from './assets/API_Sources/bdAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Billionarie Dairy</h1>
        <GettingAPIData></GettingAPIData>
    </>
  )
}

export default App

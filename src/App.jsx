import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GettingAPIData from './assets/Components/API_Sources/bdAPI'
import Bottles from './assets/Components/Bottles/Bottle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <Bottles></Bottles>
        <GettingAPIData></GettingAPIData>
        <h1>Billionarie Dairy</h1>
        
    </>
  )
}

export default App

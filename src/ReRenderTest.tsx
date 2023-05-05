import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayKeyTest from './ArrayKeyTest.tsx'

function App() {

  console.log('re-rendered ');
  
  const [someState, setSomeState] = useState(0);

  return (
    <>
      <button onClick={() => setSomeState(0)}>click here to change state (always set to 0)</button>
      <button onClick={() => setSomeState(Math.random())}>click here to change state</button>
    </>
  )
}

export default App

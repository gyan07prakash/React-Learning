import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [value, setValue]  = useState(15)

  const addValue = () =>{
    //setValue(value +1);
    setValue(prevValue => prevValue+1)
    setValue(prevValue => prevValue+1)
  }

  const decValue = () =>{
    setValue(value-1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {value}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={decValue}>dec value</button>
    </>
  )
}

export default App

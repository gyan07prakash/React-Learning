import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componenets/card'

function App() {
  const [count, setCount] = useState(0)
  let SomeObj ={
    name: "gyan",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >
        Check Tailwind</h1>

        <Card cardName={"Gyan"} btnText={"View"}/>
        <Card cardName={"Prakash"} btnText={"show"}/>
    </>
  )
}


export default App

import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-xl bg-zinc-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Redux Toolkit Todo
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App

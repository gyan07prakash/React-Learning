import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Home from "./components/Home/Home";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      }
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

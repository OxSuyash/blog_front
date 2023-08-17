import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from "react"

import "../src/styles/App.scss"

export const server = "https://blog-lez2.onrender.com/api/v1"

export const Context = createContext({
  isAuthenticated: false,
})

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DrumContextProvider } from './context/drum-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrumContextProvider>
    <App />
    </DrumContextProvider>
  </React.StrictMode>,
)

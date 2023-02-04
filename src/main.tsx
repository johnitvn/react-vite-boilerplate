import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import HomePage from './views/HomePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)

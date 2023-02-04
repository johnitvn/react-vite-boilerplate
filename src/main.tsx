import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex justify-center">
        <a href="https://reactjs.org" className="w-1/6 p-5" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo w-full" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" className="w-1/6 p-5" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo w-full" alt="Vite logo" />
        </a>
        <a href="https://vitetest.dev" className="w-1/6 p-5" target="_blank" rel="noreferrer">
          <img src="/vite-test.svg" className="logo w-full" alt="Vite test logo" />
        </a>
        <a href="https://tailwindcss.com/" className="w-1/6 p-5" target="_blank" rel="noreferrer">
          <img src="/tailwindcss.svg" className="logo w-full" alt="Tailwind css test" />
        </a>
      </div>
      <div className="pt-6 text-5xl">
        <h1>React + Vite + Vite Test + Tailwind Css</h1>
      </div>
    </div>
  </React.StrictMode>,
)

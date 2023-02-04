import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import Index from './views/Index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="" index element={<Index />} />
      </Route>
      <Route path="*" index element={<Index />} />
    </Routes>
  </BrowserRouter>,
)

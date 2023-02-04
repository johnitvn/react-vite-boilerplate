import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LandingLayout from './layouts/LandingLayout'
import './main.css'
import { SignIn } from './views/Authentication/SignIn'
import { SignUp } from './views/Authentication/SignUp'
import Index from './views/Index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="" index element={<Index />} />
        <Route path="signin" index element={<SignIn />} />
        <Route path="signup" index element={<SignUp />} />
      </Route>
      <Route path="*" index element={<Index />} />
    </Routes>
  </BrowserRouter>,
)

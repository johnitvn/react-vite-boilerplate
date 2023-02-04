import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './main.css'

const LandingLayout = React.lazy(() => import('./layouts/LandingLayout'))
const Index = React.lazy(() => import('./views/Index'))
const SignIn = React.lazy(() => import('./views/Authentication/SignIn'))
const SignUp = React.lazy(() => import('./views/Authentication/SignUp'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <LandingLayout />
          </React.Suspense>
        }
      >
        <Route
          path=""
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Index />
            </React.Suspense>
          }
        />
        <Route
          path="signin"
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <SignIn />
            </React.Suspense>
          }
        />
        <Route
          path="signup"
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <SignUp />
            </React.Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        index
        element={
          <React.Suspense fallback={<>...</>}>
            <Index />
          </React.Suspense>
        }
      />
    </Routes>
  </BrowserRouter>,
)

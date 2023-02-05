import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/app.css'

import Authenticate from './layouts/Authenticate'
import NotFound from './views/errors/NotFound'
import SignIn from './views/authen/SignIn'
import Application from './layouts/Application'
import AppIndex from './views/app/Index'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/app" element={<Application />}>
        <Route path="" index element={<AppIndex />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/authen" element={<Authenticate />}>
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)

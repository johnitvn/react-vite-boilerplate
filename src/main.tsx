import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/app.css'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="" index />
      </Route>
    </Routes>
  </BrowserRouter>,
)

import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/app.css'

import Authenticate from './layouts/Authenticate'
import NotFound from './views/errors/NotFound'
import SignIn from './views/authen/SignIn'
import Application from './layouts/Application'
import AppIndex from './views/app/Index'
import UserIndex from './views/app/users/UserIndex'
import UserCreate from './views/app/users/UserCreate'
import PostIndex from './views/app/posts/PostIndex'
import CategoryIndex from './views/app/categories/CategoryIndex'
import TodoIndex from './views/app/todo/TodoIndex'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/app" element={<Application />}>
        <Route path="" index element={<AppIndex />} />

        <Route path="posts">
          <Route path="" index element={<PostIndex />} />
        </Route>
        <Route path="categories">
          <Route path="" index element={<CategoryIndex />} />
        </Route>
        <Route path="users">
          <Route path="" index element={<UserIndex />} />
          <Route path="create" element={<UserCreate />} />
        </Route>
        <Route path="todo">
          <Route path="" index element={<TodoIndex />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/authen" element={<Authenticate />}>
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)

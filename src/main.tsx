import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Authenticate from './layouts/Authenticate'
import NotFound from './views/errors/NotFound'
import SignIn from './views/authen/sign-in/SignIn'
import Application from './layouts/Application'
import AppIndex from './views/app/Index'
import UserIndex from './views/app/users/UserIndex'
import UserCreate from './views/app/users/UserCreate'
import PostIndex from './views/app/posts/PostIndex'
import CategoryIndex from './views/app/categories/CategoryIndex'
import TodoIndex from './views/app/todo/TodoIndex'
import Register from './views/authen/register/Register'
import Forgot from './views/authen/forgot/Forgot'
import Landing from './layouts/Landing'
import LandingIndex from './views/landings/LandingIndex'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="" index element={<LandingIndex />} />
      </Route>

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
      </Route>
      <Route path="/auth" element={<Authenticate />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)

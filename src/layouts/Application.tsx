import { Component, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/headers/AppHeader'
import MainSidebar from '../components/sidebars/MainSidebar'
import '../assets/styles/app.css'

export default class Application extends Component {
  constructor(props: {}) {
    super(props)
    if (localStorage.getItem('color-mode') === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (localStorage.getItem('chroma') === 'monochrome') {
      document.body.classList.add('is-monochrome')
    }
  }

  render(): ReactNode {
    return (
      <>
        <MainSidebar />
        <AppHeader />
        <main className="main-content w-full px-[var(--margin-x)] pb-8">
          <Outlet />
        </main>
      </>
    )
  }
}

import { Component, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/headers/AppHeader'
import MainSidebar from '../components/sidebars/MainSidebar'
import SidebarPanel from '../components/sidebars/SidebarPanel'

export default class Application extends Component {
  render(): ReactNode {
    return (
      <>
        <SidebarPanel />
        <MainSidebar />
        <AppHeader />
        <main className="main-content w-full px-[var(--margin-x)] pb-8">
          <div className="flex items-center space-x-4 py-5 lg:py-6">
            <Outlet />
          </div>
        </main>
      </>
    )
  }
}

import { Component, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

export default class Authenticate extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
          <a href="#" className="flex items-center space-x-2">
            <img className="h-8 w-8" src="/logo.svg" alt="logo" />
            <p className="text-xl font-semibold uppercase text-slate-700 dark:text-navy-100">CENTELLA</p>
          </a>
        </div>
        <Outlet />
      </>
    )
  }
}

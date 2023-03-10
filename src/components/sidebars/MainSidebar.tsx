import { Component, ReactNode } from 'react'
import MainSidebarItem from './MainSidebarItem'

export default class MainSidebar extends Component {
  render(): ReactNode {
    return (
      <div className="main-sidebar">
        <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
          <div className="flex pt-4">
            <a href="/">
              <img className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src="/logo.svg" alt="logo" />
            </a>
          </div>

          <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6  text-slate-600 dark:text-slate-300">
            <MainSidebarItem icon="fad fa-home" href="/app" title="Home" />
            <MainSidebarItem icon="fad fa-newspaper" href="/app/posts" title="Posts" />
            <MainSidebarItem icon="fad fa-hurricane" href="/app/categories" title="Categories" />
            <MainSidebarItem icon="fad fa-list-check" href="/app/todo" title="Todo" />
            <MainSidebarItem icon="fad fa-users" href="/app/users" title="Users" />
          </div>

          <div className="flex flex-col items-center space-y-3 py-3  text-slate-600 dark:text-slate-300">
            <MainSidebarItem icon="fad fa-gear" href="#" title="Settings" />
          </div>
        </div>
      </div>
    )
  }
}

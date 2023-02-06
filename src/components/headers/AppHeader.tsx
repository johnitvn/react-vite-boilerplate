import { Component, ReactNode } from 'react'

export default class AppHeader extends Component {
  togleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-mode', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-mode', 'dark')
    }
  }

  togleMonoChrome() {
    if (document.body.classList.contains('is-monochrome')) {
      document.body.classList.remove('is-monochrome')
      localStorage.setItem('chroma', 'colorfull')
    } else {
      document.body.classList.add('is-monochrome')
      localStorage.setItem('chroma', 'monochrome')
    }
  }

  toogleSidebar() {
    if (!document.body.classList.contains('is-sidebar-open')) {
      document.body.classList.add('is-sidebar-open')
    } else {
      document.body.classList.remove('is-sidebar-open')
    }
  }

  render(): ReactNode {
    return (
      <nav className="header">
        {/* <!-- App Header  --> */}
        <div className="header-container relative flex w-full bg-white dark:bg-navy-700">
          {/* <!-- Header Items --> */}
          <div className="flex w-full items-center justify-between">
            {/* <!-- Left: Sidebar Toggle Button --> */}
            <div className="h-7 w-7">
              <button
                onClick={() => this.toogleSidebar()}
                className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 transform duration-300"
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            {/* <!-- Right: Header buttons --> */}
            <div className="-mr-1.5 flex items-center space-x-2">
              {/* <!-- Dark Mode Toggle --> */}
              <button
                onClick={() => this.togleDarkMode()}
                className="darkmode-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i className="fa-duotone fa-circle-half-stroke text-lg" />
              </button>

              {/* <!-- Monochrome Mode Toggle --> */}
              <button
                onClick={() => this.togleMonoChrome()}
                className="monochrome-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i className="fa-duotone fa-palette text-lg text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

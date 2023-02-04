import React from 'react'
import LandingDropdown from '../Dropdowns/LandingDropdown'

export default class LandingNav extends React.Component {
  render(): React.ReactNode {
    return (
      <nav id="header" className="w-full z-30 bg-indigo-500">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="no-underline hover:no-underline font-bold text-2xl text-white" href="/">
              React Vite
            </a>
          </div>
          <div className="items-center w-auto mt-0 bg-transparent p-0 z-20">
            <div className="list-reset justify-end flex-1 items-center">
              <LandingDropdown />
            </div>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    )
  }
}

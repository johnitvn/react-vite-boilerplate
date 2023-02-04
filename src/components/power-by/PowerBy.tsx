import React from 'react'

export default class PowerBy extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="grid grid-cols-6 text-black font-bold">
        <div>
          <a href="https://reactjs.org" className="px-12" target="_blank" rel="noreferrer">
            <img src="/react.svg" className="w-2/3 ml-[16%]" alt="React logo" />
          </a>
        </div>
        <div className="px-8">
          <a href="https://vitejs.dev" className="px-12" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="w-full" alt="Vite logo" />
          </a>
        </div>

        <div className="px-8">
          <a href="https://vitetest.dev" className="px-12" target="_blank" rel="noreferrer">
            <img src="/vite-test.svg" className="w-full" alt="Vite test logo" />
          </a>
        </div>

        <div className="px-8">
          <a href="https://tailwindcss.com/" className="px-12" target="_blank" rel="noreferrer">
            <img src="/tailwindcss.svg" className="w-full mt-5" alt="Tailwind css logo" />
          </a>
        </div>
        <div className="px-8">
          <a href="https://cypress.io/" className="px-12" target="_blank" rel="noreferrer">
            <img src="/cypress.jpeg" className="w-full" alt="Cypress logo" />
          </a>
        </div>
        <div className="px-8">
          <a href="https://cucumber.io/" className="px-12" target="_blank" rel="noreferrer">
            <img src="/cucumberjs.png" className="w-full" alt="CucumberJs logo" />
          </a>
        </div>
        <div className="px-8 text-center">React</div>
        <div className="px-8 text-center">Vite</div>
        <div className="px-8 text-center">Vite Test</div>
        <div className="px-8 text-center">Tailwind Css</div>
        <div className="px-8 text-center">Cypress</div>
        <div className="px-8 text-center">Cucumber</div>
      </div>
    )
  }
}

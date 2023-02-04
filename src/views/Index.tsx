import React from 'react'
import ReactLogo from '../assets/index/images/react.svg'
import ViteLogo from '../assets/index/images/vite.svg'
import ViteTestLogo from '../assets/index/images/vite-test.svg'
import TailwindCssLogo from '../assets/index/images/tailwindcss.svg'
import CypressLogo from '../assets/index/images/cypress.jpeg'
import CucumberLogo from '../assets/index/images/cucumberjs.png'
import Illustration from '../assets/index/images/illustration.png'

export const PowerBy: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-6 text-black font-bold">
      <div>
        <a href="https://reactjs.org" className="px-12" target="_blank" rel="noreferrer">
          <img src={ReactLogo} className="w-2/3 ml-[16%]" alt="React logo" />
        </a>
      </div>
      <div className="px-8">
        <a href="https://vitejs.dev" className="px-12" target="_blank" rel="noreferrer">
          <img src={ViteLogo} className="w-full" alt="Vite logo" />
        </a>
      </div>

      <div className="px-8">
        <a href="https://vitetest.dev" className="px-12" target="_blank" rel="noreferrer">
          <img src={ViteTestLogo} className="w-full" alt="Vite test logo" />
        </a>
      </div>

      <div className="px-8">
        <a href="https://tailwindcss.com/" className="px-12" target="_blank" rel="noreferrer">
          <img src={TailwindCssLogo} className="w-full mt-5" alt="Tailwind css logo" />
        </a>
      </div>
      <div className="px-8">
        <a href="https://cypress.io/" className="px-12" target="_blank" rel="noreferrer">
          <img src={CypressLogo} className="w-full" alt="Cypress logo" />
        </a>
      </div>
      <div className="px-8">
        <a href="https://cucumber.io/" className="px-12" target="_blank" rel="noreferrer">
          <img src={CucumberLogo} className="w-full" alt="CucumberJs logo" />
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

export default class Index extends React.Component {
  componentDidMount() {
    document.body.addEventListener('click', this.checkShouldShowMenu)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.checkShouldShowMenu)
  }

  checkShouldShowMenu(event: any): void {
    const target = (event && event.target) || (event && event.srcElement)
    const navMenuDiv = document.getElementById('nav-content')
    const navMenu = document.getElementById('nav-toggle')

    const checkParent = (target: any, elm: any) => {
      while (target.parentNode) {
        if (target === elm) {
          return true
        }
        target = target.parentNode
      }
      return false
    }

    if (navMenuDiv && !checkParent(target, navMenuDiv)) {
      // click NOT on the menu
      if (checkParent(target, navMenu)) {
        // click on the link
        if (navMenuDiv.classList.contains('hidden')) {
          navMenuDiv.classList.remove('hidden')
        } else {
          navMenuDiv.classList.add('hidden')
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDiv.classList.add('hidden')
      }
    }
  }

  render(): React.ReactNode {
    return (
      <div className="leading-normal tracking-normal text-white" style={{ background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)' }}>
        <nav id="header" className="w-full z-30 text-white">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                React Vite
              </a>
            </div>
            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className="w-full flex-grow lg:flex lg:items-center hidden lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">
                    Active
                  </a>
                </li>
                <li className="mr-3">
                  <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
                    link
                  </a>
                </li>
                <li className="mr-3">
                  <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
                    link
                  </a>
                </li>
              </ul>
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Action
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>

        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">Rapid Boilerplate!</h1>
              <p className="leading-normal text-2xl mb-8">Newest technologies, latest versions, regular maintenance and updates</p>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 z-50" src={Illustration} />
            </div>
          </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174">
            <g stroke="none" fill="none">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                />
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
              </g>
            </g>
          </svg>
        </div>
        <section className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Build With</h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <PowerBy />
          </div>
        </section>
      </div>
    )
  }
}

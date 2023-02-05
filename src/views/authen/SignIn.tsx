import { Component, ReactNode } from 'react'
import Banner from './banner.svg'

export default class SignIn extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="hidden min-h-screen w-full place-items-center lg:grid">
          <div className="w-full max-w-lg p-6">
            <img className="w-full" src={Banner} alt="image" />
          </div>
        </div>
        <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
          <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
            <div className="text-center">
              <img className="mx-auto h-16 w-16 lg:hidden" src="/logo.svg" alt="logo" />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">Welcome Back</h2>
                <p className="text-slate-400 dark:text-navy-300">Please sign in to continue</p>
              </div>
            </div>
            <div className="mt-16">
              <label className="relative flex">
                <input
                  className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                  placeholder="Username"
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-duotone fa-envelope" />
                </span>
              </label>
              <label className="relative mt-4 flex">
                <input
                  className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                  placeholder="Password"
                  type="password"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-duotone fa-lock-keyhole" />
                </span>
              </label>
              <div className="mt-4 flex items-center justify-between space-x-2">
                <label className="inline-flex items-center space-x-2">
                  <input
                    className="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                    type="checkbox"
                  />
                  <span className="line-clamp-1">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  Forgot Password?
                </a>
              </div>
              <button className="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                Sign In
              </button>
              <div className="mt-4 text-center text-xs+">
                <p className="line-clamp-1">
                  <span>Dont have Account?</span>

                  <a
                    className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                    href="pages-singup-2.html"
                  >
                    Create account
                  </a>
                </p>
              </div>
              <div className="my-7 flex items-center space-x-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
                <p>OR</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
              </div>
              <div className="flex space-x-4">
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                  <i className="fa-brands fa-google" />
                  <span>Google</span>
                </button>
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                  <i className="fa-brands fa-github" />
                  <span>Github</span>
                </button>
              </div>
            </div>
          </div>
          <div className="my-5 flex justify-center text-xs text-slate-400 dark:text-navy-300">
            <a href="#">Privacy Notice</a>
            <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
            <a href="#">Term of service</a>
          </div>
        </main>
      </>
    )
  }
}

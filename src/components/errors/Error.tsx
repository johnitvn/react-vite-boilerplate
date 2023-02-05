import { Component, ReactNode } from 'react'

import E401 from './error-401.svg'
import E404 from './error-404.svg'
import E500 from './error-500.svg'
import ErrorMessage from './ErrorMessage'

type ErrorProps = {
  code: 401 | 404 | 500
}

type DisplayData = {
  image: string
  title: string
  subTitle?: string
}

export default class Error extends Component<ErrorProps> {
  data: DisplayData

  constructor(props: ErrorProps) {
    super(props)

    switch (props.code) {
      case 401:
        this.data = {
          image: E401,
          title: 'You are not authorized',
          subTitle: 'You are missing the required rights to be able to access this page',
        }
        break
      case 404:
        this.data = {
          image: E404,
          title: 'Oops. This Page Not Found.',
          subTitle: 'This page you are looking not available. Please back to home',
        }
        break
      case 500:
        this.data = {
          image: E500,
          title: 'Internal Server Error',
          subTitle: 'The server has been deserted for a while. Please be patient or try again later',
        }
        break
      default:
        this.data = {
          image: E500,
          title: 'Somethings wrong',
          subTitle: 'The server has been deserted for a while. Please be patient or try again later',
        }
        break
    }
  }

  render(): ReactNode {
    return (
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="max-w-2xl p-6 text-center">
          <div className="w-full max-w-md">
            <img src={this.data.image} />
          </div>
          <ErrorMessage title={this.data.title} subtitle={this.data.subTitle} />
          <button className="btn mt-8 h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90">
            Back To Home
          </button>
        </div>
      </main>
    )
  }
}

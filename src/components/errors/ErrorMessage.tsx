import { Component, ReactNode } from 'react'

export type ErrorMessageProps = {
  title: string
  subtitle?: string
}

export default class ErrorMessage extends Component<ErrorMessageProps> {
  render(): ReactNode {
    return (
      <>
        <p className="pt-4 text-xl font-semibold text-slate-800 dark:text-navy-50">{this.props.title}</p>
        <p className="pt-2 text-slate-500 dark:text-navy-200">{this.props.subtitle}</p>
      </>
    )
  }
}

import { Component, ReactNode } from 'react'

export type MainSidebarItemProps = {
  href: string
  title: string
  icon: string
}

export default class MainSidebarItem extends Component<MainSidebarItemProps> {
  render(): ReactNode {
    return (
      <a
        href={this.props.href}
        data-tooltip={this.props.title}
        data-placement="right"
        className="tooltip-main-sidebar flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <i className={this.props.icon + ' text-xl'} />
      </a>
    )
  }
}

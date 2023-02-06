import { Component, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { WithRouter, WithRouterInteface } from '../hoc/WithRouter'

export type MainSidebarItemProps = WithRouterInteface & {
  href: string
  title: string
  icon: string
}

type MainSidebarItemState = {
  active: boolean
}

class MainSidebarItem extends Component<MainSidebarItemProps> {
  state: MainSidebarItemState = { active: false }

  componentDidMount() {
    this.updateActiveState()
  }

  componentDidUpdate(prevProps: MainSidebarItemProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.updateActiveState()
    }
  }

  updateActiveState() {
    const props = this.props
    let active: boolean
    if (this.props.href === '/app') {
      active = props.location.pathname === props.href
    } else {
      active = props.location.pathname.startsWith(props.href)
    }
    console.log('Check', { curren: props.location.pathname, me: props.href, active })
    this.setState({ active, lastPath: props.location.pathname })
  }

  render(): ReactNode {
    return (
      <Link
        to={this.props.href}
        data-tooltip={this.props.title}
        data-placement="right"
        className={(this.state.active ? 'active ' : '') + 'tooltip-main-sidebar flex h-11 w-11 items-center justify-center rounded-lg outline-none '}
      >
        <i className={this.props.icon + ' text-xl'} />
      </Link>
    )
  }
}

export default WithRouter(MainSidebarItem)

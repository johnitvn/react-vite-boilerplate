import { Component, ReactNode } from 'react'
import SidebarPanel from '../../../components/sidebars/SidebarPanel'

export default class UserIndex extends Component {
  render(): ReactNode {
    return (
      <>
        <SidebarPanel />
        <h1>Users Index</h1>
      </>
    )
  }
}

import { Component, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

export default class Landing extends Component {
  render(): ReactNode {
    return (
      <>
        <Outlet />
      </>
    )
  }
}

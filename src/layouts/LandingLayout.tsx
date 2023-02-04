import React from 'react'
import LandingNav from '../components/Navs/LandingNav'
import { Outlet } from 'react-router-dom'

export default class LandingLayout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <LandingNav />
        <Outlet />
      </>
    )
  }
}

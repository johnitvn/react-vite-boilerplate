import { Component, ReactNode } from 'react'
import PageHeader from '../../components/headers/PageHeader'

export default class Index extends Component {
  render(): ReactNode {
    return <PageHeader title="Dashboard" />
  }
}

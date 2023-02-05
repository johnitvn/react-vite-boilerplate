import { Component, ReactNode } from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import PageHeaderButton from '../../../components/headers/PageHeaderButton'
import PageHeaderSearch from '../../../components/headers/PageHeaderSearch'

export default class TodoIndex extends Component {
  render(): ReactNode {
    return (
      <>
        <PageHeader title="Todo">
          <div className="flex items-center">
            <PageHeaderSearch placeholder="Search todo..." />
            <PageHeaderButton iconType="duotone" iconName="bars-filter" />
            <PageHeaderButton iconType="duotone" iconName="plus" />
          </div>
        </PageHeader>
      </>
    )
  }
}

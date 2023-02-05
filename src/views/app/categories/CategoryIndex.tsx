import { Component, ReactNode } from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import PageHeaderButton from '../../../components/headers/PageHeaderButton'
import PageHeaderSearch from '../../../components/headers/PageHeaderSearch'
import SidebarPanel from '../../../components/sidebars/SidebarPanel'

export default class CategoryIndex extends Component {
  render(): ReactNode {
    return (
      <>
        <PageHeader title="Categories">
          <div className="flex items-center">
            <PageHeaderSearch placeholder="Search category..." />
            <PageHeaderButton iconType="duotone" iconName="bars-filter" />
            <PageHeaderButton iconType="duotone" iconName="plus" />
          </div>
        </PageHeader>
      </>
    )
  }
}

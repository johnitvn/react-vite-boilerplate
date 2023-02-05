import PageHeaderTitle from './PageHeaderTitle'

const PageHeader = ({ title, children }: { title: string; children?: JSX.Element }): JSX.Element => (
  <div className="flex items-center justify-between py-5 lg:py-6">
    <PageHeaderTitle title={title} />
    {children}
  </div>
)

export default PageHeader

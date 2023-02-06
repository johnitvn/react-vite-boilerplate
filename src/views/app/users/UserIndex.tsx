import { Component, ReactNode } from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import PageHeaderButton from '../../../components/headers/PageHeaderButton'
import PageHeaderSearch from '../../../components/headers/PageHeaderSearch'
import { WithRouter, WithRouterInteface } from '../../../components/hoc/WithRouter'
import Pagination from '../../../components/pagination/Pagination'

class UserIndex extends Component<WithRouterInteface> {
  onCreateUser() {
    this.props.navigate('create')
  }

  render(): ReactNode {
    return (
      <>
        <PageHeader title="Users">
          <div className="flex items-center">
            <PageHeaderSearch placeholder="Search user..." />
            <PageHeaderButton iconType="duotone" iconName="bars-filter" />
            <PageHeaderButton iconType="duotone" iconName="plus" onClick={() => this.onCreateUser()} />
          </div>
        </PageHeader>

        <div className="card">
          <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  #
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Avatar
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Age
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Phone
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Role
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">John Doe</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">24</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">443-893-2318</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">Superadmin</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Sabina Mores</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">26</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">563-516-8941</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">Author</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Tom Robert</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">29</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">897-154-7469</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">Admin</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Nolan Doe</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">22</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">443-893-2318</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">Author</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">5</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">John Doe</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">24</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">443-893-2318</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">Superadmin</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">6</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Sabina Mores</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">26</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">563-516-8941</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">Author</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">7</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Tom Robert</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">29</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">897-154-7469</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">Admin</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
              <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">8</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="avatar flex h-10 w-10">
                    <img className="mask is-squircle" src="https://via.placeholder.com/200" alt="avatar" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">Nolan Doe</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">22</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">443-893-2318</td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="badge rounded-full bg-info/10 text-info dark:bg-info/15">Author</div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <label className="inline-flex items-center">
                    <input
                      className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination current={10} total={10} />
        </div>
      </>
    )
  }
}

export default WithRouter(UserIndex)

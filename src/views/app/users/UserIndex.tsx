import { Component, ReactNode } from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import PageHeaderButton from '../../../components/headers/PageHeaderButton'
import PageHeaderSearch from '../../../components/headers/PageHeaderSearch'
import { WithRouter, WithRouterInteface } from '../../../components/hoc/WithRouter'

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
            </tbody>
          </table>
          <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
            <div className="flex items-center space-x-2 text-xs+">
              <span>Show</span>
              <label className="block">
                <select className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                  <option>10</option>
                  <option>30</option>
                  <option>50</option>
                </select>
              </label>
              <span>entries</span>
            </div>

            <ol className="pagination">
              <li className="rounded-l-lg bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  1
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                >
                  2
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  3
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  4
                </a>
              </li>
              <li className="bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  5
                </a>
              </li>
              <li className="rounded-r-lg bg-slate-150 dark:bg-navy-500">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ol>

            <div className="text-xs+">1 - 10 of 10 entries</div>
          </div>
        </div>
      </>
    )
  }
}

export default WithRouter(UserIndex)

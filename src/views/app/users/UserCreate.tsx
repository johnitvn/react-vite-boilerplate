import { Component, ReactNode } from 'react'
import Input from '../../../components/forms/Input'
import PageHeader from '../../../components/headers/PageHeader'

export default class UserCreate extends Component {
  render(): ReactNode {
    return (
      <>
        <PageHeader title="Create new user" />

        <div className="card p-4 sm:p-5 max-w-[600px]">
          <div className="mt-4 space-y-4">
            <Input iconType="duotone" iconName="user" placeHolder="Username" label="Username" />
            <Input iconType="duotone" iconName="envelope" placeHolder="Username" label="Email" />
            <Input iconType="duotone" iconName="key" placeHolder="Username" label="Password" type="password" />
            <Input iconType="duotone" iconName="key" placeHolder="Username" label="Confirm Password" type="password" />
            <div className="flex justify-end space-x-2 pt-8">
              <button className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                <span>Reset</span>
              </button>
              <button className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

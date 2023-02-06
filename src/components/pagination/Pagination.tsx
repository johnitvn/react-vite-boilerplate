/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/jsx-key */
/* eslint-disable  eqeqeq */

type PagingationInfoProps = {
  from?: number
  to?: number
  total?: number
  message?: string
}

type PagingationPerPageConfigProps = {
  perPageOptions?: Array<number>
}

type PagingationProps = PagingationInfoProps &
  PagingationPerPageConfigProps & {
    current: number
    total: number
  }

const PerPageConfiguration = (): JSX.Element => (
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
)

const PaginItem = ({ page, active }: { page: number; active: boolean }): JSX.Element => {
  const inactiveClasses =
    'flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 dark:hover:bg-navy-450 dark:focus:bg-navy-450'
  const activeClasses = 'flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors text-white bg-primary'
  const classes = active ? activeClasses : inactiveClasses

  return (
    <li className="bg-slate-150 dark:bg-navy-500">
      <button className={classes}>{page}</button>
    </li>
  )
}

const Paging = (props: PagingationProps): JSX.Element => {
  let start: number, stop: number

  if (props.current + 2 > props.total) {
    start = props.total - 5 > 0 ? props.total - 5 : 1
    stop = start + 5
  } else if (props.current - 2 > 0) {
    start = props.current - 2
    stop = props.current + 2
  } else {
    start = 1
    stop = 5
  }

  const pages = Array.from({ length: stop - start + 1 }, (value, index) => start + index)

  const content = pages.map((page: number) => {
    return <PaginItem page={page} active={page == props.current} />
  })

  return (
    <ol className="pagination">
      <li className="rounded-l-lg bg-slate-150 dark:bg-navy-500">
        <button
          disabled={props.current == 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </li>
      {content}
      <li className="rounded-r-lg bg-slate-150 dark:bg-navy-500">
        <button
          disabled={props.current == props.total}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </li>
    </ol>
  )
}

const PagingInfo = (): JSX.Element => <div className="text-xs+">1 - 10 of 10 entries</div>

const Pagingation = (props: PagingationProps): JSX.Element => {
  let perPageConfiguration = <></>
  let paging = <></>

  paging = <Paging current={props.current} total={props.total} />

  if (props.perPageOptions) {
    perPageConfiguration = <PerPageConfiguration />
  }
  return (
    <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
      {perPageConfiguration}
      {paging}
    </div>
  )
}

export default Pagingation

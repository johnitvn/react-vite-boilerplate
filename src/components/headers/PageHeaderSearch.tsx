const PageHeaderSearch = ({ placeholder }: { placeholder: string }): JSX.Element => {
  return (
    <label className="relative hidden sm:flex mx-4">
      <input
        className="form-input peer h-9 w-full rounded-full border border-slate-400 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-500/100 hover:border-slate-400 focus:border-primary dark:border-navy-600 dark:hover:border-navy-500 dark:focus:border-accent"
        placeholder={placeholder}
        type="text"
      />
      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
        <i className="fad fa-search" />
      </span>
    </label>
  )
}

export default PageHeaderSearch

const PageHeaderButton = ({ iconType, iconName, onClick }: { iconType: string; iconName: string; onClick?: () => void }): JSX.Element => {
  return (
    <button
      onClick={() => (onClick ? onClick() : {})}
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9"
    >
      <i className={`fa-${iconType} fa-${iconName} text-slate-700 dark:text-slate-200`} />
    </button>
  )
}

export default PageHeaderButton

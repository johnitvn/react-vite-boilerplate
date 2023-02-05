type IconProps = {
  iconType: string
  iconName: string
}

type InputProps = IconProps & {
  placeHolder: string
  label: string
  type?: string
}

const Input = ({ iconType, iconName, placeHolder, label, type }: InputProps): JSX.Element => (
  <label className="block">
    <span>{label}</span>
    <span className="relative mt-1.5 flex">
      <input
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
        placeholder={placeHolder}
        type={type ?? 'text'}
      />
      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
        <i className={`fa-${iconType} fa-${iconName} text-base`} />
      </span>
    </span>
  </label>
)

export default Input

const TextArea = ({ rows, placeHolder, label }: { rows: number; placeHolder: string; label: string }): JSX.Element => (
  <label className="block pt-4">
    <span>{label}</span>
    <textarea
      rows={rows}
      placeholder={placeHolder}
      className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    />
  </label>
)

export default TextArea

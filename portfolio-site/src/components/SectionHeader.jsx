function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-5 max-w-3xl">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
    </div>
  )
}

export default SectionHeader

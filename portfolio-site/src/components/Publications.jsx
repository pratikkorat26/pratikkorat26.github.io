import SectionHeader from './SectionHeader'

function Publications({ items }) {
  return (
    <section id="publications" className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader eyebrow="Research" title="Publications" />
        <div className="grid gap-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.venue}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
              >
                Read Publication
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

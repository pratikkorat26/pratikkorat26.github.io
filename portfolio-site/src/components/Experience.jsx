import SectionHeader from './SectionHeader'
import HighlightKeywords from './HighlightKeywords'

function Experience({ items }) {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <SectionHeader eyebrow="Career Journey" title="Work Experience" />
        <div className="space-y-4">
          {items.map((item) => (
            <article key={`${item.role}-${item.company}`} className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-sm font-semibold text-slate-900">
                  <HighlightKeywords text={item.role} />
                </h3>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-slate-700">
                <HighlightKeywords text={item.company} />
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {item.highlights.map((point) => (
                  <li key={point}>
                    <HighlightKeywords text={point} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

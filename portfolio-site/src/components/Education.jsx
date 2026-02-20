import SectionHeader from './SectionHeader'

function Education({ items }) {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader eyebrow="Academic Background" title="Education" />
        <div className="space-y-3">
          {items.map((item) => (
            <article key={item.degree} className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-base font-semibold text-slate-900">{item.degree}</h3>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-slate-700">{item.school}</p>
              <p className="mt-2 text-sm text-slate-700">GPA: {item.gpa}</p>
              {item.coursework.length > 0 ? (
                <p className="mt-2 text-sm text-slate-600">Coursework: {item.coursework.join(' | ')}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

import SectionHeader from './SectionHeader'

function About({ summary, stats }) {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <SectionHeader eyebrow="Profile" title="About Me" description={summary} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-md border border-slate-200 bg-white p-4">
              <p className="text-xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

import HighlightKeywords from './HighlightKeywords'

function Hero({ data }) {
  return (
    <section id="home" className="border-b border-slate-200 bg-white">
      <div className="container-width py-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{data.role}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{data.name}</h1>
            <p className="mt-2 text-base font-medium text-slate-800">
              <HighlightKeywords text={data.heroHeadline} />
            </p>
            <p className="mt-3 max-w-3xl text-base text-slate-700">
              <HighlightKeywords text={data.summary} />
            </p>

            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              {data.heroHighlights.map((item) => (
                <li key={item} className="list-disc pl-1 ml-4">
                  <HighlightKeywords text={item} />
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="#projects"
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                View Projects
              </a>
              <a
                href={data.resumeFile}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a href="#contact" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Contact
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
              <a href={data.socials.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                LinkedIn
              </a>
              <a href={`mailto:${data.email}`} className="hover:text-slate-900">
                Email
              </a>
            </div>
          </div>

          <aside className="rounded-md border border-slate-200 bg-slate-50 p-3.5">
            <img
              src={data.profileImage}
              alt={`${data.name} profile`}
              className="mx-auto h-28 w-28 rounded-full object-cover ring-1 ring-slate-200"
            />
            <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Quick Snapshot</p>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {data.heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded border border-slate-200 bg-white p-3">
                  <p className="text-lg font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-600">
              Current role: <span className="font-medium text-slate-800">{data.currentRole}</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero

import SectionHeader from './SectionHeader'
import HighlightKeywords from './HighlightKeywords'

function Skills({ categories }) {
  return (
    <section id="skills" className="py-7 sm:py-8">
      <div className="container-width">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & Expertise"
          description="Focused on production ML systems, LLM optimization, and reliable deployment."
        />
        <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
          {categories.map((category) => (
            <article
              key={category.title}
              className="grid gap-1.5 border-b border-slate-200 px-4 py-2.5 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-3"
            >
              <h3 className="text-sm font-semibold text-slate-900">{category.title}</h3>
              <div className="text-sm text-slate-700">
                <HighlightKeywords text={category.items.join(', ')} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

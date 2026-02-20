import SectionHeader from './SectionHeader'
import HighlightKeywords from './HighlightKeywords'

function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          description="Real ML/AI systems with measurable performance, reliability, and deployment outcomes."
        />
        <div className="space-y-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">
                <HighlightKeywords text={project.title} />
              </h3>
              <p className="mt-1.5 text-sm font-medium text-slate-900">
                <HighlightKeywords text={project.impact} />
              </p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                <HighlightKeywords text={project.description} />
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700">
                    <HighlightKeywords text={tech} />
                  </span>
                ))}
              </div>
              {project.link && project.link !== '#' ? (
                <a
                  href={project.link}
                  className="mt-4 inline-block text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project Link
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

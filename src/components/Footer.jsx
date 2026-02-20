function Footer({ name, links }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-width flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-500 sm:flex-row">
        <p>{new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            LinkedIn
          </a>
          <a href="mailto:korat.pratik1@gmail.com" className="hover:text-slate-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

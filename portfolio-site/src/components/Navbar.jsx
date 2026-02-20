import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

function Navbar({ links, name, resumeFile }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide text-slate-900">
          {name}
        </a>

        <button
          type="button"
          className="inline-flex rounded-md border border-slate-300 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
        </button>

        <div className="hidden items-center gap-5 md:flex">
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <a className="text-xs text-slate-600 hover:text-slate-900" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            Resume
          </a>
        </div>

      </nav>

      {open ? (
        <ul className="space-y-3 border-t border-slate-200 bg-white p-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className="block text-sm text-slate-600 hover:text-slate-900"
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="block text-sm font-medium text-slate-700 hover:text-slate-900"
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  )
}

export default Navbar

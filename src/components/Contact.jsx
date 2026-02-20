import SectionHeader from './SectionHeader'

function Contact({ data }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const mailto = `mailto:${data.email}?subject=Portfolio inquiry from ${encodeURIComponent(
      name,
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <SectionHeader eyebrow="Let us Connect" title="Contact" description="Open to ML engineering and AI product opportunities." />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-md border border-slate-200 bg-white p-5">
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-800">Email: </span>
                <a href={`mailto:${data.email}`} className="hover:text-blue-700">
                  {data.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-800">Phone: </span>
                <a href={`tel:${data.phone.replaceAll(' ', '')}`} className="hover:text-blue-700">
                  {data.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-800">Location: </span>
                {data.location}
              </li>
            </ul>
            <div className="mt-5 flex gap-4 text-sm text-slate-600">
              <a href={data.socials.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </article>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-md border border-slate-200 bg-white p-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-slate-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-700"
              />
            </div>
            <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { fetchMediumPosts } from '../lib/fetchMediumPosts'
import HighlightKeywords from './HighlightKeywords'

function Blogs({ mediumProfile, fallbackPosts = [] }) {
  const [posts, setPosts] = useState(fallbackPosts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true

    const loadPosts = async () => {
      try {
        const mediumPosts = await fetchMediumPosts(mediumProfile)
        if (!mounted) return
        if (mediumPosts.length > 0) {
          setPosts(mediumPosts)
        }
      } catch {
        if (mounted) {
          setError('Unable to load latest posts right now.')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadPosts()
    return () => {
      mounted = false
    }
  }, [mediumProfile])

  return (
    <section id="blogs" className="section-padding">
      <div className="container-width">
        <SectionHeader
          eyebrow="Writing"
          title="Blogs"
          description="ML engineering notes and practical lessons from production systems."
        />

        {loading ? <p className="text-sm text-slate-500">Loading latest posts...</p> : null}
        {error ? (
          <p className="mb-3 text-sm text-slate-600">
            {error}{' '}
            <a href={mediumProfile} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              Visit Medium profile
            </a>
          </p>
        ) : null}

        {posts.length > 0 ? (
          <ul className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
            {posts.map((post) => (
              <li key={post.link} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-800 hover:text-slate-900 hover:underline"
                >
                  <HighlightKeywords text={post.title} />
                </a>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  {post.displayDate ? <span>{post.displayDate}</span> : null}
                  <a href={post.link} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    Read on Medium
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

export default Blogs

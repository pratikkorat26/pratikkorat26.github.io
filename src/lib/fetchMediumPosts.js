const toDisplayDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

const normalizePosts = (posts) =>
  posts
    .map((post) => ({
      title: post.title,
      link: post.link,
      pubDate: post.pubDate,
      displayDate: toDisplayDate(post.pubDate),
    }))
    .filter((post) => post.title && post.link)

const profileToFeedUrl = (mediumProfile) => {
  if (!mediumProfile) return 'https://medium.com/feed/@pratikkorat1'
  const cleaned = mediumProfile.trim().replace(/\/+$/, '')
  if (cleaned.includes('/feed/')) return cleaned
  return cleaned.replace('medium.com/', 'medium.com/feed/')
}

const fetchFromServerlessApi = async () => {
  const response = await fetch('/api/medium')
  if (!response.ok) {
    throw new Error('Serverless API unavailable')
  }

  const payload = await response.json()
  const posts = Array.isArray(payload.posts) ? payload.posts : []
  return normalizePosts(posts)
}

const fetchFromRss2Json = async (mediumProfile) => {
  const feedUrl = profileToFeedUrl(mediumProfile)
  const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
  const response = await fetch(rssToJsonUrl)
  if (!response.ok) {
    throw new Error('RSS bridge unavailable')
  }

  const payload = await response.json()
  const items = Array.isArray(payload.items) ? payload.items : []
  const mapped = items.slice(0, 8).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
  }))
  return normalizePosts(mapped)
}

export async function fetchMediumPosts(mediumProfile) {
  try {
    const posts = await fetchFromServerlessApi()
    if (posts.length > 0) return posts
  } catch {
    // Falls back to client-side feed bridge in local dev.
  }

  return fetchFromRss2Json(mediumProfile)
}

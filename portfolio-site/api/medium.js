const MEDIUM_FEED_URL = 'https://medium.com/feed/@pratikkorat1'

const decodeEntities = (text = '') =>
  text
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")

const stripCdata = (text = '') => text.replace('<![CDATA[', '').replace(']]>', '').trim()

const extractTag = (block, tagName) => {
  const matcher = new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, 'i')
  const match = block.match(matcher)
  return match?.[1] ?? ''
}

const parseMediumRss = (xml) => {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? []
  return itemBlocks
    .map((item) => {
      const title = decodeEntities(stripCdata(extractTag(item, 'title')))
      const link = decodeEntities(stripCdata(extractTag(item, 'link')))
      const pubDate = stripCdata(extractTag(item, 'pubDate'))
      return { title, link, pubDate }
    })
    .filter((item) => item.title && item.link)
}

export default async function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      headers: {
        Accept: 'application/rss+xml, application/xml;q=0.9',
      },
    })

    if (!response.ok) {
      return res.status(502).json({ error: 'Unable to fetch Medium feed' })
    }

    const xml = await response.text()
    const posts = parseMediumRss(xml).slice(0, 8)

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')
    return res.status(200).json({ posts })
  } catch {
    return res.status(500).json({ error: 'Failed to load Medium posts' })
  }
}

import { GetServerSideProps } from 'next'
import { SiteMap } from 'lib/types'
import { host } from 'lib/config'
import { getSiteMaps } from 'lib/get-site-maps'

<<<<<<<< HEAD:pages/api/sitemap.xml.ts
import { SiteMap } from '../../lib/types'
import { host } from '../../lib/config'
import { getSiteMaps } from '../../lib/get-site-maps'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
========
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
>>>>>>>> d1e495e (feat: Change sitemap.xml, robots.xml end-point):pages/sitemap.xml.tsx
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.write({ error: 'method not allowed' })
    res.end()
    return {
      props: {}
    }
  }

  const siteMaps = await getSiteMaps()

  // cache sitemap for up to one hour
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
  )
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(siteMaps[0]))
  res.end()

  return {
    props: {}
  }
}

const createSitemap = (siteMap: SiteMap) =>
  `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
      </url>

      <url>
        <loc>${host}/</loc>
      </url>

      ${Object.keys(siteMap.canonicalPageMap)
        .map((canonicalPagePath) =>
          `
            <url>
              <loc>${host}/${canonicalPagePath}</loc>
            </url>
          `.trim()
        )
        .join('')}
    </urlset>
<<<<<<<< HEAD:pages/api/sitemap.xml.ts
  </xml>
  `
========
    `

const SiteMapXml: React.FC = () => null

export default SiteMapXml
>>>>>>>> d1e495e (feat: Change sitemap.xml, robots.xml end-point):pages/sitemap.xml.tsx
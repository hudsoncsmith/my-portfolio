import '../styles/global.css'
import '../styles/simple-loading.css'
import Head from 'next/head'
import CustomSidebar from '../components/CustomNavbar'
import SimpleLoadingAnimation from '../components/SimpleLoadingAnimation'
import { useState, useEffect } from 'react'

const SITE_URL = 'https://www.hudsoncsmith.com'
const SITE_TITLE = 'Hudson C. Smith'
const SITE_DESCRIPTION = 'Robotics engineer building automation systems for aerospace, defense, and manufacturing.'
const SITE_THUMBNAIL_DESCRIPTION = 'Creative Problem Solver - Roboticist, Physicist, Mechanical Engineer'
const SITE_IMAGE = `${SITE_URL}/images/og_image.jpg`

const HAS_LOADED_KEY = 'hasShownIntroLoader'

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  // Only run on client-side
  useEffect(() => {
    // Only play the full intro animation once per browser session -
    // every other navigation (including full page loads triggered by
    // plain <a> links elsewhere in the site) should feel instant.
    const alreadyShown = sessionStorage.getItem(HAS_LOADED_KEY)
    if (alreadyShown) {
      setShowIntro(false)
      setLoading(false)
    } else {
      sessionStorage.setItem(HAS_LOADED_KEY, 'true')
    }

    setMounted(true)
  }, [])

  const handleLoadingFinished = () => {
    setLoading(false)
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />

        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_THUMBNAIL_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_THUMBNAIL_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
      </Head>

      {/* Show nothing else during server-side rendering to prevent hydration errors */}
      {mounted && (
        <>
          {showIntro && loading && <SimpleLoadingAnimation onFinished={handleLoadingFinished} />}

          <div className={`page-transition ${loading ? '' : 'page-transition-visible'}`}>
            <CustomSidebar />
            <div className="main-content">
              <Component {...pageProps} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

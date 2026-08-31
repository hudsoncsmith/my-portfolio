import '../styles/global.css'
import '../styles/simple-loading.css'
import CustomSidebar from '../components/CustomNavbar'
import SimpleLoadingAnimation from '../components/SimpleLoadingAnimation'
import { useState, useEffect } from 'react'

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

  // Show nothing during server-side rendering to prevent hydration errors
  if (!mounted) return null

  return (
    <>
      {showIntro && loading && <SimpleLoadingAnimation onFinished={handleLoadingFinished} />}

      <div className={`page-transition ${loading ? '' : 'page-transition-visible'}`}>
        <CustomSidebar />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

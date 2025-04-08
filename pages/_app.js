import '../styles/global.css'
import '../styles/simple-loading.css'
import CustomSidebar from '../components/CustomNavbar'
import SimpleLoadingAnimation from '../components/SimpleLoadingAnimation'
import { useState, useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setMounted(true)

    // If you want to skip the loading animation during development
    // uncomment the line below
    // setLoading(false)
  }, [])

  const handleLoadingFinished = () => {
    setLoading(false)
  }

  // Show nothing during server-side rendering to prevent hydration errors
  if (!mounted) return null

  return (
    <>
      {loading && <SimpleLoadingAnimation onFinished={handleLoadingFinished} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <CustomSidebar />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

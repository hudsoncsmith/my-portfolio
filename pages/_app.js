import '../styles/global.css'
import CustomSidebar from '../components/CustomNavbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomSidebar />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </>
  )
}

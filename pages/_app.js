import '@/styles/globals.css'
import Navbar from '../components/Navbar';
import Memorial from '../memorial';


export default function App({ Component, pageProps }) {
  return (
    <>

  <Component {...pageProps} />
 {/* <Memorial /> */}
  </>
  )
}

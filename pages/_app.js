import Top from '../src/component/layout/Top.js'
import Footer from '../src/component/layout/Footer.js'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'



function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )

}

export default MyApp

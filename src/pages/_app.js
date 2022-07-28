import Header from '../common/Components/Header/Header'
import Footer from '../common/Components/Footer/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="body" className="wrapper">
      <div className="desktop supership">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>

    </div>
  )
}



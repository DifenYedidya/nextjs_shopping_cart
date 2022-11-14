import '../styles/globals.css'
import Layout from '../widgets/layout/layout'
import 'react-responsive-modal/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

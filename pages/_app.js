import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import "../styles/tailwind.css";
import "../styles/slick.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])

  return <Component {...pageProps} />;
}

export default MyApp;

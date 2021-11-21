import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import useSWR, { SWRConfig } from "swr";


function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig><Component {...pageProps} /></SWRConfig>)
}

export default MyApp

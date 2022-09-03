import '../../public/styles/globals.css';//must be after bootsrap to apply css reset
import "bootstrap/dist/css/bootstrap.min.css"



import Head from "next/head"; 

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
import Layout from '@/components'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header.jsx'
import '@/styles/globals.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <Head>
          <title>FantasiStore - Product in your door</title>
        </Head>
      </Header>
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

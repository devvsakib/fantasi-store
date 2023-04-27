import Footer from '@/components/Footer'
import Header from '@/components/Header/Header.jsx'
import ContextProvider from '@/context'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Header>
        </Header>
        <Toaster />
        <Component {...pageProps} />
      </ContextProvider>
      <Footer />
    </>
  )
}

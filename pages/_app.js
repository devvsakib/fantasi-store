import Footer from '@/components/Footer'
import Header from '@/components/Header/Header.jsx'
import { CartProvider } from '@/context/CartProvider'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
      </Header>
      <Toaster />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <Footer />
    </>
  )
}

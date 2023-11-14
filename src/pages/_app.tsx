import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { CartProvider } from '../contexts/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

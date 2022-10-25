/* eslint-disable @next/next/inline-script-id */
import { GlobalStyle } from '../styles';
import { Nunito } from '@next/font/google';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>

      <GlobalStyle />
      <Component className={nunito.className} {...pageProps} />
    </>
  );
}

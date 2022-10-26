/* eslint-disable @next/next/inline-script-id */
import { GlobalStyle } from '../styles';
import { Nunito } from '@next/font/google';
import Script from 'next/script';
import { getCookie } from 'cookies-next';

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito();

export default function App({ Component, pageProps }) {
  const consent = getCookie('localConsent');
  return (
    <>
      <Script
        id='gtag'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER}');`,
        }}
      />

      {consent === true && (
        <Script
          id='consupd'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}

      <GlobalStyle />
      <Component className={nunito.className} {...pageProps} />
    </>
  );
}

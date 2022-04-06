// components/head.js
import * as React from 'react';
import NextHead from 'next/head';
import { GoogleFonts } from 'next-google-fonts';

import { HeadProps } from 'head/types';

export const Head = ({ children, title }: HeadProps): JSX.Element => (
  <>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap' />
    <NextHead>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />

      <meta name='theme-color' content='#ff827b' />
      <meta name='Nadine Pesso | Frontend Developer' content='Portfolio' />
      <meta
        name='description'
        content='Nadine Pesso | Frontend Developer Portfolio'
      ></meta>

      <title>{title}</title>

      <link rel='canonical' href='https://nadinepesso.com' />
      <link rel='apple-touch-icon' href='/assets/logo/logo_black.svg' />
      <link
        rel='shortcut icon'
        type='image/png'
        href='assets/logo/favicon.ico'
      />

      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-161836118-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-161836118-1');
      </script> */}

      {children}
    </NextHead>
  </>
);

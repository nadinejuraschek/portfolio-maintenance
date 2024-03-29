// components/head.js
import * as React from 'react';

import { HeadProps } from 'head/types';
import NextHead from 'next/head';

export const Head = ({ children, title }: HeadProps): JSX.Element => (
  <>
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

      {children}
    </NextHead>
  </>
);

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { GlobalStyle } from '../styles';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-THNZ5T5' });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

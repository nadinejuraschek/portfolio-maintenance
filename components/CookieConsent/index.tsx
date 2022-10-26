import { Actions, Button, Container } from './styles';
import { hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export const CookieConsent = (): JSX.Element => {
  const [consent, setConsent] = useState(true);

  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    // eslint-disable-next-line no-undef
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  return (
    <Container>
      This website uses cookies to track page views.
      <Actions>
        <Button onClick={() => denyCookie()}>Reject</Button>
        <Button
          onClick={() => {
            acceptCookie();
          }}
          primary
        >
          Accept
        </Button>
      </Actions>
    </Container>
  );
};

import Image from 'next/image';
import { Social } from 'components';
import {
  ContactFooter,
  ContactOptions,
  Copyright,
  Empty,
  Layout,
  Illustration,
  StyledText,
  StyledTitle,
} from './styles';

import construction from 'assets/illustrations/construction.png';

import { socials, SocialLink } from 'data';

export const Maintenance = (): JSX.Element => (
  <>
    <Layout>
      <Illustration>
        <Image alt='Under Construction' placeholder='blur' src={construction} />
      </Illustration>
      <StyledTitle centered>Under Construction</StyledTitle>
      <StyledText centered>
        Come back soon to see a brand new portfolio! In the meantime, feel free
        to schedule a call or send me a message.
      </StyledText>
    </Layout>
    <ContactFooter>
      <Copyright>© {new Date().getFullYear()} Nadine Pesso</Copyright>
      <ContactOptions>
        {socials.map(
          (social: SocialLink, index: number): JSX.Element => (
            <Social
              animated
              color='var(--neutral_01)'
              hoverColor='var(--tertiary)'
              key={index}
              link={social.link}
              type={social.type}
            />
          )
        )}
      </ContactOptions>
      <Empty />
    </ContactFooter>
  </>
);

import {
  ContactFooter,
  ContactOptions,
  Copyright,
  Empty,
  Illustration,
  Layout,
  StyledImage,
  StyledText,
  StyledTitle,
} from './styles';
import { SocialLink, socials } from 'data';

import { Social } from 'components';
import construction from 'assets/illustrations/construction.png';

export const Maintenance = (): JSX.Element => (
  <>
    <Layout>
      <Illustration>
        <StyledImage
          alt='Under Construction'
          placeholder='blur'
          src={construction}
        />
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

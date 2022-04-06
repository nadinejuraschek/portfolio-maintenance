import { Social } from 'components';
import { SocialLink, socials } from 'data';
import { Container, Divider, Socials } from './styles';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Socials>
        {socials.map((item: SocialLink, index: number): JSX.Element => {
          const { link, type } = item;
          return (
            <Social
              color='var(--neutral_01)'
              hoverColor='var(--tertiary)'
              key={index}
              link={link}
              type={type}
            />
          );
        })}
      </Socials>
      <Divider />© {currentYear} Nadine Pesso
    </Container>
  );
};

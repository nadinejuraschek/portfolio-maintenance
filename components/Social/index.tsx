import { IconLink } from './styles';
import { SocialProps } from './types';

import GithubIcon from 'assets/icons/github.svg';
import LinkedInIcon from 'assets/icons/linkedin.svg';
import MailIcon from 'assets/icons/mail.svg';
import PhoneIcon from 'assets/icons/phone.svg';
import XingIcon from 'assets/icons/xing.svg';

export const Social = ({
  animated = false,
  className = '',
  color = 'var(--secondary)',
  hoverColor = 'var(--neutral_01)',
  link,
  type = 'github',
}: SocialProps): JSX.Element => {
  const renderIcon = () => {
    switch (type) {
      case 'calendly':
        return <PhoneIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'github':
        return <GithubIcon />;
      case 'mail':
        return <MailIcon />;
      case 'xing':
        return <XingIcon />;
      default:
        return <GithubIcon />;
    }
  };

  return (
    <IconLink
      animated={animated}
      aria-label={type}
      className={className}
      color={color}
      hoverColor={hoverColor}
      href={link}
      target='_blank'
    >
      {renderIcon()}
    </IconLink>
  );
};

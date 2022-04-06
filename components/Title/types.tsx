import { ComponentType } from 'react';

export interface TitleProps {
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  centered?: boolean;
  forwardedAs?: keyof JSX.IntrinsicElements | ComponentType<any>;
  page?: boolean;
  sub?: boolean;
}

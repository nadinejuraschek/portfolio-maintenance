import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    color: var(--dark_01);
    font-family: var(--fonts);
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    --neutral_01: #FFFFFF;
    --neutral_02: #F2F2F3;
    --neutral_03: #C8CDD0;
    --neutral_04: #7b919d;
    --dark_01: #415058;
    --dark_02: #1F292E;

    --primary: #f16059;
    --primary_02: #FF988F;
    --secondary: #009DAE;
    --secondary_02: #80f3ff;
    --secondary_03: #b3f8ff;
    --secondary_04: #e5fdff;
    --secondary_05: #008291;
    --tertiary: #ffaf00;

    --transparent: 'transparent';

    // --primary: #f16059;
    // --primary_01: #ff4f6e;

    --error: #EE3B2B;
    --success: #52E052;
    --warning: #FFC94D;

    --section-padding-side: 4rem;

    --fonts: 'Nunito', 'Helvetica', 'Arial', sans-serif;

    font-size: 10px;
  };
`;

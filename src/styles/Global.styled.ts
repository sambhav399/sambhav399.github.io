import { createGlobalStyle } from 'styled-components';
import Device, { Size } from './Device.styled';
import { getColor, getFont } from './Helper.styled';

export default createGlobalStyle`
  :root{
    --scrollbar-size: 5px;
  }

  *, *::before, *::after {
    margin    : 0;
    padding   : 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    line-height: normal;
    font-family: ${p => getFont(p).DEFAULT};
    background: ${p => getColor(p).BACKGROUND0};
    color: ${p => getColor(p).FOREGROUND0};
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  button,
  input,
  textarea{
    font-family: ${p => getFont(p).DEFAULT};
    font-weight: 600;
    border: 1px solid transparent;
  }

  button,
  input,
  textarea,
  select,
  [tabindex]:not([tabindex="-1"]) {
    &:focus {
      outline: 2px solid ${p => getColor(p).THEME};
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid ${p => getColor(p).THEME};
      outline-offset: 3px;
    }
  }

  .container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;

    ${Device.sm} {
        max-width: ${Size.sm}px;
    }

    ${Device.md} {
        max-width: ${Size.md}px;
    }

    ${Device.lg} {
        max-width: ${Size.lg}px;
    }

    ${Device.xl} {
        max-width: ${Size.xl}px;
    }

    ${Device.xxl} {
        max-width: ${Size.xxl}px;
    }
  }
`;

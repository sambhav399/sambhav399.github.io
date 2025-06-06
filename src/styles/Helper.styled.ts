import { css, CSSObject } from 'styled-components';
import Device, { Size } from './Device.styled';

export const lineClamp = (n?: number): CSSObject => ({
  overflow: 'hidden',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: n || 1,
});

export function getFont(props: PROPS_StyledTheme): StyledThemeFont {
  return props.theme.FONT;
}

export function getColor(props: PROPS_StyledTheme): StyledThemeColor {
  return props.theme.COLOR;
}

export const Container = css`
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
`;

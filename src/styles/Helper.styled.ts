import { CSSObject } from 'styled-components';

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

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    FONT: StyledThemeFont;
    COLOR: StyledThemeColor;
  }
}

import 'styled-components';

declare global {
  interface Window {
    mixpanel?: MixpanelWithLoaded;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    FONT: StyledThemeFont;
    COLOR: StyledThemeColor;
  }
}

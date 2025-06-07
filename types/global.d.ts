interface MixpanelWithLoaded extends Omit<typeof mixpanel, '__loaded'> {
  __loaded?: boolean;
}

interface StyledThemeFont {
  DEFAULT: string;
  LEAD: string;
}

interface StyledThemeColor {
  FOREGROUND0: string;
  FOREGROUND1: string;
  FOREGROUND2: string;
  FOREGROUND3: string;
  FOREGROUND4: string;
  FOREGROUND5: string;
  BACKGROUND0: string;
  BACKGROUND1: string;
  BACKGROUND2: string;
  BACKGROUND3: string;
  BACKGROUND4: string;
  BACKGROUND5: string;
  BORDER: string;
  ERROR: string;
  THEME: string;
  PRIMARY: string;
  SECONDARY: string;
}

interface PROPS_StyledTheme {
  theme: DefaultTheme;
}

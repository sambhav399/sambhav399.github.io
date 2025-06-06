export const Size = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const Device = {
  sm: `@media screen and (min-width: ${Size.sm}px)`,
  md: `@media screen and (min-width: ${Size.md}px)`,
  lg: `@media screen and (min-width: ${Size.lg}px)`,
  xl: `@media screen and (min-width: ${Size.xl}px)`,
  xxl: `@media screen and (min-width: ${Size.xxl}px)`,
  below_sm: `@media screen and (max-width: ${Size.sm}px)`,
  below_md: `@media screen and (max-width: ${Size.md}px)`,
  below_lg: `@media screen and (max-width: ${Size.lg}px)`,
  below_xl: `@media screen and (max-width: ${Size.xl}px)`,
  below_xxl: `@media screen and (max-width: ${Size.xxl}px)`,
};

export default Device;

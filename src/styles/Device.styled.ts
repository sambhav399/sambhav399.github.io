export const Size = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const Device = {
  below_sm: `@media screen and (max-width: ${Size.sm}px)`,
  below_md: `@media screen and (max-width: ${Size.md}px)`,
  below_lg: `@media screen and (max-width: ${Size.lg}px)`,
  below_xl: `@media screen and (max-width: ${Size.xl}px)`,
  below_xxl: `@media screen and (max-width: ${Size.xxl}px)`,
};

export default Device;

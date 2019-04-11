// @flow
export { ColorsT } from "baseui/styles/types.js.flow";

export type VariantT =
  | string
  | {
      "50": String,
      "100": string,
      "200": string,
      "300": string,
      "400": string,
      "500": string,
      "600": string,
      "700": string,
      "800": string,
      "900": string,
      "1000": string
    };

export type PaletteT = {
  primary: VariantT,
  negative: VariantT,
  warning: VariantT,
  positive: VariantT,
  mono: VariantT
};

// @flow

import { parseToRgb } from "polished";
import { type PaletteT, type VariantT, type ColorsT } from "./types";

export const validatePalette = (palette: PaletteT): void => {
  if (!palette) {
    throw new Error(`The palette object is required.`);
  }

  const reqColors = ["primary", "negative", "warning", "positive", "mono"];
  const reqVariants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  const missingColors = reqColors.filter(c => !palette.hasOwnProperty(c));

  if (missingColors.length) {
    throw new Error(
      [
        `The following required colors are missing from the provided palette`,
        `object: '${missingColors.join("', '")}'.`
      ].join(" ")
    );
  }

  for (let [colorName, colorVariants] of Object.entries(palette)) {
    const invalidColorErrorMsg = [
      `Invalid variants value provided for '${colorName}' color.\n`,
      `Color variants must be a 'string' representing a valid CSS color `,
      `value or an 'object' of the following shape:\n{\n\t`,
      [
        `50:  "valid-css-color-value",`,
        `100: "valid-css-color-value",`,
        `200: "valid-css-color-value",`,
        `300: "valid-css-color-value",`,
        `400: "valid-css-color-value",`,
        `500: "valid-css-color-value",`,
        `600: "valid-css-color-value",`,
        `700: "valid-css-color-value",`,
        `800: "valid-css-color-value",`,
        `900: "valid-css-color-value",`,
        `100: "valid-css-color-value",`
      ].join("\n\t"),
      `\n}`
    ].join("");

    if (typeof colorVariants == "string") {
      try {
        parseToRgb(colorVariants);
      } catch (e) {
        throw new Error(invalidColorErrorMsg);
      }
    } else if (
      typeof colorVariants == "object" &&
      colorVariants !== null &&
      !Array.isArray(colorVariants)
    ) {
      const missingVariants = reqVariants.filter(
        v => !colorVariants.hasOwnProperty(v)
      );

      if (missingVariants.length) {
        throw new Error(
          [
            `The following required color variants are missing from the`,
            `'${colorName}' color object: ${missingVariants.join(", ")}`
          ].join("\n")
        );
      }

      for (let variant of Object.values(colorVariants)) {
        try {
          parseToRgb(String(variant));
        } catch (e) {
          throw new Error(invalidColorErrorMsg);
        }
      }
    } else {
      throw new Error(invalidColorErrorMsg);
    }
  }
};

export const generateColors = (palette: PaletteT): ColorsT => {
  try {
    validatePalette;
    return {};
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message);
  }
};

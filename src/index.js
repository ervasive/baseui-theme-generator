// @flow

import { parseToRgb } from "polished";
import { type PaletteT, type VariantT, type ColorsT } from "./types";

export const validatePalette = (palette: PaletteT): boolean => {
  if (!palette) {
    throw new Error(`The palette object was not provided.`);
  }

  const reqColors = ["primary", "negative", "warning", "positive", "mono"];
  const reqVariants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  const missingColors = reqColors.filter(c => !palette.hasOwnProperty(c));

  if (missingColors.length) {
    throw new Error(
      `The following required colors are missing from the provided palette ` +
        `object: '${missingColors.join("', '")}'.`
    );
  }

  for (let [colorName, colorVariants] of Object.entries(palette)) {
    if (
      !colorVariants ||
      (typeof colorVariants !== "string" &&
        typeof colorVariants !== "object") ||
      Array.isArray(colorVariants)
    ) {
      throw new Error(
        [
          `Invalid variants provided for '${colorName}' color.\n`,
          `Color variants must be a 'string' representing a valid CSS color `,
          `value or an 'object' of the following shape:\n{\n\t`,
          [
            `50:  [valid CSS color value],`,
            `100: [valid CSS color value],`,
            `200: [valid CSS color value],`,
            `300: [valid CSS color value],`,
            `400: [valid CSS color value],`,
            `500: [valid CSS color value],`,
            `600: [valid CSS color value],`,
            `700: [valid CSS color value],`,
            `800: [valid CSS color value],`,
            `900: [valid CSS color value],`,
            `100: [valid CSS color value],`
          ].join("\n\t"),
          `\n}`
        ].join("")
      );
    }

    if (typeof colorVariants == "string") {
      try {
        parseToRgb(colorVariants);
      } catch (e) {
        // TODO: re-phrase
        throw new Error(
          `The provided value for '${colorName}: ${colorVariants}' is not a valid CSS color.`
        );
      }
    }

    // Now when string case is handled all it can be is object
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
      parseToRgb(String(variant));
    }
  }

  return true;
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

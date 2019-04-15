// @flow
import { parseToRgb } from "polished";

import { type PaletteT } from "./types";

const colorShape = [
  `{`,
  `\tcolor:      string (css color value), required`,
  `\tcontrast?:  number (from 0.0 to 1.0)`,
  `\thueOffset?: number (degrees)`,
  `\t50?:        string (css color value)`,
  `\t100?:       string (css color value)`,
  `\t200?:       string (css color value)`,
  `\t300?:       string (css color value)`,
  `\t400?:       string (css color value) equivalent to 'color' property`,
  `\t500?:       string (css color value)`,
  `\t600?:       string (css color value)`,
  `\t700?:       string (css color value)`,
  `\t800?:       string (css color value)`,
  `\t900?:       string (css color value)`,
  `\t1000?:      string (css color value)`,
  `}`
].join(`\n`);

export default function validate(palette: PaletteT): void {
  if (
    !palette ||
    typeof palette !== "object" ||
    !(
      palette.hasOwnProperty("primary") &&
      palette.hasOwnProperty("negative") &&
      palette.hasOwnProperty("warning") &&
      palette.hasOwnProperty("positive") &&
      palette.hasOwnProperty("mono")
    )
  ) {
    throw new Error(
      `Invalid palette.\n Make sure that all required color objects are ` +
        `provided (primary, negative, warning, positive, mono) and have the ` +
        `following shape: \n${colorShape}`
    );
  }

  for (let [colorName, color] of Object.entries(palette)) {
    if (
      typeof color !== "object" ||
      color === null ||
      !color.hasOwnProperty("color")
    ) {
      throw new Error(
        `Invalid color.\n The color: '${colorName}' misses the required ` +
          `'color' property. Make sure that all provided color objects have ` +
          `the following shape: \n${colorShape}`
      );
    }

    [
      "color",
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "1000"
    ].map(c => {
      try {
        color.hasOwnProperty(c) && parseToRgb(String(color[c]));
      } catch (e) {
        throw new Error(
          `Unable to validate '${colorName}[${c}]' color variant.\n` +
            `The '${String(color[c])}' is not a valid CSS color. ` +
            `Make sure that all provided color objects have ` +
            `the following shape: \n${colorShape}`
        );
      }
    });

    if (
      color.hasOwnProperty("contrast") &&
      (Number(color.contrast) > 1 || Number(color.contrast) < 0)
    ) {
      throw new Error(
        `The contrast value of '${colorName}' color is out of allowed range.\n` +
          `Make sure that all provided color objects have ` +
          `the following shape: \n${colorShape}`
      );
    }

    if (
      color.hasOwnProperty("hueOffset") &&
      isNaN(parseInt(color.hueOffset, 10))
    ) {
      throw new Error(
        `Unable to convert the 'hueOffset' value of '${colorName}' color to a ` +
          `number.\n` +
          `Make sure that all provided color objects have ` +
          `the following shape: \n${colorShape}`
      );
    }
  }
}

// @flow

import validate from "./paletteValidator";
import colorsGenerator from "./colorsGenerator";

import {
  type PaletteT,
  type ColorsT,
  type NativePaletteColorsT
} from "./types";

// TODO: naming
export const generateNativePaletteColors = (
  palette: PaletteT,
  {
    contrast,
    hueOffset,
    numberOfColors
  }: { contrast: number, hueOffset: number, numberOfColors: number }
): NativePaletteColorsT => {
  const colors = {};

  for (let [colorName, colorVariants] of Object.entries(palette)) {
    if (typeof colorVariants === "string") {
      colorVariants = colorsGenerator(colorVariants, {
        contrast,
        hueOffset,
        numberOfColors
      }).reduce(
        (acc, color) =>
          acc.index === 50
            ? { ...acc, [acc.index]: color, index: acc.index + 50 }
            : { ...acc, [acc.index]: color, index: acc.index + 100 },
        { index: 50 }
      );

      delete colorVariants.index;
    }

    for (let [variantName, variantValue] of Object.entries(colorVariants)) {
      colors[`${colorName}${variantName}`] = variantValue;

      if (colorName === "mono") {
        colors.white = "#fff";
        colors.black = "#000";
      } else {
        colors[colorName] = colorVariants[400];
      }
    }
  }

  return colors;
};

export const generateColors = (
  palette: PaletteT,
  {
    type = "light",
    contrast,
    hueOffset
  }: { type: "light" | "dark", contrast: number, hueOffset: number } = {}
): ColorsT => {
  try {
    validate(palette);

    const paletteColors = generateNativePaletteColors(palette, {
      contrast,
      hueOffset,
      numberOfColors: 10
    });

    const setColor = (light, dark) => {
      // We can check the contrast values here and notify the user about it
      const color = type === "light" ? light : dark;
      return paletteColors[color];
    };

    return {
      ...paletteColors,

      // Semantic Colors
      colorPrimary: setColor("mono600", "mono50"),
      colorSecondary: setColor("mono600", "mono50")
    };
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message);
  }
};

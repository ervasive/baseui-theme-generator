// @flow

import { lighten, adjustHue } from "polished";
import {
  type ThemeConfigT,
  type ThemeConfigColorT,
  type ThemePrimitivesT
} from "./types";

export function generatePrimitives(theme: ThemeConfigT): ThemePrimitivesT {
  let primitives = {};

  for (let [colorName, color] of Object.entries(theme.palette)) {
    // TODO: fix flow error
    let colorVariants = generateVariants(color);

    if (typeof color === "object") {
      colorVariants = { ...colorVariants, ...color };
    }

    for (let [variantName, variantValue] of Object.entries(colorVariants)) {
      primitives[`${colorName}${variantName}`] = variantValue;

      if (colorName === "mono") {
        primitives.white = "#fff";
        primitives.black = "#000";
      } else {
        primitives[colorName] = colorVariants["400"];
      }
    }
  }

  return primitives;
}

export function generateVariants(
  color: ThemeConfigColorT
): { [string]: string } {
  const colors = {};
  let baseColor, hueOffset, contrast;

  if (typeof color === "string") {
    baseColor = color;
    contrast = 0.1;
    hueOffset = 0;
  } else {
    baseColor = color["400"];
    contrast = color.contrast || 0.1;
    hueOffset = color.hueOffset || 0;
  }

  [
    { index: 50, multiplier: 4 },
    { index: 100, multiplier: 3 },
    { index: 200, multiplier: 2 },
    { index: 300, multiplier: 1 },
    { index: 400, multiplier: 0 },
    { index: 500, multiplier: -1 },
    { index: 600, multiplier: -2 },
    { index: 700, multiplier: -3 },
    { index: 800, multiplier: -4 },
    { index: 900, multiplier: -5 },
    { index: 1000, multiplier: -6 }
  ].map(({ index, multiplier }) => {
    const h = adjustHue(hueOffset * multiplier + 360, baseColor);
    colors[index] = lighten(contrast * multiplier, String(h));
  });

  return colors;
}

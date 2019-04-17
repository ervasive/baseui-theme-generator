// @flow

import { lighten, adjustHue } from "polished";

import {
  type PaletteMapT,
  type NativePaletteColorsT,
  type VariantT
} from "./types";

export default function generate(palette: PaletteMapT): NativePaletteColorsT {
  let colors = {};

  for (let [colorName, color] of palette.entries()) {
    const generatedVariants = generateVariants(color);

    delete color.contrast;
    delete color.hueOffset;

    const variants = { ...generatedVariants, ...color };

    for (let [variantName, variantValue] of Object.entries(variants)) {
      colors[`${colorName}${variantName}`] = variantValue;

      if (colorName === "mono") {
        colors.white = "#fff";
        colors.black = "#000";
      } else {
        colors[colorName] = variants[400];
      }
    }
  }

  return colors;
}

export function generateVariants(variant: VariantT): { [string]: string } {
  const colors = {};
  let color, hueOffset, contrast;

  if (typeof variant === "string") {
    color = variant;
    contrast = 0.1;
    hueOffset = 0;
  } else {
    color = variant[400];
    contrast = variant.contrast ? variant.contrast : 0.1;
    hueOffset = variant.hueOffset ? variant.hueOffset : 0;
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
    const h = adjustHue(hueOffset * multiplier + 360, color);
    colors[index] = lighten(contrast * multiplier, String(h));
  });

  return colors;
}

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

    delete color.color;
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

export function generateVariants({
  color,
  contrast = 0.1,
  hueOffset = 0
}: VariantT = {}): { [string]: string } {
  const colors = {};

  new Array(10).fill(color).map((c, i, a) => {
    const index = i === 0 ? 50 : i * 100;
    const multiplier = a.length / 2 - i;
    const h = adjustHue(hueOffset * multiplier + 360, c);
    colors[index] = lighten(contrast * multiplier, String(h));
  });

  return colors;
}

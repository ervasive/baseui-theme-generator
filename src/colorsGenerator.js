// @flow

import { parseToRgb, lighten, adjustHue } from "polished";

export default function colorsGenerator(
  color: string,
  {
    contrast = 0.1,
    hueOffset = 0,
    numberOfColors = 10
  }: { contrast: number, hueOffset: number, numberOfColors: number } = {}
): Array<string> {
  try {
    parseToRgb(color);
  } catch (e) {
    throw new Error(
      "Invalid color value was provided to `colorsGenerator` function."
    );
  }

  const colors = [];

  new Array(numberOfColors).fill(color).map((c, i, a) => {
    const multiplier = a.length / 2 - i;
    const h = adjustHue(hueOffset * multiplier + 360, c);

    if (typeof h == "string") {
      colors.push(lighten(contrast * multiplier, h));
    }
  });

  return colors;
}

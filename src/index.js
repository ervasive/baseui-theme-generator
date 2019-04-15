// @flow

import validate from "./paletteValidator";
import generate from "./paletteGenerator";

import { type PaletteT, type ColorsT } from "./types";

export const generateColors = (
  palette: PaletteT,
  { type = "light" }: { type: "light" | "dark" } = {}
): ColorsT => {
  try {
    validate(palette);

    const paletteMap = new Map();
    Object.keys(palette).forEach(k => {
      paletteMap.set(k, palette[k]);
    });

    const paletteColors = generate(paletteMap);

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

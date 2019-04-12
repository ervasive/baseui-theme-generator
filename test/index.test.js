import { validatePalette } from "../src/index";

// 1. Theme generation
// 2. Palette generation
//   - Validate provided palette (fail on invalid palette or recover with some
//     defaults?) [DONE]
//   - Generate palette colors from palette (mono[700]: val => mono700: val)
//     - if instead of an object we have a color string generate color variants
//       automatically (check if provided color string is valid)
//     - set static colors (white, black etc.)
//   - fill in theme colors based on generated palette, its type (dark, light) &
//     contrast value. (additional options (?): semitransparent borders etc.)
// 3. Generate other theme attributes (breakpoints, typography etc.)
//
// Notes:
//   - allow access to `setColor` function to be able to reset colors after a
//     a theme was generated (?).
//   - Flexible typography scale and other sizing values (set base value with
//     whatever units (px, rem etc) and allow user to set other values
//     programmatically 1.2x, 4x)
//   - generate toolip background color with other colors based on mono palette
//   - notify on low contrast values and low legibility
//   - theme generation with different baseui version tokens lists
const variantValid = {
  50: "red",
  100: "#ff0000",
  200: "rgb(255, 0, 0)",
  300: "rgba(255, 0, 0, 1)",
  400: "hsl(0, 100%, 50%)",
  500: "hsla(0, 100%, 50%, 1)",
  600: "red",
  700: "red",
  800: "red",
  900: "red",
  1000: "red"
};

const variantIncomplete = { ...variantValid };
delete variantIncomplete[50];

describe("Colors generation", () => {
  it("should fail validation if no palette is provided", () => {
    expect(() => validatePalette()).toThrow(/palette object is required/i);
  });

  it("should fail validation if palette object does not have required colors", () => {
    expect(() => validatePalette({})).toThrow(/required colors are missing/i);
  });

  it("should fail validation if palette object has invalid color value", () => {
    expect(() =>
      validatePalette({
        primary: null,
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);

    expect(() =>
      validatePalette({
        primary: [],
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);

    expect(() =>
      validatePalette({
        primary: () => {},
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);

    expect(() =>
      validatePalette({
        primary: 1,
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);

    expect(() =>
      validatePalette({
        primary: "non-valid-css-color",
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);

    expect(() =>
      validatePalette({
        primary: { ...variantValid, 50: "non-valid-css-color" },
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).toThrow(/invalid variants value/i);
  });

  it("should pass validation on all valid cases", () => {
    expect(() =>
      validatePalette({
        primary: "red",
        negative: "#ff0000",
        warning: "rgb(255, 0, 0)",
        positive: "rgba(255, 0, 0, 1)",
        mono: "hsl(0, 100%, 50%)",
        additional: "hsla(0, 100%, 50%, 1)"
      })
    ).not.toThrow();

    expect(() =>
      validatePalette({
        primary: "red",
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).not.toThrow();

    expect(() =>
      validatePalette({
        primary: variantValid,
        negative: variantValid,
        warning: variantValid,
        positive: variantValid,
        mono: variantValid
      })
    ).not.toThrow();
  });
});

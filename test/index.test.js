import { validatePalette } from "../src/index";

// 1. Theme generation
// 2. Palette generation
//   - Validate provided palette (fail on invalid palette or recover with some
//     defaults?)
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
const variantValidObject = {
  50: "red",
  100: "red",
  200: "red",
  300: "red",
  400: "red",
  500: "red",
  600: "red",
  700: "red",
  800: "red",
  900: "red",
  1000: "red"
};

describe("Colors generation", () => {
  it("should fail validation on invalid palette objects", () => {
    expect(() => validatePalette()).toThrow(/palette object was not provided/i);
    expect(() => validatePalette({})).toThrow(/required colors are missing/i);
    expect(() =>
      validatePalette({
        primary: [],
        negative: [],
        warning: [],
        positive: [],
        mono: []
      })
    ).toThrow(/invalid variants/i);
    // expect(() =>
    //   validatePalette({
    //     primary: "non-valid-color-value",
    //     negative: "non-valid-color-value",
    //     warning: "non-valid-color-value",
    //     positive: "non-valid-color-value",
    //     mono: "non-valid-color-value"
    //   })
    // ).toThrow();

    // expect(
    //   validatePalette({
    //     primary: "#ffcc00",
    //     negative: "non-valid-color-value",
    //     warning: "non-valid-color-value",
    //     positive: "non-valid-color-value",
    //     mono: "non-valid-color-value"
    //   })
    // ).toBe(false);

    // expect(
    //   validatePalette({
    //     primary: {},
    //     negative: {},
    //     warning: {},
    //     positive: {},
    //     mono: {}
    //   })
    // ).toBe(false);

    // expect(
    //   validatePalette({
    //     primary: variantValidObject,
    //     negative: variantValidObject,
    //     warning: variantValidObject,
    //     positive: variantValidObject,
    //     mono: {}
    //   })
    // ).toBe(false);

    // expect(
    //   validatePalette({
    //     primary: variantValidObject,
    //     negative: variantValidObject,
    //     warning: variantValidObject,
    //     positive: variantValidObject,
    //     mono: []
    //   })
    // ).toBe(false);
  });

  it("should pass validation on all valid cases", () => {
    expect(
      validatePalette({
        primary: "red",
        negative: "red",
        warning: "red",
        positive: "red",
        mono: "red"
      })
    ).toBe(true);

    expect(
      validatePalette({
        primary: variantValidObject,
        negative: "red",
        warning: "red",
        positive: "red",
        mono: "red"
      })
    ).toBe(true);

    expect(
      validatePalette({
        primary: variantValidObject,
        negative: "qweqwe",
        warning: "red",
        positive: "red",
        mono: "red"
      })
    ).toBe(true);

    expect(
      validatePalette({
        primary: variantValidObject,
        negative: variantValidObject,
        warning: variantValidObject,
        positive: variantValidObject,
        mono: []
      })
    ).toBe(true);
  });
});

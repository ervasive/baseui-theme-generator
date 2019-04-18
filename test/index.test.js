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
describe("Colors generation", () => {
  it("pass", () => expect(true).toBe(true));
});

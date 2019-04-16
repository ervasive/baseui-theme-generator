import generate, { generateVariants } from "../src/paletteGenerator";

describe("Colors generator", () => {
  it("should generate correct colors modulations with default params", () => {
    const result = generateVariants({ color: "#ff0000" });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#ffe5e5",
      "200": "#ffb3b3",
      "300": "#ff8080",
      "400": "#ff4d4d",
      "500": "#ff1a1a",
      "600": "#e60000",
      "700": "#b30000",
      "800": "#800000",
      "900": "#4c0000",
      "1000": "#190000"
    });
  });

  it("should generate correct colors modulations with custom contrast", () => {
    const result = generateVariants({ color: "#ff0000", contrast: 0.15 });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#fff",
      "200": "#fff",
      "300": "#ffbfbf",
      "400": "#ff7373",
      "500": "#ff2626",
      "600": "#d90000",
      "700": "#8c0000",
      "800": "#400000",
      "900": "#000",
      "1000": "#000"
    });
  });

  it("should generate correct colors modulations with custom hue offset", () => {
    const result = generateVariants({ color: "#ff0000", hueOffset: 15 });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#fcffe5",
      "200": "#fff5b3",
      "300": "#ffcf80",
      "400": "#ff904d",
      "500": "#ff361a",
      "600": "#e6001d",
      "700": "#b30043",
      "800": "#80004f",
      "900": "#4c0043",
      "1000": "#160019"
    });
  });

  it("should generate correct colors modulations with custom hue offset and contrast values", () => {
    const result = generateVariants({
      color: "#ff0000",
      contrast: 0.15,
      hueOffset: 15
    });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#fff",
      "200": "#fff",
      "300": "#ffe7bf",
      "400": "#ffa873",
      "500": "#ff4126",
      "600": "#d9001b",
      "700": "#8c0035",
      "800": "#400028",
      "900": "#000",
      "1000": "#000"
    });
  });
});

describe("Generate palette", () => {
  it("should generate 'native' accented palette", () => {
    const palette = new Map([["primary", { color: "red" }]]);
    expect(generate(palette)).toEqual({
      primary: "#ff4d4d",
      primary50: "#fff",
      primary100: "#ffe5e5",
      primary200: "#ffb3b3",
      primary300: "#ff8080",
      primary400: "#ff4d4d",
      primary500: "#ff1a1a",
      primary600: "#e60000",
      primary700: "#b30000",
      primary800: "#800000",
      primary900: "#4c0000",
      primary1000: "#190000"
    });
  });

  it("should generate 'native' mono palette", () => {
    const palette = new Map([["mono", { color: "#ccc" }]]);
    expect(generate(palette)).toEqual({
      black: "#000",
      mono50: "#fff",
      mono100: "#fff",
      mono200: "#fff",
      mono300: "#fff",
      mono400: "#f2f2f2",
      mono500: "#d9d9d9",
      mono600: "#bfbfbf",
      mono700: "#a6a6a6",
      mono800: "#8c8c8c",
      mono900: "#737373",
      mono1000: "#595959",
      white: "#fff"
    });
  });
});

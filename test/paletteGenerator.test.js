import generate, { generateVariants } from "../src/paletteGenerator";

describe("Colors generator", () => {
  it("should generate correct colors modulations with default params", () => {
    const result = generateVariants({ color: "#ff0000" });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#fcc",
      "200": "#f99",
      "300": "#f66",
      "400": "#f33",
      "500": "#f00",
      "600": "#c00",
      "700": "#900",
      "800": "#600",
      "900": "#300"
    });
  });

  it("should generate correct colors modulations with custom contrast", () => {
    const result = generateVariants({ color: "#ff0000", contrast: 0.15 });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#fff",
      "200": "#ffe5e5",
      "300": "#f99",
      "400": "#ff4d4d",
      "500": "#f00",
      "600": "#b30000",
      "700": "#600",
      "800": "#1a0000",
      "900": "#000"
    });
  });

  it("should generate correct colors modulations with custom hue offset", () => {
    const result = generateVariants({ color: "#ff0000", hueOffset: 15 });

    expect(result).toEqual({
      "50": "#fff",
      "100": "#ffc",
      "200": "#ffe599",
      "300": "#ffb366",
      "400": "#f63",
      "500": "#f00",
      "600": "#c03",
      "700": "#99004d",
      "800": "#66004c",
      "900": "#303"
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
      "200": "#fff9e5",
      "300": "#fc9",
      "400": "#ff794d",
      "500": "#f00",
      "600": "#b3002d",
      "700": "#603",
      "800": "#1a0013",
      "900": "#000"
    });
  });
});

describe("Generate palette", () => {
  it("should generate 'native' accented palette", () => {
    const palette = new Map([["primary", { color: "red" }]]);
    expect(generate(palette)).toEqual({
      primary: "#f33",
      primary50: "#fff",
      primary100: "#fcc",
      primary200: "#f99",
      primary300: "#f66",
      primary400: "#f33",
      primary500: "#f00",
      primary600: "#c00",
      primary700: "#900",
      primary800: "#600",
      primary900: "#300"
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
      mono400: "#e6e6e6",
      mono500: "#ccc",
      mono600: "#b3b3b3",
      mono700: "#999",
      mono800: "#808080",
      mono900: "#666",
      white: "#fff"
    });
  });
});

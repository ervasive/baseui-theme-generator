import { validatePalette } from "../src/themeConfigValidator";

const paletteValidMinimal = {
  400: "red"
};

const paletteValid = {
  400: "red",
  contrast: 0.5,
  hueOffset: 15
};

const paletteValidManual = {
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

describe("Palette validator", () => {
  it("should throw on invalid palette object", () => {
    expect(() => validatePalette()).toThrow(/palette object was not provided/i);
    expect(() => validatePalette(0)).toThrow(
      /palette object was not provided/i
    );
    expect(() => validatePalette(null)).toThrow(
      /palette object was not provided/i
    );
    expect(() => validatePalette("")).toThrow(
      /palette object was not provided/i
    );
    expect(() => validatePalette({})).toThrow(/invalid palette/i);
    expect(() => validatePalette([])).toThrow(/invalid palette/i);
  });
  it("should throw on invalid color object", () => {
    expect(() =>
      validatePalette({
        primary: "not-valid",
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validatePalette({
        primary: { 400: null },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validatePalette({
        primary: { 400: "not-valid" },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", 500: "not-valid" },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", contrast: -1 },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid 'contrast'/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", contrast: 1.1 },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid 'contrast'/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", hueOffset: "not-valid" },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", hueOffset: -400 },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);

    expect(() =>
      validatePalette({
        primary: { 400: "red", hueOffset: 400 },
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);
  });

  it("should validatePalette valid palette objects", () => {
    expect(() =>
      validatePalette({
        primary: paletteValidMinimal,
        negative: paletteValidMinimal,
        warning: paletteValidMinimal,
        positive: paletteValidMinimal,
        mono: paletteValidMinimal
      })
    ).not.toThrow();

    expect(() =>
      validatePalette({
        primary: paletteValid,
        negative: paletteValid,
        warning: paletteValid,
        positive: paletteValid,
        mono: paletteValid
      })
    ).not.toThrow();

    expect(() =>
      validatePalette({
        primary: paletteValidManual,
        negative: paletteValidManual,
        warning: paletteValidManual,
        positive: paletteValidManual,
        mono: paletteValidManual
      })
    ).not.toThrow();
  });
});

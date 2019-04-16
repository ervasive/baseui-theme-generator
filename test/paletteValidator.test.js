import validate from "../src/paletteValidator";

const validMinimal = {
  400: "red"
};

const valid = {
  400: "red",
  contrast: 0.5,
  hueOffset: 15
};

const validManual = {
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
    expect(() => validate()).toThrow(/palette object was not provided/i);
    expect(() => validate(0)).toThrow(/palette object was not provided/i);
    expect(() => validate(null)).toThrow(/palette object was not provided/i);
    expect(() => validate("")).toThrow(/palette object was not provided/i);
    expect(() => validate({})).toThrow(/invalid palette/i);
    expect(() => validate([])).toThrow(/invalid palette/i);
  });
  it("should throw on invalid color object", () => {
    expect(() =>
      validate({
        primary: "not-valid",
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validate({
        primary: { 400: null },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validate({
        primary: { 400: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validate({
        primary: { 400: "red", 500: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid color/i);

    expect(() =>
      validate({
        primary: { 400: "red", contrast: -1 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid 'contrast'/i);

    expect(() =>
      validate({
        primary: { 400: "red", contrast: 1.1 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid 'contrast'/i);

    expect(() =>
      validate({
        primary: { 400: "red", hueOffset: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);

    expect(() =>
      validate({
        primary: { 400: "red", hueOffset: -400 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);

    expect(() =>
      validate({
        primary: { 400: "red", hueOffset: 400 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/invalid 'hueOffset'/i);
  });

  it("should validate valid palette objects", () => {
    expect(() =>
      validate({
        primary: validMinimal,
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).not.toThrow();

    expect(() =>
      validate({
        primary: valid,
        negative: valid,
        warning: valid,
        positive: valid,
        mono: valid
      })
    ).not.toThrow();

    expect(() =>
      validate({
        primary: validManual,
        negative: validManual,
        warning: validManual,
        positive: validManual,
        mono: validManual
      })
    ).not.toThrow();
  });
});

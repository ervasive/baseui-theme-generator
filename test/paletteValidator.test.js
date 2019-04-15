import validate from "../src/paletteValidator";

const validMinimal = {
  color: "red"
};

const valid = {
  color: "red",
  contrast: 0.5,
  hueOffset: 15
};

const validManual = {
  color: "red",
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
    expect(() => validate()).toThrow(/invalid palette/i);
    expect(() => validate({})).toThrow(/invalid palette/i);
    expect(() => validate([])).toThrow(/invalid palette/i);
    expect(() => validate("")).toThrow(/invalid palette/i);
    expect(() => validate(0)).toThrow(/invalid palette/i);
    expect(() => validate(null)).toThrow(/invalid palette/i);
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
        primary: { color: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/unable to validate .+ color variant/i);

    expect(() =>
      validate({
        primary: { color: "red", 500: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/unable to validate .+ color variant/i);

    expect(() =>
      validate({
        primary: { color: "red", contrast: -1 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/contrast value of .+ color is out of allowed range/i);

    expect(() =>
      validate({
        primary: { color: "red", contrast: 1.1 },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(/contrast value of .+ color is out of allowed range/i);

    expect(() =>
      validate({
        primary: { color: "red", hueOffset: "not-valid" },
        negative: validMinimal,
        warning: validMinimal,
        positive: validMinimal,
        mono: validMinimal
      })
    ).toThrow(
      /unable to convert the 'hueOffset' value of .+ color to a number/i
    );
  });

  it("should validate validpalette objects", () => {
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

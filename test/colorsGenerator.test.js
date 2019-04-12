import colorsGenerator from "../src/colorsGenerator";

describe("Colors generator", () => {
  it("should throw on invalid color input", () => {
    expect(() => colorsGenerator("non-valid-css-color")).toThrow(
      /invalid color value/i
    );
  });
  it("should generate 2 colors", () => {
    const result = colorsGenerator("#ff0000", {
      numberOfColors: 2
    });

    expect(result).toHaveLength(2);
  });

  it("should generate correct colors modulations with default params", () => {
    const result = colorsGenerator("#ff0000");

    expect(result).toHaveLength(10);
    expect(result).toEqual([
      "#fff",
      "#fcc",
      "#f99",
      "#f66",
      "#f33",
      "#f00",
      "#c00",
      "#900",
      "#600",
      "#300"
    ]);
  });

  it("should generate correct colors modulations with custom contrast", () => {
    const result = colorsGenerator("#ff0000", { contrast: 0.15 });

    expect(result).toHaveLength(10);
    expect(result).toEqual([
      "#fff",
      "#fff",
      "#ffe5e5",
      "#f99",
      "#ff4d4d",
      "#f00",
      "#b30000",
      "#600",
      "#1a0000",
      "#000"
    ]);
  });

  it("should generate correct colors modulations with custom hue offset", () => {
    const result = colorsGenerator("#ff0000", { hueOffset: 15 });

    expect(result).toHaveLength(10);
    expect(result).toEqual([
      "#fff",
      "#ffc",
      "#ffe599",
      "#ffb366",
      "#f63",
      "#f00",
      "#c03",
      "#99004d",
      "#66004c",
      "#303"
    ]);
  });

  it("should generate correct colors modulations with custom hue offset and contrast values", () => {
    const result = colorsGenerator("#ff0000", {
      contrast: 0.15,
      hueOffset: 15
    });

    expect(result).toHaveLength(10);
    expect(result).toEqual([
      "#fff",
      "#fff",
      "#fff9e5",
      "#fc9",
      "#ff794d",
      "#f00",
      "#b3002d",
      "#603",
      "#1a0013",
      "#000"
    ]);
  });
});

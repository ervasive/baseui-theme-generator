import {validatePalette} from '../src/themeConfigValidator'

const colorValidMinimal = {
  400: 'red',
}

const colorValid = {
  400: 'red',
  contrast: 0.5,
  hueOffset: 15,
}

const colorValidManual = {
  50: 'red',
  100: 'red',
  200: 'red',
  300: 'red',
  400: 'red',
  500: 'red',
  600: 'red',
  700: 'red',
  800: 'red',
  900: 'red',
  1000: 'red',
}

describe('Palette validator', () => {
  it('should throw on invalid palette object', () => {
    expect(() => validatePalette()).toThrow(/palette object was not provided/i)
    expect(() => validatePalette(0)).toThrow(/palette object was not provided/i)
    expect(() => validatePalette(null)).toThrow(
      /palette object was not provided/i,
    )
    expect(() => validatePalette('')).toThrow(
      /palette object was not provided/i,
    )
    expect(() => validatePalette({})).toThrow(/invalid palette/i)
    expect(() => validatePalette([])).toThrow(/invalid palette/i)

    expect(() =>
      validatePalette({
        type: 'not-valid',
        primary: colorValidMinimal,
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid palette type/i)
  })
  it('should throw on invalid color object', () => {
    expect(() =>
      validatePalette({
        primary: 'not-valid',
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid color/i)

    expect(() =>
      validatePalette({
        primary: {400: null},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid color/i)

    expect(() =>
      validatePalette({
        primary: {400: 'not-valid'},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid color/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', 500: 'not-valid'},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid color/i)

    expect(() =>
      validatePalette({
        primary: colorValidMinimal,
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
        userdefined: 'not-valid',
      }),
    ).toThrow(/invalid color/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', contrast: -1},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', contrast: 1.1},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', hueOffset: 'not-valid'},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', hueOffset: -400},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({
        primary: {400: 'red', hueOffset: 400},
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).toThrow(/invalid 'hueOffset'/i)
  })

  it('should validatePalette valid palette objects', () => {
    expect(() =>
      validatePalette({
        primary: 'red',
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        primary: colorValidMinimal,
        negative: colorValidMinimal,
        warning: colorValidMinimal,
        positive: colorValidMinimal,
        mono: colorValidMinimal,
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        primary: colorValid,
        negative: colorValid,
        warning: colorValid,
        positive: colorValid,
        mono: colorValid,
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        primary: colorValidManual,
        negative: colorValidManual,
        warning: colorValidManual,
        positive: colorValidManual,
        mono: colorValidManual,
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        type: 'light',
        primary: colorValidManual,
        negative: colorValidManual,
        warning: colorValidManual,
        positive: colorValidManual,
        mono: colorValidManual,
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        type: 'dark',
        primary: colorValidManual,
        negative: colorValidManual,
        warning: colorValidManual,
        positive: colorValidManual,
        mono: colorValidManual,
      }),
    ).not.toThrow()
  })
})

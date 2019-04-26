import {
  validateType,
  validatePalette,
  validateTypography,
} from '../src/themeConfigValidator'

describe('Type validator', () => {
  it(`should throw on invalid configuration`, () => {
    expect(() => validateType(null)).toThrow(/invalid theme type/i)
    expect(() => validateType(true)).toThrow(/invalid theme type/i)
    expect(() => validateType(false)).toThrow(/invalid theme type/i)
    expect(() => validateType(0)).toThrow(/invalid theme type/i)
    expect(() => validateType(1)).toThrow(/invalid theme type/i)
    expect(() => validateType('')).toThrow(/invalid theme type/i)
    expect(() => validateType('non-valid')).toThrow(/invalid theme type/i)
    expect(() => validateType([])).toThrow(/invalid theme type/i)
    expect(() => validateType({})).toThrow(/invalid theme type/i)
    expect(() => validateType(() => {})).toThrow(/invalid theme type/i)
  })

  it('should pass on valid configuration', () => {
    expect(() => validateType()).not.toThrow()
    expect(() => validateType('light')).not.toThrow()
    expect(() => validateType('dark')).not.toThrow()
  })
})

describe('Palette validator', () => {
  it('should throw on invalid configuration', () => {
    expect(() => validatePalette(null)).toThrow(/invalid palette/i)
    expect(() => validatePalette(true)).toThrow(/invalid palette/i)
    expect(() => validatePalette(false)).toThrow(/invalid palette/i)
    expect(() => validatePalette(0)).toThrow(/invalid palette/i)
    expect(() => validatePalette(1)).toThrow(/invalid palette/i)
    expect(() => validatePalette('')).toThrow(/invalid palette/i)
    expect(() => validatePalette('non-valid')).toThrow(/invalid palette/i)
    expect(() => validatePalette([])).toThrow(/invalid palette/i)
    expect(() => validatePalette(() => {})).toThrow(/invalid palette/i)
  })

  it('should pass on valid palette objects', () => {
    expect(() => validatePalette()).not.toThrow()
    expect(() => validatePalette({})).not.toThrow()
  })

  it('should throw on invalid colors', () => {
    expect(() => validatePalette({primary: null})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: true})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: false})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: 0})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: 1})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: ''})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: 'non-valid'})).toThrow(
      /invalid color/i,
    )
    expect(() => validatePalette({primary: []})).toThrow(/invalid color/i)
    expect(() => validatePalette({primary: () => {}})).toThrow(/invalid color/i)

    expect(() => validatePalette({primary: {400: null}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: true}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: false}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: 0}})).toThrow(/invalid color/i)

    expect(() => validatePalette({primary: {400: 1}})).toThrow(/invalid color/i)

    expect(() => validatePalette({primary: {400: ''}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: 'non-valid'}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: []}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {400: () => {}}})).toThrow(
      /invalid color/i,
    )

    expect(() => validatePalette({primary: {500: 'red'}})).toThrow(
      /invalid color/i,
    )

    // contrast
    expect(() =>
      validatePalette({primary: {400: 'red', contrast: null}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: true}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: false}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: ''}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: 'non-valid'}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: []}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: () => {}}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: -1}}),
    ).toThrow(/invalid 'contrast'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: 1.1}}),
    ).toThrow(/invalid 'contrast'/i)

    // hueOffset
    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: null}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: true}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: false}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: ''}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: 'not-valid'}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: []}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: () => {}}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: -400}}),
    ).toThrow(/invalid 'hueOffset'/i)

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: 400}}),
    ).toThrow(/invalid 'hueOffset'/i)
  })

  it('should pass on valid colors', () => {
    expect(() => validatePalette({primary: 'red'})).not.toThrow()
    expect(() => validatePalette({primary: {400: 'red'}})).not.toThrow()

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: 0.5}}),
    ).not.toThrow()

    expect(() =>
      validatePalette({primary: {400: 'red', hueOffset: 15}}),
    ).not.toThrow()

    expect(() =>
      validatePalette({primary: {400: 'red', contrast: 0.5, hueOffset: 15}}),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        primary: {
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
        },
      }),
    ).not.toThrow()

    expect(() =>
      validatePalette({
        primary: {
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
        },
        warning: {
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
        },
      }),
    ).not.toThrow()
  })
})

describe('Typography validator', () => {
  it('should throw on invalid configuration', () => {
    expect(() => validateTypography(null)).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography(true)).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography(false)).toThrow(
      /invalid typography.+shape/i,
    )
    expect(() => validateTypography(0)).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography(1)).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography('')).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography('non-valid')).toThrow(
      /invalid typography.+shape/i,
    )
    expect(() => validateTypography([])).toThrow(/invalid typography.+shape/i)
    expect(() => validateTypography(() => {})).toThrow(
      /invalid typography.+shape/i,
    )

    expect(() =>
      validateTypography({
        primaryFontFamily: null,
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: true,
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: false,
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: 0,
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: 1,
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: '',
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: [],
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: {},
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)

    expect(() =>
      validateTypography({
        primaryFontFamily: () => {},
      }),
    ).toThrow(/invalid typography.+primaryFontFamily/i)
  })

  it('should pass on valid configuration', () => {
    expect(() => validateTypography()).not.toThrow()
    expect(() =>
      validateTypography({
        primaryFontFamily: 'sans-serif',
      }),
    ).not.toThrow()
  })
})

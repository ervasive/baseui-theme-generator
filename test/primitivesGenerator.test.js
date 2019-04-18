import {generatePrimitives, generateVariants} from '../src/primitivesGenerator'

describe('Colors generator', () => {
  it('should generate correct colors modulations with default params', () => {
    const result = generateVariants({400: '#ff0000'})

    expect(result).toEqual({
      '50': '#fcc',
      '100': '#f99',
      '200': '#f66',
      '300': '#f33',
      '400': '#f00',
      '500': '#c00',
      '600': '#900',
      '700': '#600',
      '800': '#300',
      '900': '#000',
      '1000': '#000',
    })
  })

  it('should generate correct colors modulations with custom contrast', () => {
    const result = generateVariants({400: '#ff0000', contrast: 0.15})

    expect(result).toEqual({
      '50': '#fff',
      '100': '#ffe5e5',
      '200': '#f99',
      '300': '#ff4d4d',
      '400': '#f00',
      '500': '#b30000',
      '600': '#600',
      '700': '#1a0000',
      '800': '#000',
      '900': '#000',
      '1000': '#000',
    })
  })

  it('should generate correct colors modulations with custom hue offset', () => {
    const result = generateVariants({400: '#ff0000', hueOffset: 15})

    expect(result).toEqual({
      '50': '#ffc',
      '100': '#ffe599',
      '200': '#ffb366',
      '300': '#f63',
      '400': '#f00',
      '500': '#c03',
      '600': '#99004d',
      '700': '#66004c',
      '800': '#303',
      '900': '#000',
      '1000': '#000',
    })
  })

  it('should generate correct colors modulations with custom hue offset and contrast values', () => {
    const result = generateVariants({
      400: '#ff0000',
      contrast: 0.15,
      hueOffset: 15,
    })

    expect(result).toEqual({
      '50': '#fff',
      '100': '#fff9e5',
      '200': '#fc9',
      '300': '#ff794d',
      '400': '#f00',
      '500': '#b3002d',
      '600': '#603',
      '700': '#1a0013',
      '800': '#000',
      '900': '#000',
      '1000': '#000',
    })
  })
})

describe('Generate palette', () => {
  it("should generate 'native' accented palette from string color value", () => {
    expect(
      generatePrimitives({
        palette: {
          primary: 'red',
        },
      }),
    ).toEqual({
      primary: '#f00',
      primary50: '#fcc',
      primary100: '#f99',
      primary200: '#f66',
      primary300: '#f33',
      primary400: '#f00',
      primary500: '#c00',
      primary600: '#900',
      primary700: '#600',
      primary800: '#300',
      primary900: '#000',
      primary1000: '#000',
    })
  })
  it("should generate 'native' accented palette from object color value", () => {
    expect(
      generatePrimitives({
        palette: {
          primary: {400: 'red'},
        },
      }),
    ).toEqual({
      primary: 'red',
      primary50: '#fcc',
      primary100: '#f99',
      primary200: '#f66',
      primary300: '#f33',
      primary400: 'red',
      primary500: '#c00',
      primary600: '#900',
      primary700: '#600',
      primary800: '#300',
      primary900: '#000',
      primary1000: '#000',
    })
  })

  it("should generate 'native' accented palette from object color value with variant override", () => {
    expect(
      generatePrimitives({
        palette: {
          primary: {400: 'red', 1000: 'blue'},
        },
      }),
    ).toEqual({
      primary: 'red',
      primary50: '#fcc',
      primary100: '#f99',
      primary200: '#f66',
      primary300: '#f33',
      primary400: 'red',
      primary500: '#c00',
      primary600: '#900',
      primary700: '#600',
      primary800: '#300',
      primary900: '#000',
      primary1000: 'blue',
    })
  })

  it("should generate 'native' mono palette", () => {
    expect(
      generatePrimitives({
        palette: {
          mono: {400: '#b3b3b3'},
        },
      }),
    ).toEqual({
      black: '#000',
      mono50: '#fff',
      mono100: '#fff',
      mono200: '#e6e6e6',
      mono300: '#ccc',
      mono400: '#b3b3b3',
      mono500: '#9a9a9a',
      mono600: '#808080',
      mono700: '#666',
      mono800: '#4d4d4d',
      mono900: '#333',
      mono1000: '#1a1a1a',
      white: '#fff',
    })
  })
})

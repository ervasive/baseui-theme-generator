import {generatePrimitives, generateVariants} from '../src/primitivesGenerator'

describe('Generate primitives', () => {
  it('should generate default light primitives if no or empty config was provided', () => {
    expect(generatePrimitives()).toMatchSnapshot()
    expect(generatePrimitives({})).toMatchSnapshot()
  })

  it(`should generate a primitives object based on custom theme config`, () => {
    expect(generatePrimitives({palette: {primary: 'red'}})).toMatchSnapshot()

    expect(
      generatePrimitives({palette: {primary: {400: 'red'}}}),
    ).toMatchSnapshot()
  })

  it(`should preserve explicitly defined color varians in a generated primitives object`, () => {
    expect(
      generatePrimitives({palette: {primary: {400: 'red', 500: 'green'}}}),
    ).toMatchSnapshot()
  })
})

describe('Color variants generator', () => {
  it('should generate correct color modulations with default params', () => {
    expect(generateVariants({400: '#ff0000'})).toMatchSnapshot()
  })

  it('should generate correct color modulations with custom contrast value', () => {
    expect(generateVariants({400: '#ff0000', contrast: 0.15})).toMatchSnapshot()
  })

  it('should generate correct color modulations with custom hueOffset value', () => {
    expect(generateVariants({400: '#ff0000', hueOffset: 15})).toMatchSnapshot()
  })
  it('should generate correct color modulations with custom contrast and hueOffset values', () => {
    expect(
      generateVariants({
        400: '#ff0000',
        contrast: 0.15,
        hueOffset: 15,
      }),
    ).toMatchSnapshot()
  })
})

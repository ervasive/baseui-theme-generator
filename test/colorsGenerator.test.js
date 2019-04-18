import {createSetColor} from '../src/colorsGenerator'

describe('Colors generator', () => {
  it('should return light color primitive', () => {
    const setColor = createSetColor(
      {
        lightPrimitive: 'lightPrimitiveValue',
        darkPrimitive: 'darkPrimitiveValue',
      },
      'light',
    )

    expect(setColor('lightPrimitive', 'darkPrimitive')).toEqual(
      'lightPrimitiveValue',
    )
  })

  it('should return dark color primitive', () => {
    const setColor = createSetColor(
      {
        lightPrimitive: 'lightPrimitiveValue',
        darkPrimitive: 'darkPrimitiveValue',
      },
      'dark',
    )

    expect(setColor('lightPrimitive', 'darkPrimitive')).toEqual(
      'darkPrimitiveValue',
    )
  })

  it('should return light color primitive if dark variant is missing', () => {
    const setColor = createSetColor(
      {
        lightPrimitive: 'lightPrimitiveValue',
        darkPrimitive: 'darkPrimitiveValue',
      },
      'dark',
    )

    expect(setColor('lightPrimitive')).toEqual('lightPrimitiveValue')
  })

  it('should pass through the provided light value if the primitives object does not contain it', () => {
    const setColor = createSetColor(
      {
        lightPrimitive: 'lightPrimitiveValue',
        darkPrimitive: 'darkPrimitiveValue',
      },
      'light',
    )

    expect(
      setColor('non-existent-value-light', 'non-existent-value-dark'),
    ).toEqual('non-existent-value-light')
  })

  it('should pass through the provided dark value if the primitives object does not contain it', () => {
    const setColor = createSetColor(
      {
        lightPrimitive: 'lightPrimitiveValue',
        darkPrimitive: 'darkPrimitiveValue',
      },
      'dark',
    )

    expect(
      setColor('non-existent-value-light', 'non-existent-value-dark'),
    ).toEqual('non-existent-value-dark')
  })
})

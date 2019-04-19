import {generateColors} from '../src/colorsGenerator'
import {valid as validPrimitivesFixture} from './fixtures/primitives'

describe('Colors generator', () => {
  it('should generate a valid light colors and setColor helper', () => {
    const {colors, setColor} = generateColors(validPrimitivesFixture, 'light')

    expect(colors.background).toBe('mono-100-value')
    expect(colors.buttonTertiaryFill).toBe('mono-200-value')

    expect(setColor('mono100', 'mono1000')).toEqual('mono-100-value')
  })

  it('should generate a valid dark colors and setColor helper', () => {
    const {colors, setColor} = generateColors(validPrimitivesFixture, 'dark')

    expect(colors.background).toBe('mono-1000-value')
    expect(colors.buttonTertiaryFill).toBe('mono-800-value')

    expect(setColor('mono100', 'mono1000')).toEqual('mono-1000-value')
  })
})

import {generateColors} from '../src/colorsGenerator'
import {valid as validPrimitivesFixture} from './fixtures/primitives'

describe('Colors generator', () => {
  it('should generate a valid light colors', () => {
    const colors = generateColors(validPrimitivesFixture, 'light')

    expect(colors.background).toBe('mono-100-value')
    expect(colors.buttonTertiaryFill).toBe('mono-200-value')
  })

  it('should generate a valid dark colors and setColor helper', () => {
    const colors = generateColors(validPrimitivesFixture, 'dark')

    expect(colors.background).toBe('mono-1000-value')
    expect(colors.buttonTertiaryFill).toBe('mono-800-value')
  })
})

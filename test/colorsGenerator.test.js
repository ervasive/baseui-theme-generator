import {generateColors} from '../src/colorsGenerator'
import {valid as validPrimitivesFixture} from './fixtures/primitives'

describe('Colors generator', () => {
  it('should generate a valid light colors', () => {
    const {tokens} = generateColors(validPrimitivesFixture, 'light')

    expect(tokens.background).toBe('mono-100-value')
    expect(tokens.buttonTertiaryFill).toBe('mono-200-value')
  })

  it('should generate a valid dark colors', () => {
    const {tokens} = generateColors(validPrimitivesFixture, 'dark')

    expect(tokens.background).toBe('mono-1000-value')
    expect(tokens.buttonTertiaryFill).toBe('mono-800-value')
  })

  it('should generate colors with fallback for optional ones', () => {
    const primitives = {...validPrimitivesFixture}
    delete primitives.rating200
    delete primitives.rating400

    const {tokens: light} = generateColors(primitives, 'light')
    expect(light.rating200).toBe('#FFE1A5')
    expect(light.rating400).toBe('#FFC043')

    const {tokens: dark} = generateColors(primitives, 'dark')
    expect(dark.rating200).toBe('#FFE1A5')
    expect(dark.rating400).toBe('#FFC043')
  })
})

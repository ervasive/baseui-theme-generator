import {generateColors} from '../src/colorsGenerator'
import {valid as validPrimitivesFixture} from './fixtures/primitives'

describe('Colors generator', () => {
  it('should generate a valid light colors', () => {
    expect(generateColors(validPrimitivesFixture)).toMatchSnapshot()
  })

  it('should generate a valid dark colors', () => {
    expect(
      generateColors({...validPrimitivesFixture, type: 'dark'}),
    ).toMatchSnapshot()
  })

  it('should generate colors with fallback for optional ones', () => {
    const primitives = {...validPrimitivesFixture}
    delete primitives.rating200
    delete primitives.rating400

    expect(generateColors(primitives)).toMatchSnapshot()

    expect(generateColors({...primitives, type: 'dark'})).toMatchSnapshot()
  })
})

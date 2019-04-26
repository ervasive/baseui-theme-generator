import {generateTheme} from '../src'

describe('Theme generation', () => {
  it('should return a light theme as the default one', () => {
    expect(generateTheme()).toMatchSnapshot()
  })

  it('should return a default light theme', () => {
    expect(generateTheme({type: 'light'})).toMatchSnapshot()
  })

  it('should return a default dark theme', () => {
    expect(generateTheme({type: 'dark'})).toMatchSnapshot()
  })

  it('should return a customized light theme', () => {
    expect(
      generateTheme({
        type: 'light',
        palette: {
          primary: 'blue',
          negative: '#ff0000',
          warning: 'rgb(255, 165, 0)',
          positive: 'rgba(0, 255, 0, 1)',
          mono: 'hsl(0, 0%, 50%)',
          rating: 'hsla(60, 100%, 50%, 1)',
          additional: 'brown',
        },
        typography: {
          primaryFontFamily: 'sans-serif',
        },
      }),
    ).toMatchSnapshot()

    expect(
      generateTheme({
        type: 'light',
        palette: {
          primary: {400: 'blue'},
          negative: {400: '#ff0000'},
          warning: {400: 'rgb(255, 165, 0)'},
          positive: {400: 'rgba(0, 255, 0, 1)'},
          mono: {400: 'hsl(0, 0%, 50%)'},
          rating: {400: 'hsla(60, 100%, 50%, 1)'},
          additional: {400: 'brown'},
        },
        typography: {
          primaryFontFamily: 'sans-serif',
        },
      }),
    ).toMatchSnapshot()
  })

  it('should return a customized dark theme', () => {
    expect(
      generateTheme({
        type: 'dark',
        palette: {
          primary: 'blue',
          negative: '#ff0000',
          warning: 'rgb(255, 165, 0)',
          positive: 'rgba(0, 255, 0, 1)',
          mono: 'hsl(0, 0%, 50%)',
          rating: 'hsla(60, 100%, 50%, 1)',
          additional: 'brown',
        },
        typography: {
          primaryFontFamily: 'sans-serif',
        },
      }),
    ).toMatchSnapshot()

    expect(
      generateTheme({
        type: 'dark',
        palette: {
          primary: {400: 'blue'},
          negative: {400: '#ff0000'},
          warning: {400: 'rgb(255, 165, 0)'},
          positive: {400: 'rgba(0, 255, 0, 1)'},
          mono: {400: 'hsl(0, 0%, 50%)'},
          rating: {400: 'hsla(60, 100%, 50%, 1)'},
          additional: {400: 'brown'},
        },
        typography: {
          primaryFontFamily: 'sans-serif',
        },
      }),
    ).toMatchSnapshot()
  })

  it('return a theme with overrides applied', () => {
    expect(
      generateTheme({
        overrides: theme => ({
          colors: {
            background: 'red',
            backgroundInv: theme.colors.primary,
          },
        }),
      }),
    ).toMatchSnapshot()
  })
})

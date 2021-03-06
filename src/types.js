// @flow
export {ThemeT, ColorsT, TypographyT} from 'baseui/styles/types.js.flow'

export type ThemeConfigT = {
  type?: ThemeConfigTypeT,
  palette?: ThemeConfigPaletteT,
  typography?: ThemeConfigTypographyT,
  overrides?: Function,
}

export type ThemeConfigTypeT = 'light' | 'dark'

export type ThemeConfigPaletteT = {[string]: ThemeConfigColorT}

export type ThemeConfigTypographyT = {
  primaryFontFamily?: string,
}

export type ThemeConfigColorT =
  | string
  | {
      '50'?: string,
      '100'?: string,
      '200'?: string,
      '300'?: string,
      '400': string,
      '500'?: string,
      '600'?: string,
      '700'?: string,
      '800'?: string,
      '900'?: string,
      '1000'?: string,
      contrast?: number,
      hueOffset?: number,
    }

export type ThemePrimitivesT = {
  // Theme type
  type: ThemeConfigTypeT,

  // Primary Palette
  primary: string,
  primary50: string,
  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary500: string,
  primary600: string,
  primary700: string,
  primary800: string,
  primary900: string,
  primary1000: string,

  // Alert Palette
  negative: string,
  negative50: string,
  negative100: string,
  negative200: string,
  negative300: string,
  negative400: string,
  negative500: string,
  negative600: string,
  negative700: string,
  negative800: string,
  negative900: string,
  negative1000: string,

  // Warning Palette
  warning: string,
  warning50: string,
  warning100: string,
  warning200: string,
  warning300: string,
  warning400: string,
  warning500: string,
  warning600: string,
  warning700: string,
  warning800: string,
  warning900: string,
  warning1000: string,

  // Success Palette
  positive: string,
  positive50: string,
  positive100: string,
  positive200: string,
  positive300: string,
  positive400: string,
  positive500: string,
  positive600: string,
  positive700: string,
  positive800: string,
  positive900: string,
  positive1000: string,

  // Monochrome Palette
  mono50: string,
  mono100: string,
  mono200: string,
  mono300: string,
  mono400: string,
  mono500: string,
  mono600: string,
  mono700: string,
  mono800: string,
  mono900: string,
  mono1000: string,
  white: string,
  black: string,

  // Typography
  primaryFontFamily: string,
}

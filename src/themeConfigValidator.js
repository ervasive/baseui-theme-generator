// @flow
import {parseToRgb} from 'polished'

import {
  type ThemeConfigT,
  type ThemeConfigTypeT,
  type ThemeConfigPaletteT,
  type ThemeConfigTypographyT,
} from './types'

const colorShape = [
  `{`,
  `\t50:        string [optional] (css color value)`,
  `\t100:       string [optional] (css color value)`,
  `\t200:       string [optional] (css color value)`,
  `\t300:       string [optional] (css color value)`,
  `\t400:       string [required] (css color value)`,
  `\t500:       string [optional] (css color value)`,
  `\t600:       string [optional] (css color value)`,
  `\t700:       string [optional] (css color value)`,
  `\t800:       string [optional] (css color value)`,
  `\t900:       string [optional] (css color value)`,
  `\t1000:      string [optional] (css color value)`,
  `\tcontrast:  number [optional] (from 0.0 to 1.0)`,
  `\thueOffset: number [optional] (degrees, from -360 to 360)`,
  `}`,
].join(`\n`)

const getInvalidColorErrorMessage = colorName =>
  `Invalid color.\nThe provided palette contains one or more invalid colors. ` +
  `The '${colorName}' color must be either a valid CSS color value (in ` +
  `form of a string), or an object with the following shape:\n` +
  colorShape

export function validateType(type?: ThemeConfigTypeT): void {
  if (typeof type == 'undefined') return

  if (typeof type !== 'string' || !['light', 'dark'].includes(type)) {
    throw new Error(
      `Invalid theme type configuration. Allowed values (if provided), are: ` +
        `'light', 'dark'`,
    )
  }
}

export function validatePalette(palette?: ThemeConfigPaletteT): void {
  if (typeof palette == 'undefined') return

  if (
    typeof palette !== 'object' ||
    palette === null ||
    Array.isArray(palette)
  ) {
    throw new Error(
      `Invalid palette configuration. Palette (if provided), must be an ` +
        `object containing a collection of colors.`,
    )
  }

  for (let [colorName, colorValue] of Object.entries(palette)) {
    if (typeof colorValue === 'string') {
      try {
        parseToRgb(colorValue)
        continue
      } catch (e) {
        throw new Error(getInvalidColorErrorMessage(colorName))
      }
    }

    if (
      typeof colorValue !== 'object' ||
      colorValue === null ||
      !colorValue.hasOwnProperty(400)
    ) {
      throw new Error(getInvalidColorErrorMessage(colorName))
    }

    ;[
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ].map(c => {
      try {
        colorValue.hasOwnProperty(c) && parseToRgb(String(colorValue[c]))
      } catch (e) {
        throw new Error(
          `Invalid color variant.\nThe '${colorName}[${c}]' color variant ` +
            `must be a valid CSS color value (in form of a string). Make ` +
            `sure that all provided color objects have the following shape:\n` +
            colorShape,
        )
      }
    })

    if (
      typeof colorValue.contrast !== 'undefined' &&
      (typeof colorValue.contrast !== 'number' ||
        (colorValue.contrast > 1 || colorValue.contrast < 0))
    ) {
      throw new Error(
        `Invalid 'contrast' value.\nThe 'contrast' value of '${colorName}' ` +
          `color is out of allowed range. Make sure that all provided color ` +
          `objects have the following shape: \n` +
          colorShape,
      )
    }

    if (
      typeof colorValue.hueOffset !== 'undefined' &&
      (typeof colorValue.hueOffset !== 'number' ||
        (colorValue.hueOffset > 360 || colorValue.hueOffset < -360))
    ) {
      throw new Error(
        `Invalid 'hueOffset' value.\nThe 'hueOffset' value of '${colorName}' ` +
          `color must be a number in the range of -360 to 360. Make sure ` +
          `that all provided color objects have the following shape: \n` +
          colorShape,
      )
    }
  }
}

export function validateTypography(typography?: ThemeConfigTypographyT): void {
  if (typeof typography == 'undefined') return

  if (
    typeof typography !== 'object' ||
    typography === null ||
    Array.isArray(typography)
  ) {
    throw new Error(
      `Invalid typography configuration. Typography (if provided), must be an ` +
        `object of the following shape:\n` +
        [`{`, `\tprimaryFontFamily?: string`, `}`].join(`\n`),
    )
  }

  if (typeof typography.primaryFontFamily == 'undefined') return

  if (
    typeof typography.primaryFontFamily !== 'string' ||
    typography.primaryFontFamily.length == 0
  ) {
    throw new Error(
      `Invalid typography configuration. The 'primaryFontFamily' property ` +
        `(if provided) must be a string containing font family names.`,
    )
  }
}

export function validateThemeConfig(theme?: ThemeConfigT): void {
  if (typeof theme == 'undefined') return

  validateType(theme.type)
  validatePalette(theme.palette)
  validateTypography(theme.typography)
}

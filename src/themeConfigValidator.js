// @flow
import {parseToRgb} from 'polished'

import {type ThemeConfigT, type ThemeConfigPaletteT} from './types'

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
  `Invalid color.\nThe '${colorName}' color must be either a valid CSS color ` +
  `value (in form of a string), or an object with the following shape:\n` +
  colorShape

export function validatePalette(palette: ThemeConfigPaletteT): void {
  if (!palette) throw new Error(`Palette object was not provided.`)

  if (
    typeof palette !== 'object' ||
    !(
      palette.hasOwnProperty('primary') &&
      palette.hasOwnProperty('negative') &&
      palette.hasOwnProperty('warning') &&
      palette.hasOwnProperty('positive') &&
      palette.hasOwnProperty('mono')
    )
  ) {
    throw new Error(
      `Invalid palette.\nMake sure that all required colors are provided ` +
        `(primary, negative, warning, positive, mono) and each one is either ` +
        `a valid CSS color value (in form of a string), or is an object with ` +
        `the following shape:\n${colorShape}`,
    )
  }

  if (
    palette.hasOwnProperty('type') &&
    !['light', 'dark'].includes(palette.type)
  ) {
    throw new Error(
      `Invalid palette type.\nIt looks like the type of the provided palette ` +
        `is invalid. Allowed values are: 'light', 'dark'.`,
    )
  }

  for (let [colorName, colorValue] of Object.entries(palette)) {
    // Ignore the list of allowed non ThemeConfigColorT elements that should've
    // been validated prior this step.
    if (['type'].includes(colorName)) continue
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
      colorValue.hasOwnProperty('contrast') &&
      (Number(colorValue.contrast) > 1 || Number(colorValue.contrast) < 0)
    ) {
      throw new Error(
        `Invalid 'contrast' value.\nThe 'contrast' value of '${colorName}' ` +
          `color is out of allowed range. Make sure that all provided color ` +
          `objects have the following shape: \n` +
          colorShape,
      )
    }

    if (
      colorValue.hasOwnProperty('hueOffset') &&
      (isNaN(Number(colorValue.hueOffset)) ||
        Number(colorValue.hueOffset) < -360 ||
        Number(colorValue.hueOffset) > 360)
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

export function validateThemeConfig(theme: ThemeConfigT): void {
  validatePalette(theme.palette)
}

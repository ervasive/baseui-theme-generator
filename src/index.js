// @flow
import deepMerge from 'baseui/utils/deep-merge'
import {validateThemeConfig} from './themeConfigValidator'
import {generatePrimitives} from './primitivesGenerator'
import {generateColors} from './colorsGenerator'

import {type ThemeConfigT} from './types'

export function generateTheme(
  theme: ThemeConfigT,
  overrides?: Function = () => {},
) {
  try {
    validateThemeConfig(theme)

    const themePrimitives = generatePrimitives(theme)
    const {tokens, themed} = generateColors(themePrimitives, theme.palette.type)

    let primaryFontFamily

    if (!theme.typography || !theme.typography.primaryFontFamily) {
      primaryFontFamily =
        'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
    } else {
      primaryFontFamily = theme.typography.primaryFontFamily
    }

    const result = {
      colors: tokens,
      breakpoints: {
        small: 320,
        medium: 600,
        large: 1280,
      },
      typography: {
        font100: {
          fontFamily: primaryFontFamily,
          fontSize: '11px',
          fontWeight: 'normal',
          lineHeight: '16px',
        },
        font200: {
          fontFamily: primaryFontFamily,
          fontSize: '12px',
          fontWeight: 'normal',
          lineHeight: '20px',
        },
        font250: {
          fontFamily: primaryFontFamily,
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: '20px',
        },
        font300: {
          fontFamily: primaryFontFamily,
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: '20px',
        },
        font350: {
          fontFamily: primaryFontFamily,
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: '20px',
        },
        font400: {
          fontFamily: primaryFontFamily,
          fontSize: '16px',
          fontWeight: 'normal',
          lineHeight: '24px',
        },
        font450: {
          fontFamily: primaryFontFamily,
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: '24px',
        },
        font500: {
          fontFamily: primaryFontFamily,
          fontSize: '20px',
          fontWeight: 'bold',
          lineHeight: '28px',
        },
        font600: {
          fontFamily: primaryFontFamily,
          fontSize: '24px',
          fontWeight: 'bold',
          lineHeight: '36px',
        },
        font700: {
          fontFamily: primaryFontFamily,
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '48px',
        },
        font800: {
          fontFamily: primaryFontFamily,
          fontSize: '40px',
          fontWeight: 'bold',
          lineHeight: '56px',
        },
        font900: {
          fontFamily: primaryFontFamily,
          fontSize: '52px',
          fontWeight: 'bold',
          lineHeight: '68px',
        },
        font1000: {
          fontFamily: primaryFontFamily,
          fontSize: '72px',
          fontWeight: 'normal',
          lineHeight: '96px',
        },
        font1100: {
          fontFamily: primaryFontFamily,
          fontSize: '96px',
          fontWeight: 'normal',
          lineHeight: '116px',
        },
      },
      sizing: {
        scale0: '2px',
        scale100: '4px',
        scale200: '6px',
        scale300: '8px',
        scale400: '10px',
        scale500: '12px',
        scale550: '14px',
        scale600: '16px',
        scale700: '20px',
        scale800: '24px',
        scale900: '32px',
        scale1000: '40px',
        scale1200: '48px',
        scale1400: '56px',
        scale1600: '64px',
        scale2400: '96px',
        scale3200: '128px',
        scale4800: '192px',
      },
      lighting: {
        shadow400: themed(
          `0 1px 4px hsla(0, 0%, 0%, 0.16)`,
          `0 1px 4px hsla(0, 0%, 0%, 0.16)`,
        ),
        shadow500: themed(
          `0 2px 8px hsla(0, 0%, 0%, 0.16)`,
          `0 1px 4px hsla(0, 0%, 0%, 0.16)`,
        ),
        shadow600: themed(
          `0 4px 16px hsla(0, 0%, 0%, 0.16)`,
          `0 4px 16px hsla(0, 0%, 0%, 0.16)`,
        ),
        shadow700: themed(
          `0 8px 24px hsla(0, 0%, 0%, 0.16)`,
          `0 8px 24px hsla(0, 0%, 0%, 0.16)`,
        ),
        overlay0: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0)`,
        ),
        overlay100: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)`,
        ),
        overlay200: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)`,
        ),
        overlay300: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)`,
        ),
        overlay400: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)`,
        ),
        overlay500: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)`,
        ),
        overlay600: themed(
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)`,
          `inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)`,
        ),
      },
      borders: {
        border100: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.04)',
            'hsla(0, 0%, 100%, 0.02)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        border200: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.08)',
            'hsla(0, 0%, 100%, 0.05)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        border300: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.12)',
            'hsla(0, 0%, 100%, 0.08)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        border400: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.16)',
            'hsla(0, 0%, 100%, 0.1)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        border500: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.2)',
            'hsla(0, 0%, 100%, 0.12)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        border600: {
          borderColor: themed(
            'hsla(0, 0%, 0%, 0.24)',
            'hsla(0, 0%, 100%, 0.15)',
          ),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
        radius100: '2px',
        radius200: '4px',
        radius300: '8px',
        radius400: '12px',
        useRoundedCorners: true,
      },
      animation: {
        timing100: '0.25s',
        timing400: '0.4s',
        timing700: '0.6s',
        easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
        easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
        easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        modal: 2000,
      },
      tooltip: {
        backgroundColor: themed('mono900', 'mono200'),
      },
    }

    return deepMerge(result, overrides(result, themed))
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message)
  }
}

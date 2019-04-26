// @flow

import {type ThemePrimitivesT, type ColorsT} from './types'

export function generateColors(
  primitives: ThemePrimitivesT,
): {colors: ColorsT, themed: Function} {
  const themed = (light: string, dark: ?string, fallback: ?string): string => {
    const color = primitives.type === 'light' || !dark ? light : dark

    if (primitives.hasOwnProperty(color)) {
      return primitives[color]
    } else {
      return fallback ? fallback : color
    }
  }

  return {
    themed,
    colors: {
      ...primitives,

      // Rating Palette,
      rating200: themed('rating200', 'rating200', '#FFE1A5'),
      rating400: themed('rating400', 'rating400', '#FFC043'),

      // Semantic Colors

      // Font Color
      colorPrimary: themed('mono1000', 'mono100'),
      colorSecondary: themed('mono800', 'mono200'),

      // Background
      background: themed('mono100', 'mono1000'),
      backgroundAlt: themed('mono100', 'mono700'),
      backgroundInv: themed('mono1000', 'mono100'),

      // Foreground
      foreground: themed('mono1000', 'mono100'),
      foregroundAlt: themed('mono800', 'mono300'),
      foregroundInv: themed('mono100', 'mono1000'),

      // Borders
      border: themed('mono500', 'mono600'),
      borderAlt: themed('mono600', 'mono700'),
      borderFocus: themed('primary400', 'mono400'),
      borderError: themed('negative400', 'mono400'),

      // Buttons
      buttonPrimaryFill: themed('primary400', 'primary500'),
      buttonPrimaryText: themed('mono100', 'mono100'),
      buttonPrimaryHover: themed('primary500', 'primary600'),
      buttonPrimaryActive: themed('primary600', 'primary700'),

      buttonSecondaryFill: themed('primary50', 'mono600'),
      buttonSecondaryText: themed('primary400', 'mono100'),
      buttonSecondaryHover: themed('primary100', 'mono500'),
      buttonSecondaryActive: themed('primary200', 'mono400'),

      buttonTertiaryFill: themed('mono200', 'mono800'),
      buttonTertiaryText: themed('primary400', 'mono100'),
      buttonTertiaryHover: themed('mono400', 'mono700'),
      buttonTertiaryActive: themed('mono500', 'mono600'),
      // button $selected only applies to tertiary variant.
      buttonTertiarySelectedFill: themed('primary400', 'primary500'),
      buttonTertiarySelectedText: themed('mono100', 'mono100'),

      buttonMinimalFill: themed('transparent'),
      buttonMinimalText: themed('primary400', 'primary400'),
      buttonMinimalHover: themed('mono200', 'mono800'),
      buttonMinimalActive: themed('mono400', 'mono700'),

      buttonDisabledFill: themed('mono300', 'mono700'),
      buttonDisabledText: themed('mono600', 'mono500'),

      // Breadcrumbs
      breadcrumbsText: themed('mono900', 'mono100'),
      breadcrumbsSeparatorFill: themed('mono700', 'mono200'),

      // Datepicker
      datepickerBackground: themed('mono100', 'mono600'),
      datepickerDayFont: themed('mono1000', 'white'),
      datepickerDayFontDisabled: themed('mono500', 'mono100'),
      datepickerDayPseudoSelected: themed('primary100', 'mono500'),
      datepickerDayPseudoHighlighted: themed('primary200', 'mono600'),

      // FileUploader
      fileUploaderBackgroundColor: themed('mono200', 'mono700'),
      fileUploaderBackgroundColorActive: themed('primary50', 'mono600'),
      fileUploaderBorderColorActive: themed('primary400', 'primary400'),
      fileUploaderBorderColorDefault: themed('mono500', 'mono500'),
      fileUploaderMessageColor: themed('mono600', 'mono100'),

      // Links
      linkText: themed('primary400', 'primary300'),
      linkVisited: themed('primary500', 'primary300'),
      linkHover: themed('primary600', 'primary50'),
      linkActive: themed('primary600', 'primary50'),

      // Shadow
      shadowFocus: themed('rgba(39, 110, 241, 0.32)'),
      shadowError: themed('rgba(229, 73, 55, 0.32)'),

      // List
      listHeaderFill: themed('white', 'mono600'),
      listBodyFill: themed('mono200', 'mono700'),
      listIconFill: themed('mono500', 'mono100'),
      listBorder: themed('mono500', 'mono500'),

      // ProgressSteps
      progressStepsIconActiveFill: themed('primary100', 'mono100'),

      // Tick
      tickFill: themed('white', 'mono1000'),
      tickFillHover: themed('mono400', 'mono800'),
      tickFillActive: themed('mono500', 'mono600'),
      tickFillSelected: themed('primary400', 'primary500'),
      tickFillSelectedHover: themed('primary500', 'primary600'),
      tickFillSelectedHoverActive: themed('primary600', 'primary700'),

      tickFillError: themed('negative50', 'negative700'),
      tickFillErrorHover: themed('negative100', 'negative600'),
      tickFillErrorHoverActive: themed('negative200', 'negative500'),
      tickFillErrorSelected: themed('negative400', 'negative500'),
      tickFillErrorSelectedHover: themed('negative500', 'negative600'),
      tickFillErrorSelectedHoverActive: themed('negative600', 'negative700'),

      tickFillDisabled: themed('mono300', 'mono700'),
      tickBorder: themed('mono700', 'mono300'),
      tickBorderError: themed('negative400', 'negative400'),
      tickMarkFill: themed('white', 'mono100'),
      tickMarkFillDisabled: themed('mono600', 'mono400'),

      // Slider/Toggle
      sliderTrackFill: themed('mono400', 'mono600'),
      sliderTrackFillHover: themed('mono500', 'mono500'),
      sliderTrackFillActive: themed('mono600', 'mono400'),
      sliderTrackFillSelected: themed('primary400', 'primary500'),
      sliderTrackFillSelectedHover: themed('primary400', 'primary700'),
      sliderTrackFillSelectedActive: themed('primary500', 'primary600'),
      sliderTrackFillDisabled: themed('mono300', 'mono700'),
      sliderHandleFill: themed('white', 'mono300'),
      sliderHandleFillHover: themed('white', 'mono300'),
      sliderHandleFillActive: themed('white', 'mono300'),
      sliderHandleFillSelected: themed('white', 'primary500'),
      sliderHandleFillSelectedHover: themed('white', 'primary600'),
      sliderHandleFillSelectedActive: themed('white', 'primary700'),
      sliderHandleFillDisabled: themed('mono500', 'mono600'),
      sliderHandleInnerFill: themed('mono400', 'mono300'),
      sliderHandleInnerFillDisabled: themed('mono400', 'mono500'),
      sliderHandleInnerFillSelectedHover: themed('primary400', 'primary600'),
      sliderHandleInnerFillSelectedActive: themed('primary500', 'primary700'),

      sliderBorder: themed('mono500', 'white'),
      sliderBorderHover: themed('primary400', 'white'),
      sliderBorderDisabled: themed('mono600', 'mono400'),

      // Inputs
      inputFill: themed('mono200', 'mono600'),
      inputFillEnhancer: themed('mono400', 'mono500'),
      inputFillError: themed('negative50', 'mono600'),
      inputFillDisabled: themed('mono300', 'mono700'),
      inputTextDisabled: themed('mono600', 'mono500'),

      // Menu
      menuFill: themed('mono100', 'mono600'),
      menuFillHover: themed('mono200', 'mono700'),
      menuFontDefault: themed('mono800', 'mono300'),
      menuFontDisabled: themed('mono500', 'mono400'),
      menuFontHighlighted: themed('primary400', 'mono200'),
      menuFontSelected: themed('mono1000', 'white'),

      // Pagination
      paginationTriangleDown: themed('mono800', 'mono100'),

      // Header navigation
      headerNavigationFill: themed('transparent', 'mono800'),

      // Tab
      tabBarFill: themed('mono200', 'mono1000'),
      tabColor: themed('mono800', 'mono300'),

      // Notification
      notificationPrimaryBackground: themed('primary50', 'primary700'),
      notificationPrimaryText: themed('primary500', 'primary200'),
      notificationPositiveBackground: themed('positive50', 'positive700'),
      notificationPositiveText: themed('positive500', 'positive200'),
      notificationWarningBackground: themed('warning50', 'warning700'),
      notificationWarningText: themed('warning500', 'warning200'),
      notificationNegativeBackground: themed('negative50', 'negative700'),
      notificationNegativeText: themed('negative500', 'negative200'),

      // Tag

      // Remove this section of theme values in next major version
      tagBackground: themed('mono100', 'mono1000'),
      tagNeutralBackground: themed('mono900', 'mono600'),
      tagPrimaryBackground: themed('primary400', 'primary500'),
      tagPositiveBackground: themed('positive400', 'positive500'),
      tagWarningBackground: themed('warning400', 'warning500'),
      tagNegativeBackground: themed('negative400', 'negative500'),
      tagRGBGradient: themed('0, 0, 0'),
      tagRGBGradientSecondary: themed('255, 255, 255'),
      // ^^^^^^^

      tagSolidRampUnit: themed('400', '500'),
      tagSolidHoverRampUnit: themed('50', '500'),
      tagSolidActiveRampUnit: themed('100', '400'),
      tagSolidDisabledRampUnit: themed('50', '700'),
      tagSolidFontRampUnit: themed('50', '100'),
      tagSolidFontHoverRampUnit: themed('500', '100'),
      tagLightRampUnit: themed('50', '700'),
      tagLightHoverRampUnit: themed('100', '700'),
      tagLightActiveRampUnit: themed('100', '600'),
      tagLightDisabledRampUnit: themed('50', '700'),
      tagLightFontRampUnit: themed('500', '100'),
      tagLightFontHoverRampUnit: themed('500', '100'),
      tagOutlinedRampUnit: themed('400', '500'),
      tagOutlinedHoverRampUnit: themed('500', '400'),
      tagOutlinedActiveRampUnit: themed('600', '300'),
      tagOutlinedDisabledRampUnit: themed('50', '700'),
      tagOutlinedFontRampUnit: themed('500', '200'),
      tagOutlinedFontHoverRampUnit: themed('50', '700'),
      tagFontDisabledRampUnit: themed('200', '500'),

      tagNeutralSolidBackground: themed('mono900', 'mono600'),
      tagNeutralSolidHover: themed('mono300', 'mono600'),
      tagNeutralSolidActive: themed('mono400', 'mono500'),
      tagNeutralSolidDisabled: themed('mono200', 'mono700'),
      tagNeutralSolidFont: themed('mono100', 'mono200'),
      tagNeutralSolidFontHover: themed('mono900', 'mono200'),
      tagNeutralLightBackground: themed('mono300', 'mono800'),
      tagNeutralLightHover: themed('mono300', 'mono800'),
      tagNeutralLightActive: themed('mono400', 'mono700'),
      tagNeutralLightDisabled: themed('mono200', 'mono700'),
      tagNeutralLightFont: themed('mono900', 'mono200'),
      tagNeutralLightFontHover: themed('mono900', 'mono200'),
      tagNeutralOutlinedBackground: themed('mono900', 'mono600'),
      tagNeutralOutlinedHover: themed('mono800', 'mono500'),
      tagNeutralOutlinedActive: themed('mono900', 'mono400'),
      tagNeutralOutlinedDisabled: themed('mono200', 'mono700'),
      tagNeutralOutlinedFont: themed('mono900', 'mono200'),
      tagNeutralOutlinedFontHover: themed('mono200', 'mono900'),
      tagNeutralFontDisabled: themed('mono500', 'mono500'),

      tagPrimarySolidBackground: themed('primary400', 'primary500'),
      tagPrimarySolidHover: themed('primary50', 'primary500'),
      tagPrimarySolidActive: themed('primary100', 'primary400'),
      tagPrimarySolidDisabled: themed('primary50', 'primary700'),
      tagPrimarySolidFont: themed('primary50', 'primary100'),
      tagPrimarySolidFontHover: themed('primary500', 'primary100'),
      tagPrimaryLightBackground: themed('primary50', 'primary700'),
      tagPrimaryLightHover: themed('primary100', 'primary700'),
      tagPrimaryLightActive: themed('primary100', 'primary600'),
      tagPrimaryLightDisabled: themed('primary50', 'primary700'),
      tagPrimaryLightFont: themed('primary500', 'primary100'),
      tagPrimaryLightFontHover: themed('primary500', 'primary100'),
      tagPrimaryOutlinedBackground: themed('primary400', 'primary500'),
      tagPrimaryOutlinedHover: themed('primary500', 'primary400'),
      tagPrimaryOutlinedActive: themed('primary600', 'primary300'),
      tagPrimaryOutlinedDisabled: themed('primary50', 'primary700'),
      tagPrimaryOutlinedFont: themed('primary500', 'primary200'),
      tagPrimaryOutlinedFontHover: themed('primary50', 'primary700'),
      tagPrimaryFontDisabled: themed('primary200', 'primary500'),

      tagPositiveSolidBackground: themed('positive400', 'positive500'),
      tagPositiveSolidHover: themed('positive50', 'positive500'),
      tagPositiveSolidActive: themed('positive100', 'positive400'),
      tagPositiveSolidDisabled: themed('positive50', 'positive700'),
      tagPositiveSolidFont: themed('positive50', 'positive100'),
      tagPositiveSolidFontHover: themed('positive500', 'positive100'),
      tagPositiveLightBackground: themed('positive50', 'positive700'),
      tagPositiveLightHover: themed('positive100', 'positive700'),
      tagPositiveLightActive: themed('positive100', 'positive600'),
      tagPositiveLightDisabled: themed('positive50', 'positive700'),
      tagPositiveLightFont: themed('positive500', 'positive100'),
      tagPositiveLightFontHover: themed('positive500', 'positive100'),
      tagPositiveOutlinedBackground: themed('positive400', 'positive500'),
      tagPositiveOutlinedHover: themed('positive500', 'positive400'),
      tagPositiveOutlinedActive: themed('positive600', 'positive300'),
      tagPositiveOutlinedDisabled: themed('positive50', 'positive700'),
      tagPositiveOutlinedFont: themed('positive500', 'positive200'),
      tagPositiveOutlinedFontHover: themed('positive50', 'positive700'),
      tagPositiveFontDisabled: themed('positive200', 'positive500'),

      tagWarningSolidBackground: themed('warning400', 'warning500'),
      tagWarningSolidHover: themed('warning50', 'warning500'),
      tagWarningSolidActive: themed('warning100', 'warning400'),
      tagWarningSolidDisabled: themed('warning50', 'warning700'),
      tagWarningSolidFont: themed('warning50', 'warning100'),
      tagWarningSolidFontHover: themed('warning500', 'warning100'),
      tagWarningLightBackground: themed('warning50', 'warning700'),
      tagWarningLightHover: themed('warning100', 'warning700'),
      tagWarningLightActive: themed('warning100', 'warning600'),
      tagWarningLightDisabled: themed('warning50', 'warning700'),
      tagWarningLightFont: themed('warning500', 'warning100'),
      tagWarningLightFontHover: themed('warning500', 'warning100'),
      tagWarningOutlinedBackground: themed('warning400', 'warning500'),
      tagWarningOutlinedHover: themed('warning500', 'warning400'),
      tagWarningOutlinedActive: themed('warning600', 'warning300'),
      tagWarningOutlinedDisabled: themed('warning50', 'warning700'),
      tagWarningOutlinedFont: themed('warning500', 'warning200'),
      tagWarningOutlinedFontHover: themed('warning50', 'warning700'),
      tagWarningFontDisabled: themed('warning200', 'warning500'),

      tagNegativeSolidBackground: themed('negative400', 'negative500'),
      tagNegativeSolidHover: themed('negative50', 'negative500'),
      tagNegativeSolidActive: themed('negative100', 'negative400'),
      tagNegativeSolidDisabled: themed('negative50', 'negative700'),
      tagNegativeSolidFont: themed('negative50', 'negative100'),
      tagNegativeSolidFontHover: themed('negative500', 'negative100'),
      tagNegativeLightBackground: themed('negative50', 'negative700'),
      tagNegativeLightHover: themed('negative100', 'negative700'),
      tagNegativeLightActive: themed('negative100', 'negative600'),
      tagNegativeLightDisabled: themed('negative50', 'negative700'),
      tagNegativeLightFont: themed('negative500', 'negative100'),
      tagNegativeLightFontHover: themed('negative500', 'negative100'),
      tagNegativeOutlinedBackground: themed('negative400', 'negative500'),
      tagNegativeOutlinedHover: themed('negative500', 'negative400'),
      tagNegativeOutlinedActive: themed('negative600', 'negative300'),
      tagNegativeOutlinedDisabled: themed('negative50', 'negative700'),
      tagNegativeOutlinedFont: themed('negative500', 'negative200'),
      tagNegativeOutlinedFontHover: themed('negative50', 'negative700'),
      tagNegativeFontDisabled: themed('negative200', 'negative500'),

      // Table
      tableHeadBackgroundColor: themed('mono100', 'mono700'),
      tableBackground: themed('mono100', 'mono800'),
      tableFilter: themed('mono600', 'mono400'),
      tableFilterHeading: themed('mono700', 'mono300'),
      tableFilterBackground: themed('mono100', 'mono700'),
      tableFilterFooterBackground: themed('mono200', 'mono800'),

      // Toast
      toastText: themed('white'),
      toastPrimaryBackground: themed('primary500'),
      toastPositiveBackground: themed('positive500'),
      toastWarningBackground: themed('warning500'),
      toastNegativeBackground: themed('negative500'),

      // Spinner
      spinnerTrackFill: themed('mono900', 'mono100'),

      // Progress bar
      progressbarTrackFill: themed('mono900', 'mono100'),

      // Tooltip
      tooltipBackground: themed('mono900', 'mono200'),
      tooltipText: themed('mono100', 'mono1000'),
    },
  }
}

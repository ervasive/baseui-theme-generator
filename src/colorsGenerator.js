// @flow

import {type ThemePrimitivesT, type PaletteTypeT, type ColorsT} from './types'

export function generateColors(
  primitives: ThemePrimitivesT,
  type: PaletteTypeT,
): ColorsT {
  const setColor = (
    light: string,
    dark: ?string,
    fallback: ?string,
  ): string => {
    const color = type === 'light' || !dark ? light : dark

    if (primitives.hasOwnProperty(color)) {
      return primitives[color]
    } else {
      return fallback ? fallback : color
    }
  }

  return {
    ...primitives,

    // Rating Palette,
    rating200: setColor('rating200', 'rating200', '#FFE1A5'),
    rating400: setColor('rating400', 'rating400', '#FFC043'),

    // Semantic Colors

    // Font Color
    colorPrimary: setColor('mono1000', 'mono100'),
    colorSecondary: setColor('mono800', 'mono200'),

    // Background
    background: setColor('mono100', 'mono1000'),
    backgroundAlt: setColor('mono100', 'mono700'),
    backgroundInv: setColor('mono1000', 'mono100'),

    // Foreground
    foreground: setColor('mono1000', 'mono100'),
    foregroundAlt: setColor('mono800', 'mono300'),
    foregroundInv: setColor('mono100', 'mono1000'),

    // Borders
    border: setColor('mono500', 'mono600'),
    borderAlt: setColor('mono600', 'mono700'),
    borderFocus: setColor('primary400', 'mono400'),
    borderError: setColor('negative400', 'mono400'),

    // Buttons
    buttonPrimaryFill: setColor('primary400', 'primary500'),
    buttonPrimaryText: setColor('mono100', 'mono100'),
    buttonPrimaryHover: setColor('primary500', 'primary600'),
    buttonPrimaryActive: setColor('primary600', 'primary700'),

    buttonSecondaryFill: setColor('primary50', 'mono600'),
    buttonSecondaryText: setColor('primary400', 'mono100'),
    buttonSecondaryHover: setColor('primary100', 'mono500'),
    buttonSecondaryActive: setColor('primary200', 'mono400'),

    buttonTertiaryFill: setColor('mono200', 'mono800'),
    buttonTertiaryText: setColor('primary400', 'mono100'),
    buttonTertiaryHover: setColor('mono400', 'mono700'),
    buttonTertiaryActive: setColor('mono500', 'mono600'),
    // button $selected only applies to tertiary variant.
    buttonTertiarySelectedFill: setColor('primary400', 'primary500'),
    buttonTertiarySelectedText: setColor('mono100', 'mono100'),

    buttonMinimalFill: setColor('transparent'),
    buttonMinimalText: setColor('primary400', 'primary400'),
    buttonMinimalHover: setColor('mono200', 'mono800'),
    buttonMinimalActive: setColor('mono400', 'mono700'),

    buttonDisabledFill: setColor('mono300', 'mono700'),
    buttonDisabledText: setColor('mono600', 'mono500'),

    // Breadcrumbs
    breadcrumbsText: setColor('mono900', 'mono100'),
    breadcrumbsSeparatorFill: setColor('mono700', 'mono200'),

    // Datepicker
    datepickerBackground: setColor('mono100', 'mono600'),
    datepickerDayFont: setColor('mono1000', 'white'),
    datepickerDayFontDisabled: setColor('mono500', 'mono100'),
    datepickerDayPseudoSelected: setColor('primary100', 'mono500'),
    datepickerDayPseudoHighlighted: setColor('primary200', 'mono600'),

    // FileUploader
    fileUploaderBackgroundColor: setColor('mono200', 'mono700'),
    fileUploaderBackgroundColorActive: setColor('primary50', 'mono600'),
    fileUploaderBorderColorActive: setColor('primary400', 'primary400'),
    fileUploaderBorderColorDefault: setColor('mono500', 'mono500'),
    fileUploaderMessageColor: setColor('mono600', 'mono100'),

    // Links
    linkText: setColor('primary400', 'primary300'),
    linkVisited: setColor('primary500', 'primary300'),
    linkHover: setColor('primary600', 'primary50'),

    // Shadow
    shadowFocus: setColor('rgba(39, 110, 241, 0.32)'),
    shadowError: setColor('rgba(229, 73, 55, 0.32)'),

    // List
    listHeaderFill: setColor('white', 'mono600'),
    listBodyFill: setColor('mono200', 'mono700'),
    listIconFill: setColor('mono500', 'mono100'),
    listBorder: setColor('mono500', 'mono500'),

    // ProgressSteps
    progressStepsIconActiveFill: setColor('primary100', 'mono100'),

    // Tick
    tickFill: setColor('white', 'mono1000'),
    tickFillHover: setColor('mono400', 'mono800'),
    tickFillActive: setColor('mono500', 'mono600'),
    tickFillSelected: setColor('primary400', 'primary500'),
    tickFillSelectedHover: setColor('primary500', 'primary600'),
    tickFillSelectedHoverActive: setColor('primary600', 'primary700'),

    tickFillError: setColor('negative50', 'negative700'),
    tickFillErrorHover: setColor('negative100', 'negative600'),
    tickFillErrorHoverActive: setColor('negative200', 'negative500'),
    tickFillErrorSelected: setColor('negative400', 'negative500'),
    tickFillErrorSelectedHover: setColor('negative500', 'negative600'),
    tickFillErrorSelectedHoverActive: setColor('negative600', 'negative700'),

    tickFillDisabled: setColor('mono300', 'mono700'),
    tickBorder: setColor('mono700', 'mono300'),
    tickBorderError: setColor('negative400', 'negative400'),
    tickMarkFill: setColor('white', 'mono100'),
    tickMarkFillDisabled: setColor('mono600', 'mono400'),

    // Slider/Toggle
    sliderTrackFill: setColor('mono400', 'mono600'),
    sliderTrackFillHover: setColor('mono500', 'mono500'),
    sliderTrackFillActive: setColor('mono600', 'mono400'),
    sliderTrackFillSelected: setColor('primary400', 'primary500'),
    sliderTrackFillSelectedHover: setColor('primary400', 'primary700'),
    sliderTrackFillSelectedActive: setColor('primary500', 'primary600'),
    sliderTrackFillDisabled: setColor('mono300', 'mono700'),
    sliderHandleFill: setColor('white', 'mono300'),
    sliderHandleFillHover: setColor('white', 'mono300'),
    sliderHandleFillActive: setColor('white', 'mono300'),
    sliderHandleFillSelected: setColor('white', 'primary500'),
    sliderHandleFillSelectedHover: setColor('white', 'primary600'),
    sliderHandleFillSelectedActive: setColor('white', 'primary700'),
    sliderHandleFillDisabled: setColor('mono500', 'mono600'),
    sliderHandleInnerFill: setColor('mono400', 'mono300'),
    sliderHandleInnerFillDisabled: setColor('mono400', 'mono500'),
    sliderHandleInnerFillSelectedHover: setColor('primary400', 'primary600'),
    sliderHandleInnerFillSelectedActive: setColor('primary500', 'primary700'),

    sliderBorder: setColor('mono500', 'white'),
    sliderBorderHover: setColor('primary400', 'white'),
    sliderBorderDisabled: setColor('mono600', 'mono400'),

    // Inputs
    inputFill: setColor('mono200', 'mono600'),
    inputFillEnhancer: setColor('mono400', 'mono500'),
    inputFillError: setColor('negative50', 'mono600'),
    inputFillDisabled: setColor('mono300', 'mono700'),
    inputTextDisabled: setColor('mono600', 'mono500'),

    // Menu
    menuFill: setColor('mono100', 'mono600'),
    menuFillHover: setColor('mono200', 'mono700'),
    menuFontDefault: setColor('mono800', 'mono300'),
    menuFontDisabled: setColor('mono500', 'mono400'),
    menuFontHighlighted: setColor('primary400', 'mono200'),
    menuFontSelected: setColor('mono1000', 'white'),

    // Pagination
    paginationTriangleDown: setColor('mono800', 'mono100'),

    // Header navigation
    headerNavigationFill: setColor('transparent', 'mono800'),

    // Tab
    tabBarFill: setColor('mono200', 'mono1000'),
    tabColor: setColor('mono800', 'mono300'),

    // Notification
    notificationPrimaryBackground: setColor('primary50', 'primary700'),
    notificationPrimaryText: setColor('primary500', 'primary200'),
    notificationPositiveBackground: setColor('positive50', 'positive700'),
    notificationPositiveText: setColor('positive500', 'positive200'),
    notificationWarningBackground: setColor('warning50', 'warning700'),
    notificationWarningText: setColor('warning500', 'warning200'),
    notificationNegativeBackground: setColor('negative50', 'negative700'),
    notificationNegativeText: setColor('negative500', 'negative200'),

    // Tag

    // Remove this section of theme values in next major version
    tagBackground: setColor('mono100', 'mono1000'),
    tagNeutralBackground: setColor('mono900', 'mono600'),
    tagPrimaryBackground: setColor('primary400', 'primary500'),
    tagPositiveBackground: setColor('positive400', 'positive500'),
    tagWarningBackground: setColor('warning400', 'warning500'),
    tagNegativeBackground: setColor('negative400', 'negative500'),
    tagRGBGradient: setColor('0, 0, 0'),
    tagRGBGradientSecondary: setColor('255, 255, 255'),
    // ^^^^^^^

    tagSolidRampUnit: setColor('400', '500'),
    tagSolidHoverRampUnit: setColor('50', '500'),
    tagSolidActiveRampUnit: setColor('100', '400'),
    tagSolidDisabledRampUnit: setColor('50', '700'),
    tagSolidFontRampUnit: setColor('50', '100'),
    tagSolidFontHoverRampUnit: setColor('500', '100'),
    tagLightRampUnit: setColor('50', '700'),
    tagLightHoverRampUnit: setColor('100', '700'),
    tagLightActiveRampUnit: setColor('100', '600'),
    tagLightDisabledRampUnit: setColor('50', '700'),
    tagLightFontRampUnit: setColor('500', '100'),
    tagLightFontHoverRampUnit: setColor('500', '100'),
    tagOutlinedRampUnit: setColor('400', '500'),
    tagOutlinedHoverRampUnit: setColor('500', '400'),
    tagOutlinedActiveRampUnit: setColor('600', '300'),
    tagOutlinedDisabledRampUnit: setColor('50', '700'),
    tagOutlinedFontRampUnit: setColor('500', '200'),
    tagOutlinedFontHoverRampUnit: setColor('50', '700'),
    tagFontDisabledRampUnit: setColor('200', '500'),

    tagNeutralSolidBackground: setColor('mono900', 'mono600'),
    tagNeutralSolidHover: setColor('mono300', 'mono600'),
    tagNeutralSolidActive: setColor('mono400', 'mono500'),
    tagNeutralSolidDisabled: setColor('mono200', 'mono700'),
    tagNeutralSolidFont: setColor('mono100', 'mono200'),
    tagNeutralSolidFontHover: setColor('mono900', 'mono200'),
    tagNeutralLightBackground: setColor('mono300', 'mono800'),
    tagNeutralLightHover: setColor('mono300', 'mono800'),
    tagNeutralLightActive: setColor('mono400', 'mono700'),
    tagNeutralLightDisabled: setColor('mono200', 'mono700'),
    tagNeutralLightFont: setColor('mono900', 'mono200'),
    tagNeutralLightFontHover: setColor('mono900', 'mono200'),
    tagNeutralOutlinedBackground: setColor('mono900', 'mono600'),
    tagNeutralOutlinedHover: setColor('mono800', 'mono500'),
    tagNeutralOutlinedActive: setColor('mono900', 'mono400'),
    tagNeutralOutlinedDisabled: setColor('mono200', 'mono700'),
    tagNeutralOutlinedFont: setColor('mono900', 'mono200'),
    tagNeutralOutlinedFontHover: setColor('mono200', 'mono900'),
    tagNeutralFontDisabled: setColor('mono500', 'mono500'),

    tagPrimarySolidBackground: setColor('primary400', 'primary500'),
    tagPrimarySolidHover: setColor('primary50', 'primary500'),
    tagPrimarySolidActive: setColor('primary100', 'primary400'),
    tagPrimarySolidDisabled: setColor('primary50', 'primary700'),
    tagPrimarySolidFont: setColor('primary50', 'primary100'),
    tagPrimarySolidFontHover: setColor('primary500', 'primary100'),
    tagPrimaryLightBackground: setColor('primary50', 'primary700'),
    tagPrimaryLightHover: setColor('primary100', 'primary700'),
    tagPrimaryLightActive: setColor('primary100', 'primary600'),
    tagPrimaryLightDisabled: setColor('primary50', 'primary700'),
    tagPrimaryLightFont: setColor('primary500', 'primary100'),
    tagPrimaryLightFontHover: setColor('primary500', 'primary100'),
    tagPrimaryOutlinedBackground: setColor('primary400', 'primary500'),
    tagPrimaryOutlinedHover: setColor('primary500', 'primary400'),
    tagPrimaryOutlinedActive: setColor('primary600', 'primary300'),
    tagPrimaryOutlinedDisabled: setColor('primary50', 'primary700'),
    tagPrimaryOutlinedFont: setColor('primary500', 'primary200'),
    tagPrimaryOutlinedFontHover: setColor('primary50', 'primary700'),
    tagPrimaryFontDisabled: setColor('primary200', 'primary500'),

    tagPositiveSolidBackground: setColor('positive400', 'positive500'),
    tagPositiveSolidHover: setColor('positive50', 'positive500'),
    tagPositiveSolidActive: setColor('positive100', 'positive400'),
    tagPositiveSolidDisabled: setColor('positive50', 'positive700'),
    tagPositiveSolidFont: setColor('positive50', 'positive100'),
    tagPositiveSolidFontHover: setColor('positive500', 'positive100'),
    tagPositiveLightBackground: setColor('positive50', 'positive700'),
    tagPositiveLightHover: setColor('positive100', 'positive700'),
    tagPositiveLightActive: setColor('positive100', 'positive600'),
    tagPositiveLightDisabled: setColor('positive50', 'positive700'),
    tagPositiveLightFont: setColor('positive500', 'positive100'),
    tagPositiveLightFontHover: setColor('positive500', 'positive100'),
    tagPositiveOutlinedBackground: setColor('positive400', 'positive500'),
    tagPositiveOutlinedHover: setColor('positive500', 'positive400'),
    tagPositiveOutlinedActive: setColor('positive600', 'positive300'),
    tagPositiveOutlinedDisabled: setColor('positive50', 'positive700'),
    tagPositiveOutlinedFont: setColor('positive500', 'positive200'),
    tagPositiveOutlinedFontHover: setColor('positive50', 'positive700'),
    tagPositiveFontDisabled: setColor('positive200', 'positive500'),

    tagWarningSolidBackground: setColor('warning400', 'warning500'),
    tagWarningSolidHover: setColor('warning50', 'warning500'),
    tagWarningSolidActive: setColor('warning100', 'warning400'),
    tagWarningSolidDisabled: setColor('warning50', 'warning700'),
    tagWarningSolidFont: setColor('warning50', 'warning100'),
    tagWarningSolidFontHover: setColor('warning500', 'warning100'),
    tagWarningLightBackground: setColor('warning50', 'warning700'),
    tagWarningLightHover: setColor('warning100', 'warning700'),
    tagWarningLightActive: setColor('warning100', 'warning600'),
    tagWarningLightDisabled: setColor('warning50', 'warning700'),
    tagWarningLightFont: setColor('warning500', 'warning100'),
    tagWarningLightFontHover: setColor('warning500', 'warning100'),
    tagWarningOutlinedBackground: setColor('warning400', 'warning500'),
    tagWarningOutlinedHover: setColor('warning500', 'warning400'),
    tagWarningOutlinedActive: setColor('warning600', 'warning300'),
    tagWarningOutlinedDisabled: setColor('warning50', 'warning700'),
    tagWarningOutlinedFont: setColor('warning500', 'warning200'),
    tagWarningOutlinedFontHover: setColor('warning50', 'warning700'),
    tagWarningFontDisabled: setColor('warning200', 'warning500'),

    tagNegativeSolidBackground: setColor('negative400', 'negative500'),
    tagNegativeSolidHover: setColor('negative50', 'negative500'),
    tagNegativeSolidActive: setColor('negative100', 'negative400'),
    tagNegativeSolidDisabled: setColor('negative50', 'negative700'),
    tagNegativeSolidFont: setColor('negative50', 'negative100'),
    tagNegativeSolidFontHover: setColor('negative500', 'negative100'),
    tagNegativeLightBackground: setColor('negative50', 'negative700'),
    tagNegativeLightHover: setColor('negative100', 'negative700'),
    tagNegativeLightActive: setColor('negative100', 'negative600'),
    tagNegativeLightDisabled: setColor('negative50', 'negative700'),
    tagNegativeLightFont: setColor('negative500', 'negative100'),
    tagNegativeLightFontHover: setColor('negative500', 'negative100'),
    tagNegativeOutlinedBackground: setColor('negative400', 'negative500'),
    tagNegativeOutlinedHover: setColor('negative500', 'negative400'),
    tagNegativeOutlinedActive: setColor('negative600', 'negative300'),
    tagNegativeOutlinedDisabled: setColor('negative50', 'negative700'),
    tagNegativeOutlinedFont: setColor('negative500', 'negative200'),
    tagNegativeOutlinedFontHover: setColor('negative50', 'negative700'),
    tagNegativeFontDisabled: setColor('negative200', 'negative500'),

    // Table
    tableHeadBackgroundColor: setColor('mono100', 'mono700'),
    tableBackground: setColor('mono100', 'mono800'),
    tableFilter: setColor('mono600', 'mono400'),
    tableFilterHeading: setColor('mono700', 'mono300'),
    tableFilterBackground: setColor('mono100', 'mono700'),
    tableFilterFooterBackground: setColor('mono200', 'mono800'),

    // Toast
    toastText: setColor('white'),
    toastPrimaryBackground: setColor('primary500'),
    toastPositiveBackground: setColor('positive500'),
    toastWarningBackground: setColor('warning500'),
    toastNegativeBackground: setColor('negative500'),

    // Spinner
    spinnerTrackFill: setColor('mono900', 'mono100'),

    // Progress bar
    progressbarTrackFill: setColor('mono900', 'mono100'),
  }
}

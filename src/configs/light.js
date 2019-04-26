// @flow
import {type ThemeConfigT} from '../types'

const theme: ThemeConfigT = {
  type: 'light',
  palette: {
    primary: {
      '50': '#EDF3FE',
      '100': '#D2E0FC',
      '200': '#9CBCF8',
      '300': '#548BF4',
      '400': '#276EF1',
      '500': '#174EB6',
      '600': '#123D90',
      '700': '#0C2960',
    },
    negative: {
      '50': '#FDF0EF',
      '100': '#FADBD7',
      '200': '#F4AFA7',
      '300': '#EB7567',
      '400': '#E54937',
      '500': '#AE372A',
      '600': '#892C21',
      '700': '#5C1D16',
    },
    warning: {
      '50': '#FEF3EC',
      '100': '#FBE2CF',
      '200': '#F6BA8B',
      '300': '#F19248',
      '400': '#ED6F0E',
      '500': '#B4540B',
      '600': '#8E4308',
      '700': '#5F2C06',
    },
    positive: {
      '50': '#EBF8F2',
      '100': '#CDEDDE',
      '200': '#88D3B0',
      '300': '#43B982',
      '400': '#07A35A',
      '500': '#057C44',
      '600': '#046236',
      '700': '#034124',
    },
    mono: {
      '100': '#FFFFFF',
      '200': '#F7F7F7',
      '300': '#F0F0F0',
      '400': '#E5E5E5',
      '500': '#CCCCCC',
      '600': '#B3B3B3',
      '700': '#999999',
      '800': '#666666',
      '900': '#333333',
      '1000': '#000000',
    },
    rating: {
      '200': '#FFE1A5',
      '400': '#FFC043',
    },
  },
  typography: {
    primaryFontFamily:
      'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
}

export default theme

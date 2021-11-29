import {I18nManager} from 'react-native';

export const family = {
  // English Fonts
  Poppins_ThinItalic: 'Poppins-ThinItalic',
  Poppins_Thin: 'Poppins-Thin',
  Poppins_SemiBoldItalic: 'Poppins-SemiBoldItalic',
  Poppins_SemiBold: I18nManager.isRTL ? 'Cairo-SemiBold' : 'Poppins-SemiBold',
  Poppins_Regular: I18nManager.isRTL ? 'Cairo-Regular' : 'Poppins-Regular',
  Poppins_MediumItalic: 'Poppins-MediumItalic',
  Poppins_Medium: I18nManager.isRTL ? 'Cairo-SemiBold' : 'Poppins-Medium',
  Poppins_LightItalic: 'Poppins-LightItalic',
  Poppins_Light: I18nManager.isRTL ? 'Cairo-Light' : 'Poppins-Light',
  Poppins_Italic: 'Poppins-Italic',
  Poppins_ExtraLightItalic: 'Poppins-ExtraLightItalic',
  Poppins_ExtraLight: I18nManager.isRTL
    ? 'Cairo-ExtraLight'
    : 'Poppins-ExtraLight',
  Poppins_ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  Poppins_ExtraBold: 'Poppins-ExtraBold',
  Poppins_BoldItalic: 'Poppins-BoldItalic',
  Poppins_Bold: I18nManager.isRTL ? 'Cairo-Bold' : 'Poppins-Bold',
  Poppins_BlackItalic: 'Poppins-BlackItalic',
  Poppins_Black: I18nManager.isRTL ? 'Cairo-Black' : 'Poppins-Black',
};

import NetInfo from '@react-native-community/netinfo';

export const languageSelector = (lang, defaultLang) => {
  if (lang === 'English') {
    return 'en';
  } else if (lang === 'Arabic') {
    return 'ar';
  } else {
    if (defaultLang === 'English') {
      return 'en';
    } else if (defaultLang === 'Arabic') {
      return 'ar';
    } else {
      return 'en';
    }
  }
};

export const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};

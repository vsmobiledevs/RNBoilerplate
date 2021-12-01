import React, {createContext, useContext} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useState, useEffect} from 'react';
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

const OnlineStatusContext = createContext(true);
export const OnlineStatusProvider = ({children}) => {
  const [isOffline, setOfflineStatus] = useState(false);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);
  return (
    <OnlineStatusContext.Provider value={isOffline}>
      {children}
    </OnlineStatusContext.Provider>
  );
};
export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};

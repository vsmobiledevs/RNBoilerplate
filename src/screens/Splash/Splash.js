import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MyStatusBar from 'components/Header/statusBar';
import {appImages, colors, appStrings} from 'utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 1500);
  }, []);

  return (
    <View style={styles.mainContainer} source={appImages.item}>
      <MyStatusBar backgroundColor={colors.bg2} barStyle={'dark-content'} />
      <Text style={styles.txtStyle}>{appStrings.splash_title}</Text>
    </View>
  );
};

export default Splash;

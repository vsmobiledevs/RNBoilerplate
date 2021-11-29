/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, family, HP, size, WP} from '../../utils';

export const AppFooter = ({onPress, title, fontSize}) => {
  return (
    <View  style={styles.container}>

    <TouchableOpacity
     
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={[styles.title, {fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    padding: WP('5'),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_Medium,
    color: colors.g12,
    textDecorationLine: 'underline',
  },
});

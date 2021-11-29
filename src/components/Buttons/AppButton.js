/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {colors, family, HP, size, WP} from '../../utils';
import {Loader} from '../Loaders/Loader';

export const AppButton = ({onPress, txt, title, loading}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.buttonStyle]}
      onPress={onPress}>
      {!loading ? (
        <Text style={[styles.buttonText]}>
          {txt}
          {title}
        </Text>
      ) : (
        <Loader loader_color={colors.white} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.b1,
    width: '100%',
    height: WP('13'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontFamily: family.Poppins_Bold,
    color: 'white',
  },
});

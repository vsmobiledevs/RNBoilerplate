import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, family, size} from '../../utils';
import I18n from '../../translations';

export const ProfilePhoneField = ({phone}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{I18n.t('login_mobile_number')}</Text>
      </View>
      <View style={style.inputContainerText}>
        <Text style={style.inputtextStyle}>
          {phone}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    paddingTop: 10,
  },
container: {
    paddingVertical: 5,
  },
  title: {
    fontSize: size.xxsmall,
    color: colors.b2,
    fontFamily: family.Poppins_SemiBold,
    textAlign:'left'
  },

  inputContainerText: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.g6,
    paddingVertical:5
  },
  inputtextStyle: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_SemiBold,
    color: colors.g8,
  },
});

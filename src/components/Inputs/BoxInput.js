import React from 'react';
import { Platform } from 'react-native';
import { I18nManager } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { family, colors, WP, size } from '../../utils';

export const BoxInput = ({
  title,
  placeholder,
  placeholderTextColor,
  keyboardType,
  onChangeText,
  touched,
  error,
  value,
  onBlur,
  blurOnSubmit,
  disableFullscreenUI,
  autoCapitalize,
  onSubmitEditing,
  maxLength,
  returnKeyType,
  multiline,
  editable,
}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.inputContainer]}>
        <TextInput
          multiline={multiline}
          editable={editable}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[styles.inputStyle]}
          onChangeText={onChangeText}
          value={value}
          textAlignVertical={'top'}
          onBlur={onBlur}
          blurOnSubmit={blurOnSubmit}
          disableFullscreenUI={disableFullscreenUI}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          numberOfLines={8}
        />
      </View>
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    // paddingVertical: 5,
  },
  titleContainer: {
    // paddingVertical: 10,
  },
  inputStyle: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_Regular,
    height: WP('40'),
    color: colors.b1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  inputContainer: {
    borderBottomWidth: 1,
    height: WP('40'),
  },
  title: {
    fontSize: size.small,
    fontFamily: family.Poppins_Medium,
    textAlign: 'left',
  },
  errorStyle: {
    color: 'red',
    padding: 5,
    textAlign: 'left',
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Medium,

  },
});

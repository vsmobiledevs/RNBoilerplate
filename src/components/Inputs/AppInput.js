import React from 'react';
import { Platform } from 'react-native';
import { I18nManager } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { family, colors, WP, size } from '../../utils';

export const AppInput = ({
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
  editable,
  country,
  inputWidth,
  inputColor,
  onEndEditing,
  autoFocus,
  ref
}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.inputContainer]}>
        {country && (
          <View style={styles.aiCenter}>
            <Text style={[styles.inputStyle1, { color: inputColor }]}>
              {placeholder}
            </Text>
          </View>
        )}
        <TextInput
        ref={ref}
        autoFocus={autoFocus}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          style={[
            styles.inputStyle,
            {
              width: inputWidth != '80%' ? '100%' : '80%',
              textAlign: I18nManager.isRTL
                ? country
                  ? 'left'
                  : 'right'
                : 'left',
              paddingHorizontal:
                Platform.OS == 'android' && inputWidth == '80%' ? -10 : 0,
              color: inputColor,
            },
          ]}
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
          blurOnSubmit={blurOnSubmit}
          disableFullscreenUI={disableFullscreenUI}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          onEndEditing={onEndEditing}
          
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
    paddingVertical: 5,
  },
  titleContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: size.small,
    color: colors.b2,
    fontFamily: family.Poppins_SemiBold,
    textAlign: 'left',
  },
  inputContainer: {
    borderRadius: WP('2'),
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.g6,
    width: '100%',
    height: 44,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  inputStyle: {
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
    paddingVertical: 0,
  },
  inputStyle1: {
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
    paddingHorizontal: 0,
  },
  errorStyle: {
    fontSize: size.xsmall,
    color: colors.red,
    padding: 5,
    textAlign: 'left',
    fontFamily: family.Poppins_SemiBold,
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

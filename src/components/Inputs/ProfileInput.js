import React from 'react';
import { I18nManager, Platform } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { family, colors, WP, size } from '../../utils';

export const ProfileInput = ({
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
  multiline,
}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        multiline={multiline}
        editable={editable}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        style={[
          styles.inputStyle,
          {
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
      />
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
    paddingTop: 10,
  },
  title: {
    fontSize: size.xxsmall,
    color: colors.b2,
    fontFamily: family.Poppins_SemiBold,
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',

  },
  inputStyle: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_SemiBold,
    width: '100%',
    paddingVertical: Platform.select({ android: 0, ios: 5 }),
    borderBottomWidth: 1,
    borderColor: colors.g6,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  errorStyle: {
    fontSize: size.tiny,
    color: colors.red,
    fontFamily: family.Poppins_SemiBold,
    textAlign: 'left',
    padding:5
   

  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import {appIcons} from 'assets';
import {WP, colors, size, family} from 'utils';
import MyStatusBar from './statusBar';

export const Header = ({
  title,
  backButton,
  navigation,
  h2,
  h3,
  fonstSize,
  fontFamily,
  disabled,
  rightBtn,
  onPressH2,
  rightIcon,
  rightBtnWidth,
  rightBtnBg,
  h3fonstSize,
  h3fontFamily,
  rightBtnHeight = 44,
  rowReverse,
}) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.bg2} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View
          style={[
            styles.wrapper,
            {flexDirection: rowReverse ? 'row-reverse' : 'row'},
          ]}>
          <View style={styles.contentContainer}>
            {backButton ? (
              <TouchableOpacity
                style={styles.headerContainer}
                onPress={() => {
                  navigation.goBack();
                }}>
                {I18nManager.isRTL ? (
                  <Image
                    source={appIcons.forwardArrow}
                    style={styles.imageStyle}
                  />
                ) : (
                  <Image
                    source={appIcons.backArrow}
                    style={styles.imageStyle}
                  />
                )}
              </TouchableOpacity>
            ) : (
              false
            )}
            <TouchableOpacity
              disabled={disabled}
              style={styles.headerContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={[
                  styles.header,
                  {fontSize: fonstSize, fontFamily: fontFamily},
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{right: !rightBtn ? 20 : -15}}>
            <Text style={[styles.heading2]}>{h2}</Text>
          </View>
          {rightBtn ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPressH2}
              style={[
                styles.btnContainer,
                {
                  backgroundColor: rightBtnBg,
                  width: rightBtnWidth,
                  height: rightBtnHeight,
                },
              ]}>
              {rightIcon ? (
                <Image source={rightIcon} style={styles.rightIconStyle} />
              ) : (
                <Text
                  style={[
                    styles.btnText,
                    {
                      fontSize: h3fonstSize,
                      fontFamily: h3fontFamily,
                      // transform: [
                      //   {
                      //     rotateY: I18nManager.isRTL
                      //       ? h3 == '?'
                      //         ? '180deg'
                      //         : '0deg'
                      //       : '0deg',
                      //   },
                      // ],
                    },
                  ]}>
                  {h3}
                </Text>
              )}
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('15'),
    backgroundColor: colors.bg2,
    paddingHorizontal: WP('5'),
    paddingVertical: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    paddingRight: 10,
  },
  header: {},
  imageStyle: {
    height: 19,
    width: 12,
    resizeMode: 'contain',
  },
  heading2: {
    // fontSize: size.h6,
    color: colors.b1,
    fontFamily: family.Poppins_Bold,
  },
  btnContainer: {
    borderRadius: WP('2.5'),
    height: 45,
    width: WP('20'),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: family.Poppins_Bold,
    color: colors.white,
  },
  rightIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

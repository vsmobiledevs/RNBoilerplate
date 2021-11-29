import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { appIcons } from '../../assets';
import { appStrings, colors, WP } from '../../utils';
import I18n from '../../translations';

export const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
  isVideo,
}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image source={appIcons.themeCamera} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>
                {I18n.t('edit_profile_pick_camera')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image source={appIcons.gallery} style={styles.imageStyle} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.btnText}>{I18n.t('pck_from_gallery')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 30,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.input_light_gray,
    width: '100%',
  },

  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: WP('4'),
    fontWeight: '700',
    color: colors.input_Black,
    paddingVertical: WP('5'),
    textAlign: 'left'
  },
  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',

    paddingVertical: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

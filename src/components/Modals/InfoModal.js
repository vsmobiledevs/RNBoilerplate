import React, {useState} from 'react';
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
import {appStrings, colors, family, size, WP} from '../../utils';

export const InfoModal = ({
  show,
  onPressHide,
  onPressYes,
  onPressNo,
  title,
  btntextYes,
  btntextNo,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        onBackdropPress={onPressHide}
        isVisible={show}
        avoidKeyboard={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.textStyle}>{title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPressYes} style={styles.btnContainer}>
              <Text style={styles.btnText}>{btntextYes}</Text>
            </TouchableOpacity>
            {btntextNo && (
              <TouchableOpacity onPress={onPressNo} style={styles.btnContainer}>
                <Text style={styles.btnText}>{btntextNo}</Text>
              </TouchableOpacity>
            )}
          </View>
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
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('30'),
    paddingHorizontal: WP('5'),
    borderRadius: 12,
  },
  textStyle: {
    fontFamily: family.Poppins_Bold,
    fontSize: size.normal,
    color: colors.b1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.trasn_g13,
    height: 33,
    width: 95,
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: colors.b1,
    fontFamily: family.Poppins_Medium,
    fontSize: size.normal,
  },
});

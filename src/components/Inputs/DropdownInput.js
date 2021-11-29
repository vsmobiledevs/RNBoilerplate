import React from 'react';
import { StyleSheet, Text, View, I18nManager } from 'react-native';
import { family, colors, size } from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker';

export const DropdownInput = ({
  placeholder,
  value,
  setValue,
  setItems,
  items,
  setOpen,
  open,
  direction,
  bgColor = colors.bg2,
  txtColor = colors.b2,
  errorField,
}) => {
  return (
    <>
      <DropDownPicker
        style={[styles.dropdownStyle, { backgroundColor: bgColor }]}
        labelStyle={[styles.labelStyle, { color: txtColor }]}
        placeholder={placeholder}
        placeholderStyle={[styles.placholderStyle, { color: txtColor }]}
        listItemContainerStyle={[styles.itemContainer]}
        open={open}
        arrowIconStyle={{ tintColor: txtColor }}
        listMode="SCROLLVIEW"
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          nestedScrollEnabled: true,
        }}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        dropDownDirection={direction}
        setItems={setItems}
        dropDownContainerStyle={[styles.itemStyle, { backgroundColor: bgColor }]}
        textStyle={[styles.itemTextStyle, { color: txtColor }]}
      />
      {errorField != '' && <Text style={styles.errorStyle}>{errorField} </Text>}
    </>
  );
};

const styles = StyleSheet.create({
  //DropDown Styles
  dropdownContainer: {
    // paddingVertical: 10,
  },
  dropdownStyle: {
    borderWidth: 0,
    height: 30,
    paddingHorizontal: 0,
  },
  labelStyle: {
    textAlign: 'left',
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
  },
  placholderStyle: {
    textAlign: 'left',
    fontSize: size.small,
    fontFamily: family.Poppins_SemiBold,
  },
  itemStyle: {
    borderWidth: 0,
    backgroundColor: 'blue',
  },
  itemContainer: {
    paddingHorizontal: 0,
  },
  errorStyle: {
    color: 'red',
    padding: 2,
    textAlign: 'left',
    fontSize: size.tiny,
    fontFamily: family.Poppins_SemiBold,
  },
  itemTextStyle: {
    textAlign: 'left',
  },
});

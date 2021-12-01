import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {colors} from 'utils';

export const Loader = ({loader_color}) => {
  return (
    <View style={styles.container}>
      <SkypeIndicator
        size={25}
        color={loader_color != '' ? loader_color : colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

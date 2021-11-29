import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { family, colors ,WP, size} from "../../utils";
export const H2 = ({ title,fontFamily }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.h1,{fontFamily:fontFamily}]}>{title}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
      paddingVertical:5,
    },
  h1: {
    fontSize: size.h5,
    color: colors.b1,
textAlign:'left'
  },
});

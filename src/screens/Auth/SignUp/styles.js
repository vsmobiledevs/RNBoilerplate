import {I18nManager} from 'react-native';
import {Dimensions, StyleSheet, Platform} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bg2,
  },
  contentContainer: {
    paddingHorizontal: WP('5'),
  },
  h1Container: {
    paddingTop: 20,
  },
  h2: {
    paddingVertical: 10,
    color: colors.b1,
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    textAlign: 'left',
  },
  inputContainer1: {
    width: '48%',
  },
  rowAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    left: -8,
  },
  icon15: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: size.tiny,
    color: colors.b2,
    fontFamily: family.Poppins_Medium,
    },
  textStyle1: {
    fontSize: size.tiny,
    color: colors.b2,
    fontFamily: family.Poppins_SemiBold,
    textDecorationLine: 'underline',
   
  },
});

export default styles;

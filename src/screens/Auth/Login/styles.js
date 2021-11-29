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
    color: colors.b2,
    fontFamily: family.Poppins_Medium,
    fontSize: size.tiny,
    textAlign: 'left',
  },
  inputContainer: {
    paddingTop: 30,
  },
  btnContainer: {
    paddingTop: 50,
    paddingHorizontal: 5,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {colors, textSize} from 'utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg1,
  },
  txtStyle: {
    color: colors.b1,
    textAlign: 'center',
    fontSize: textSize.txt50,
  },
});

export default styles;

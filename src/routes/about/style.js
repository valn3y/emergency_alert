import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const aboutStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.blueTheme.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',
    fontSize: 25,
    color: colors.blueTheme.white,
    marginTop: 20,
  },
  textDescription: {
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
    fontSize: 15,
    color: colors.blueTheme.secondColor,
    marginTop: 10,
  },
  textMade: {
    position: 'absolute',
    bottom: 10,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
    fontSize: 15,
    color: colors.blueTheme.white,
  },
});

export default aboutStyle;

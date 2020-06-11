import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const homeStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonGet: {
    position: 'absolute',
    bottom: 90,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueTheme.white,
  },
  buttonSignup: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  textButton: {
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',
    color: colors.blueTheme.white,
    fontSize: 15,
  },
});

export default homeStyle;

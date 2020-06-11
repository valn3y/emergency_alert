import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const signupStyle = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 20,
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',
    color: colors.blueTheme.secondColor,
    fontSize: 25,
    marginBottom: 90,
  },
  campTitle: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  infoTitle: {
    fontFamily: 'Raleway-Bold',
    color: colors.blueTheme.secondColor,
    fontSize: 17.5,
  },
  inputTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  contentInputTitle: {
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: colors.blueTheme.white,
    borderRadius: 7,
    backgroundColor: colors.blueTheme.light,
    fontFamily: 'Rubik-Medium',
    fontSize: 25,
  },
  inputActivity: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  contentInputActivity: {
    width: '80%',
    height: '100%',
    borderRadius: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.blueTheme.light,
    fontFamily: 'Rubik-Regular',
    fontSize: 25,
    color: colors.blueTheme.white,
    textAlignVertical: 'top',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueTheme.secondColor,
  },
  textButton: {
    fontFamily: 'Raleway-Bold',
    color: colors.blueTheme.white,
    fontSize: 20,
    letterSpacing: 3.5,
  },
});

export default signupStyle;

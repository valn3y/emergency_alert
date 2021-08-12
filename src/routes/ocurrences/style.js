import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const ocurrenceStyle = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    color: colors.secondColorTheme,
    marginBottom: 30,
    marginTop: 50,
  },
  flatListStyle: {
    width: '100%',
  },
  contentFlatList: {
    width: '90%',
    paddingHorizontal: 20,
  },
  itemFlatlist: {
    width: '100%',
    backgroundColor: '#EEE',
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
  },
  buttonItem: {
    flex: 7,
    flexWrap: 'wrap',
  },
  headerTitleItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 18,
  },
  titleItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
  },
  headerDescriptionItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 15,
  },
  descriptionItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
    textAlign: 'justify',
  },
  headerLatitudeItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 15,
  },
  latitudeItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
  },
  headerLongitudeItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 15,
  },
  longitudeItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
  },
  headerDateItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 15,
  },
  dateItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
  },
  headerHourItem: {
    fontFamily: 'Raleway-Bold',
    color: colors.secondColorTheme,
    fontSize: 15,
  },
  hourItem: {
    fontFamily: 'Raleway-Regular',
    color: colors.orangeLight,
  },
  buttonTrash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ocurrenceStyle;

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Info from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import List from 'react-native-vector-icons/FontAwesome';
import Map from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet} from 'react-native';
import colors from './colors';

import Welcome from '../routes/welcome';
import Signup from '../routes/signup';
import Home from '../routes/home';
import Ocurrences from '../routes/ocurrences';
import MapOcurrences from '../routes/mapOcurrences';
import Maps from '../routes/maps';
import About from '../routes/about';

const drawerStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.blueTheme.mainColor,
  },
  iconDrawer: {
    width: 40,
  },
});

const CustomDrawerNavigator = props => (
  <View style={drawerStyle.main}>
    <DrawerItems
      activeBackgroundColor={colors.blueTheme.light}
      activeTintColor={colors.blueTheme.white}
      iconContainerStyle={drawerStyle.iconDrawer}
      {...props}
    />
  </View>
);

const mainDrawer = createAppContainer(
  createDrawerNavigator(
    {
      home: {
        screen: Home,
        navigationOptions: {
          drawerLabel: 'Principal',
          drawerIcon: ({tintColor}) => (
            <AntDesign name={'home'} color={tintColor} size={30} />
          ),
        },
      },
      ocurrences: {
        screen: Ocurrences,
        navigationOptions: {
          drawerLabel: 'Ocorrências',
          drawerIcon: ({tintColor}) => (
            <List name={'list-alt'} color={tintColor} size={30} />
          ),
        },
      },
      maps: {
        screen: Maps,
        navigationOptions: {
          drawerLabel: 'Mapa de Ocorrências',
          drawerIcon: ({tintColor}) => (
            <Map name={'google-maps'} color={tintColor} size={30} />
          ),
        },
      },
      about: {
        screen: About,
        navigationOptions: {
          drawerLabel: 'Sobre',
          drawerIcon: ({tintColor}) => (
            <Info name={'info-circle'} color={tintColor} size={30} />
          ),
        },
      },
    },
    {
      initialRouteName: 'home',
      drawerPosition: 'left',
      drawerType: 'front',
      contentComponent: CustomDrawerNavigator,
    },
  ),
);

const mainRoutes = createStackNavigator(
  {
    welcome: {
      name: 'welcome',
      screen: Welcome,
      navigationOptions: {headerShown: false},
    },
    drawer: {
      name: 'drawer',
      screen: mainDrawer,
      navigationOptions: {headerShown: false},
    },
    signup: {
      name: 'signup',
      screen: Signup,
      navigationOptions: {headerShown: false},
    },
    mapOcurrences: {
      name: 'mapOcurrences',
      screen: MapOcurrences,
      navigationOptions: {headerShown: false},
    },
  },
  {initialRouteName: 'welcome'},
);

const mainNavigator = createAppContainer(mainRoutes);
export default mainNavigator;

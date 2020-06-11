import React from 'react'
import { AppRegistry, StatusBar } from 'react-native'
import Routes from './src/config/routes'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import colors from './src/config/colors'
import Store from './src/redux'

const RNRedux = () => (
  <Provider store={Store}>
    <StatusBar backgroundColor={colors.blueTheme.mainColor}/>
    <Routes />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

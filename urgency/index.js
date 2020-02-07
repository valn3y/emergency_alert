import React from 'react'
import { AppRegistry } from 'react-native'
import Routes from './src/config/routes'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import Store from './src/redux'

const RNRedux = () => (
    <Provider store={Store}>
        <Routes />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

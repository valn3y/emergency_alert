import React from 'react'
import Icon from 'react-native-vector-icons'
import { View } from 'react-native'
import headerStyle from './style'
import colors from '../../config/colors'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={headerStyle.main}>
                <Icon
                    name={'menu'}
                    color={colors.secondColorTheme}
                    size={30}
                    onPress={() => this.props.navigation.openDrawer()} />
            </View>
        )
    }
}

export default Header
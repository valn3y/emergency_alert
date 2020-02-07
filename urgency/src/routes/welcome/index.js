import React from 'react'
import { View, Alert, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import welcomeStyle from './style'
import colors from '../../config/colors'
import { requestPermission } from '../../config/permission'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        setTimeout(() => { this.preRequisites() }, 3000)
    }

    preRequisites = async () => {
        let permission = await requestPermission()
        if (permission)
            this.props.navigation.replace('drawer')
        else {
            Alert.alert(
                'Atenção!',
                'É necessário que permita o acesso a localização, abra o aplicativo novamente e conceda a permissão.',
                [{ text: 'OK!', onPress: () => BackHandler.exitApp() }]
            )
        }
    }

    render() {
        return (
            <View style={welcomeStyle.main}>
                <Icon name={'Safety'} size={100} color={colors.white} />
            </View>
        )
    }
}
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import aboutStyle from './style'
import Icon from 'react-native-vector-icons/Entypo'
import colors from '../../config/colors'

export default class About extends React.Component {
    render() {
        return (
            <View style={aboutStyle.main} >
                <Text style={aboutStyle.text}>{'Desafio Defesa Civil'}</Text>
                <Text style={[aboutStyle.text, { fontSize: 20 }]}>{'Contato: (92) 3872-0950'}</Text>

                <View style={{ position: 'absolute', top: 5, left: 5 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon
                            name={'menu'}
                            color={colors.secondColorTheme}
                            size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
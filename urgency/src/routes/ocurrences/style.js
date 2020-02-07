import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const ocurrenceStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        color: colors.secondColorTheme,
        marginBottom: 30,
        marginTop: 50
    }
})

export default ocurrenceStyle
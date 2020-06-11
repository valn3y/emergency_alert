import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const aboutStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        fontSize: 30,
        color: colors.secondColorTheme,
        marginBottom: 10,
        marginTop: 10
    }
})

export default aboutStyle
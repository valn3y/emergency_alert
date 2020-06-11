import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const homeStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    buttons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    buttonGet: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        marginBottom: 3
    },
    buttonSignup: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },
    textButton: {
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        color: colors.white,
        fontSize: 15
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
})

export default homeStyle
import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const signupStyle = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        color: colors.secondColorTheme,
        fontSize: 18,
        marginBottom: 90
    },
    campTitle: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 6
    },
    infoTitle: {
        fontFamily: 'Raleway-Bold',
        color: colors.secondColorTheme,
        fontSize: 17.5
    },
    inputTitle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },
    contentInputTitle: {
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: colors.mainColorTheme,
        borderRadius: 7,
        backgroundColor: colors.orangeLight,
        fontFamily: 'Raleway-Regular',
        fontSize: 15
    },
    inputActivity: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    contentInputActivity: {
        width: '80%',
        height: '100%',
        borderRadius: 7,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.orangeLight,
        fontFamily: 'Raleway-Regular',
        fontSize: 15,
        color: colors.mainColorTheme,
        textAlignVertical: 'top'
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondColorTheme
    },
    textButton: {
        fontFamily: 'Raleway-Bold',
        color: colors.white,
        fontSize: 15,
        letterSpacing: 3.5
    }
})

export default signupStyle
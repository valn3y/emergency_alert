import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const welcomeStyle = StyleSheet.create({
    main: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mainColorTheme
    }
})

export default welcomeStyle
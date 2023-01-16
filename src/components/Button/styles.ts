import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../constants/globalStyles';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.brandPrimary,
        borderRadius: 12,
        padding: 10
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.VoloSans.bold
    }
})

export default styles;
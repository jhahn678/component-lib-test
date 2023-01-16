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
        color: colors.white,
        fontWeight: '700',
        fontSize: 14,
        fontFamily: fonts.VoloSans.bold
    }
})

export default styles;
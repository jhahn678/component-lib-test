import { StyleSheet } from 'react-native';
import { colors } from '../../constants/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 24,
        paddingVertical: 48,
        borderRadius: 16,
        backgroundColor: colors.brandSecondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.brandPrimary,
    },
})

export default styles;
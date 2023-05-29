import { StyleSheet } from 'react-native';
import { background, black, borderColor, white } from '../../assets/colors';
import { regularText } from '../../assets/fonts';

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        backgroundColor: background,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: background,
        width: '100%',
        height: '100%',
        padding: 10,
    },
    listHeader: {
        marginBottom: 12
    },
    itemSeperator: {
        marginBottom: 16
    },
    footerContainer: {
        marginTop: 16,
        width: '100%',
    },
    emailInput: {
        width: '100%',
        height: 50,
        backgroundColor: white,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontFamily: regularText,
        fontSize: 14,
        lineHeight: 17,
        color: black,
        borderWidth: 1,
        borderColor: borderColor
    }
});

export default styles;
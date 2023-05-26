import { StyleSheet } from 'react-native';
import { regularText, boldText } from '../../assets/fonts';
import { black, borderColor } from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 18,
    },
    title: {
        fontFamily: boldText,
        fontSize: 16,
        lineHeight: 19,
        color: black,
        marginBottom: 8,
    },
    optionText: {
        fontFamily: regularText,
        fontSize: 13,
        lineHeight: 15,
        color: black
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: borderColor,
        height: 40
    }
});

export default styles;
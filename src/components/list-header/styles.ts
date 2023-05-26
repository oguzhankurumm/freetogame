import { StyleSheet } from 'react-native';
import { boldText, regularText } from '../../assets/fonts';
import { black, dark } from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: boldText,
        fontSize: 18,
        lineHeight: 21,
        color: black
    },
    subtitle: {
        fontFamily: regularText,
        fontSize: 12,
        lineHeight: 15,
        color: dark,
        marginTop: 4
    }
});

export default styles;
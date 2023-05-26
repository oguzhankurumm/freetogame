import { StyleSheet } from 'react-native';
import { primary, white } from '../../assets/colors';
import { regularText } from '../../assets/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: primary,
        padding: 10,
        borderRadius: 8
    },
    title: {
        color: white,
        fontFamily: regularText,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center'
    }
});

export default styles;
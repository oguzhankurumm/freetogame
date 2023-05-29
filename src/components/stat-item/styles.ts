import { StyleSheet } from 'react-native';
import { boldText, regularText } from '../../assets/fonts';
import { black, dark } from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: '100%',
    },
    title: {
        fontFamily: boldText,
        fontSize: 15,
        lineHeight: 18,
        color: black
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        width: '100%'
    },
    statItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: '30%'
    },
    statItemTitle: {
        fontFamily: boldText,
        fontSize: 15,
        lineHeight: 18,
        color: black,
        marginTop: 4
    },
    statItemDescription: {
        fontFamily: regularText,
        fontSize: 12,
        lineHeight: 15,
        color: dark,
        marginTop: 4
    },

});

export default styles;
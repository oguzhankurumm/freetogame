import { StyleSheet } from 'react-native';
import { boldText, regularText } from '../../assets/fonts';
import { black, dark, gray } from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    thumbnail: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 12
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    infoBottomContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    title: {
        fontFamily: boldText,
        fontSize: 15,
        lineHeight: 18,
        color: black
    },
    description: {
        fontFamily: regularText,
        fontSize: 12,
        lineHeight: 15,
        color: dark,
        marginTop: 4
    },
    genre: {
        fontFamily: regularText,
        fontSize: 12,
        lineHeight: 15,
        color: gray
    },
    tagContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    tag: {
        fontFamily: regularText,
        fontSize: 10,
        lineHeight: 13,
        color: gray,
        textAlign: 'center'
    }
});

export default styles;
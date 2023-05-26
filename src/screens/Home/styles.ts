import { StyleSheet } from 'react-native';
import { background } from '../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        width: '100%',
        height: '100%',
    },
    listHeader: {
        marginBottom: 12
    },
    itemSeperator: {
        marginBottom: 16
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 50
    }
});

export default styles;
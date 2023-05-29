import { Dimensions, StyleSheet } from "react-native";
import { white } from '../../assets/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animationContainer: {
        width: 100,
        height: 100,
        borderRadius: 24,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: 90,
        height: 90
    }
});

export default styles;
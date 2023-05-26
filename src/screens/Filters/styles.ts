import { StyleSheet } from "react-native";
import { background } from "../../assets/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        backgroundColor: background,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
});

export default styles;
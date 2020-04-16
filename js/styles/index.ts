import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    matchParent: {
        width: '100%',
        height: '100%',
        backgroundColor: "white"
    },
    contentContainer: {
        marginTop: 16,
        paddingHorizontal: 16,
        flex: 1
    },
    button: {
        marginHorizontal: 16,
        backgroundColor: colors.primary
    },
    disabledButton: {
        backgroundColor: colors.disabled
    }
});

export default styles;
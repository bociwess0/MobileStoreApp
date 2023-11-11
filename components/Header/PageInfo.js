import { Text, StyleSheet } from "react-native";

function PageInfo() {
    return(
        <Text style={styles.textWrapper}>Products</Text>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#fff"
    },
});

export default PageInfo;
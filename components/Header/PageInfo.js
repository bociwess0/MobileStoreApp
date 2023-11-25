import { useRoute } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";

function PageInfo() {

    const route = useRoute();

    return(
        <Text style={styles.textWrapper}>{route.name}</Text>
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
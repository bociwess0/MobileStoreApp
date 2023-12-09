import { Image, StyleSheet, Text, View } from "react-native";

function StoreItem(props) {
    return(
        <View style={styles.storeItemWrapper}>
            <Image style={styles.image} source={props.store.image} />
            <Text style={{fontSize: 16, color: "#fff"}}>{props.store.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storeItemWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 50,
        marginTop: 20,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    image: {
        width: 180,
        height: 100,
        resizeMode: 'stretch'
    }
})

export default StoreItem;
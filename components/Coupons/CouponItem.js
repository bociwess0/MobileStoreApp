import { StyleSheet, Text, TextInput, View } from "react-native";

function CouponItem(props) {

    return(
        <View style={styles.cartTotalWrapper}>
            <Text style={{fontSize: 20, color: "#fff"}}>Insert Coupon: </Text>
            <TextInput style={styles.inputContainer}  placeholderTextColor="#fff" onChangeText={(text) => props.setCoupon(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    cartTotalWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 20,
        borderTopColor: "#fff",
        borderTopWidth: 1,
        paddingTop: 15
    },
    inputContainer: {
        borderColor: "#fff",
        borderWidth: 1,
        width: 100,
        color: "#fff"
    }
})

export default CouponItem;
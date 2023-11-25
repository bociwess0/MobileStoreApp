import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function CartTotal() {

    let cartTotal = useSelector(state => state.cartActions.cartTotal);

    return(
        <View style={styles.cartTotalWrapper}>
            <Text style={{fontSize: 20, color: "#fff"}}>Total: </Text>
            <Text style={{fontSize: 20, color: "#fff"}}>{`${cartTotal}$`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartTotalWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 20
    }
})

export default CartTotal;
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

function CartFooterNumber() {

    let cartTotalQuantity = useSelector(state => state.cartActions.cartTotalQuantity);

    return(
        <View style={styles.cartTotalNumber}>
            <Text style={{fontSize: 10, color: "#fff"}} >{cartTotalQuantity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartTotalNumber: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B4236C",
        borderRadius: 30,
        width: 18,
        height: 18,
        position: "absolute",
        top: -5,
        right: -10
    }
})

export default CartFooterNumber
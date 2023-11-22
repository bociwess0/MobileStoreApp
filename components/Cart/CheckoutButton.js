import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

function CheckoutButton(props) {

    const {width} = useWindowDimensions();

    function handleCheckout() {
        console.log(props.productsInCart);
    }

    return(
        <View style={[{paddingHorizontal: 20}, {width: width}]}>
            <Pressable style={ styles.buttonWrapper} onPress={handleCheckout}>
                <Text style={{fontSize: 18, color: "#fff"}}>Submit order</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BA2AE4",
        borderRadius: 10,
        
    }
})

export default CheckoutButton;
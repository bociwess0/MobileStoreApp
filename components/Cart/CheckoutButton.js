import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CartModal from "./CartModal";
import { useState } from "react";

function CheckoutButton(props) {

    const {width} = useWindowDimensions();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return(
        <View style={[{paddingHorizontal: 20}, {width: width}]}>
            <Pressable style={ styles.buttonWrapper} onPress={handleModal}>
                <Text style={{fontSize: 18, color: "#fff"}}>Submit order</Text>
            </Pressable>
            <CartModal isModalVisible={isModalVisible} onCloseModal={handleModal} products={props.productsInCart} />
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
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CartModal from "./CartModal";
import { useState } from "react";
import PopupModal from "../Modals/Popup";

function CheckoutButton(props) {

    const {width} = useWindowDimensions();

    const [isModalVisible, setIsModalVisible] = useState(false);
    let modalMessage = "Are you sure you want to submit your order?";

    function handleConfirmPage() {
        props.onShowCartConfirm();
    }

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return(
        <View style={[{paddingHorizontal: 20}, {width: width}]}>
            <Pressable style={ styles.buttonWrapper} onPress={handleModal}>
                <Text style={{fontSize: 18, color: "#fff"}}>Submit order</Text>
            </Pressable>
            <PopupModal 
                isModalVisible={isModalVisible}
                onCloseModal={handleModal}
                products={props.productsInCart} 
                message={modalMessage} 
                modalAction={handleConfirmPage}
            />
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
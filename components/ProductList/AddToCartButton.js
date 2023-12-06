import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import PopupModal from "../Modals/Popup";
import { useState } from "react";

function AddToCartButton(props) {
    
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const message = 'Please choose color';

    function handleAddToCart() {
        if(typeof props.color !== "undefined" && props.color !== '') {
            if(typeof props.quantityNumber !== "undefined") {
                dispatch(addToCart({item: props.item, quantityNumber: props.quantityNumber}))
            } else dispatch(addToCart({item: props.item, quantityNumber: 1}))
        } else {
            handleModal();
        }

    }

    const handleModal = () => {
        setIsModalVisible(() => !isModalVisible)
    };

    

    return(
        <View>
            <Pressable style={({pressed}) => [styles.addToCartButton, {opacity: pressed ? 0.7 : 1}]} onPress={handleAddToCart}>
                <Text style={{fontSize: 14, color: "#fff"}}>Add To Cart</Text>
            </Pressable>
            <PopupModal 
                isModalVisible={isModalVisible}
                onCloseModal={handleModal}
                message={message}
                disableConfirm={true} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addToCartButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 30,
        backgroundColor: "#B4236C",
        width: 100
    },

});

export default AddToCartButton;
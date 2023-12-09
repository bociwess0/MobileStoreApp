import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import PopupModal from "../Modals/Popup";
import { useState } from "react";

function AddToCartButton(props) {
    
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const message = 'Please choose color';
    const width = props.productDetailPage ? 150 : 100;
    const height = props.productDetailPage ? 40 : 30;
    const fontSize = props.productDetailPage ? 18 : 14

    function handleAddToCart() {

        if(typeof props.color !== "undefined" && props.color !== '') {

            let newProduct = {
                ...props.item,
                selectedColor: props.color
            }

            if(typeof props.quantityNumber !== "undefined") {
                dispatch(addToCart({item: newProduct, quantityNumber: props.quantityNumber}))
            } else dispatch(addToCart({item: newProduct, quantityNumber: 1}))
        } else {
            handleModal();
        }

    }

    const handleModal = () => {
        setIsModalVisible(() => !isModalVisible)
    };

    

    return(
        <View>
            <Pressable style={({pressed}) => [styles.addToCartButton, {opacity: pressed ? 0.7 : 1, width: width, height: height}]} onPress={handleAddToCart}>
                <Text style={{fontSize: fontSize, color: "#fff"}}>Add To Cart</Text>
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
        backgroundColor: "#B4236C",
    },

});

export default AddToCartButton;
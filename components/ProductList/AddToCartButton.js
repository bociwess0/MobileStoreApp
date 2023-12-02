import { Pressable, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { fetchOneProduct } from "../HttpRequests/httpRequests";

function AddToCartButton(props) {
    
    const dispatch = useDispatch();

    function handleAddToCart() {
        if(typeof props.quantityNumber !== "undefined") {
            dispatch(addToCart({item: props.item, quantityNumber: props.quantityNumber}))
        } else dispatch(addToCart({item: props.item, quantityNumber: 1}))

    }

    return(
        <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={{fontSize: 14, color: "#fff"}}>Add To Cart</Text>
        </Pressable>
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
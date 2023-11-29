import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CartModal from "./CartModal";
import { useState } from "react";
import PopupModal from "../Modals/Popup";
import { coupons } from "../Coupons/Coupons";
import { useDispatch, useSelector } from "react-redux";
import { calculateCoupon } from "../../redux/cartSlice";

function CheckoutButton(props) {

    const {width} = useWindowDimensions();
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("Are you sure you want to submit your order?");
    const [disableConfirmButton, setDisableConfirmButton] = useState(false);
    
    const cartTotal = useSelector(state => state.cartActions.cartTotal);

    function handleConfirmPage() {
        console.log(props.enteredCoupon);
        if(props.enteredCoupon !== "") dispatch(calculateCoupon());
        props.onShowCartConfirm();
        props.setCoupon('');
    }

    const handleModal = () => {
        
        if(!isModalVisible) {
            const foundCoupon =  coupons.find((coupon) => coupon === props.enteredCoupon);

            if(props.enteredCoupon === "") {
                setModalMessage(`Are you sure you want to submit your order?`)
                setDisableConfirmButton(false);
            } else if(foundCoupon && props.enteredCoupon !== "") {
                setModalMessage(`Your new price is ${cartTotal * 0.8}$. Submit your order?`);
                setDisableConfirmButton(false);
            } else {
                setModalMessage("Coupon does not exists.")
                setDisableConfirmButton(true);
            }
        }

        setIsModalVisible(() => !isModalVisible)
    };

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
                disableConfirm={disableConfirmButton}
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
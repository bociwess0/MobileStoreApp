import { View, StyleSheet, FlatList, useWindowDimensions, Text } from "react-native";
import CartItem from "../components/Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CheckoutButton from "../components/Cart/CheckoutButton";
import CartConfirm from "../components/Cart/CartConfirm";
import { removeFromCart, toggleCartConfirm } from "../redux/cartSlice";
import PopupModal from "../components/Modals/Popup";
import CartTotal from "../components/Cart/CartTotal";


function Cart() {

    const {width, height} = useWindowDimensions();

    let updatedProducts = useSelector(state => state.cartActions.cartItems);
    let cartConfirmActive = useSelector(state => state.cartActions.cartConfirmActive)

    const [isModalVisible, setIsModalVisible] = useState(false);
    let modalMessage = "Are you sure you want to remove this product?";


    const [productsInCart, setProductsInCart] = useState([]);
    const [targetItem, setTargetItem] = useState({});

    const dispatch = useDispatch();

    function handleCartConfirm() {
        dispatch(toggleCartConfirm());
    }

    function handleModal(item) {
        setIsModalVisible(!isModalVisible);
        setTargetItem(item);
    }

    function removeFromCartHandler() {
        dispatch(removeFromCart({item: targetItem}));
    }

    useEffect(() => {
        setProductsInCart(updatedProducts);
    }, [updatedProducts])


    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20}} >
            {!cartConfirmActive && productsInCart.length > 0 && 
                <FlatList 
                    data={productsInCart}
                    renderItem={(product) => {
                            return(
                                <CartItem
                                    item = {product}
                                    showRemoveProductButton = {true}
                                    onRemoveProduct={handleModal}
                                />
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                    style={[styles.productsWrapper, {height: height - 250}]}
                />
            }
            {productsInCart.length === 0 &&
                <View style={{height: height - 140, padding: 20}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Cart is empty.</Text>
                </View> 
            }
            {!cartConfirmActive && productsInCart.length > 0 && <CartTotal />}
            
            {!cartConfirmActive && productsInCart.length > 0 && <CheckoutButton productsInCart={productsInCart} onShowCartConfirm={handleCartConfirm} /> }
            {cartConfirmActive && <CartConfirm productsInCart = {productsInCart}/>}
            <PopupModal 
                isModalVisible={isModalVisible}
                onCloseModal={handleModal}
                products={productsInCart} 
                message={modalMessage} 
                modalAction={removeFromCartHandler}
            />
      </View>

    )
}

const styles = StyleSheet.create({
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 10,
        paddingBottom: 40,
        marginBottom: 20,
        borderColor: "#D12E8F",
        borderBottomColor: 1,
        width: "100%",
    },
});

export default Cart;
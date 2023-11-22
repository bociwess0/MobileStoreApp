import { View, StyleSheet, FlatList, useWindowDimensions, Text } from "react-native";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CheckoutButton from "../components/Cart/CheckoutButton";


function Cart() {

    const {width, height} = useWindowDimensions();

    let updatedProducts = useSelector(state => state.cartActions.cartItems);
    const [productsInCart, setProductsInCart] = useState([]);

    useEffect(() => {
        setProductsInCart(updatedProducts);
    }, [updatedProducts])


    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20}} >
            {productsInCart.length > 0 && 
                <FlatList 
                    data={productsInCart}
                    renderItem={(product) => {
                            return(
                                <CartItem
                                    item = {product}
                                />
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                    style={[styles.productsWrapper, {height: height - 200}]}
                />
            }
            {productsInCart.length === 0 &&
                <View style={{height: height - 150, padding: 20}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Cart is empty.</Text>
                </View> 
            }
            <CheckoutButton productsInCart={productsInCart} />
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
import { View, StyleSheet, FlatList, useWindowDimensions, Text } from "react-native";
import { allProducts } from "../components/ProductList/AllProducts";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";


function Cart() {

    const {width, height} = useWindowDimensions();
    let productsInCart = useSelector(state => state.cartActions.cartItems);

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
                    style={[styles.productsWrapper, {height: height - 150}]}
                />
            }
            {productsInCart.length === 0 &&
                <View style={{height: height - 150, padding: 20}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Cart is empty.</Text>
                </View> 
            }
      </View>

    )
}

const styles = StyleSheet.create({
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 10,
        paddingBottom: 20,
        width: "100%",
    },
});

export default Cart;
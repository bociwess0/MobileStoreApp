import { FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CartItem from "./CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clearCart, toggleCartConfirm } from "../../redux/cartSlice";

function CartConfirm(props) {
    const {width, height} = useWindowDimensions();

    const navigation = useNavigation();

    const dispatch = useDispatch();

    function navigateToHome() {
        dispatch(clearCart())
        dispatch(toggleCartConfirm());
        navigation.navigate("Products");
    }

    return(
        <View style={{height: height - 150, padding: 20}}>
            <FlatList 
                    data={props.productsInCart}
                    renderItem={(product) => {
                            return(
                                <CartItem
                                    item = {product}
                                    showRemoveProductButton = {false}
                                />
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                    style={[styles.productsWrapper, {height: height - 200}]}
            />

            <Pressable style={styles.backButton} onPress={navigateToHome}>
                <Text style={{fontSize: 16, color: "#fff"}}>Back To Home Page</Text>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({
    productsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        borderColor: "#D12E8F",
        borderBottomColor: 1,
        width: "100%",
    },

    backButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        backgroundColor: "#E26730",
        width: "100%"
    },
});

export default CartConfirm;
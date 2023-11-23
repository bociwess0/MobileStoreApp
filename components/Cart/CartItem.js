import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";


function CartItem(props) {

    const dispatch = useDispatch();

    function removeFromCartHandler() {
        dispatch(removeFromCart({id: props.item.item.id}));
    }

    return(
        <View style={styles.productItemWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={props.item.item.images[1]} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title} >{props.item.item.title}</Text>
                <View style={styles.brandAndViewMore}>
                    <Text style={styles.brand} >{props.item.item.brand}</Text>
                </View>

                <View style={styles.priceAndQuantity}>
                    <Text style={{fontSize: 14, color:"#fff"}}>{`${props.item.item.price}€`}</Text>
                    <Text style={{fontSize: 14, color:"#fff"}}>{`Quantity: ${props.item.item.quantity}`}</Text>
                </View>
                {props.showRemoveProductButton && 
                <Pressable style={styles.removeFromCartButton} onPress={removeFromCartHandler}>
                        <Text style={{fontSize: 14, color: "#fff"}}>Remove From Cart</Text>
                </Pressable>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemWrapper: {
      display: "flex",
      flexDirection: "row",
      padding: 15,
      gap: 20,
      backgroundColor: "#0B003C",
      borderRadius: 20,
      marginBottom: 10
    },

    textWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    priceAndQuantity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }, 
    removeFromCartButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 30,
        backgroundColor: "#C93E4D",
        width: 150,
        marginTop: 10
    },

    imageWrapper: {
        padding: 10,
        backgroundColor: "#23194d",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        width: 100,
        height: 120,
        resizeMode: 'stretch',
        borderRadius: 10
    }, 
    title: {
        color: "#fff",
        fontSize: 16
    },
    
    brandAndViewMore: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    brand: {
        color: "#fff",
        fontSize: 14
    }

});

export default CartItem;
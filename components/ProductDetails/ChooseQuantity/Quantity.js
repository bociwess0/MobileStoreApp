import { View, Text, Pressable, StyleSheet } from "react-native";

function Quantity(props) {

    function increase() {
        props.onIncreaseQuantity();
    }
    
    function reduce() {
        props.onReduceQuantity();
    }

    return(
        <View style={styles.quantityContainer}>
            <Text style={{fontSize: 16, color: "#fff", marginRight: 20}}>Quantity:</Text>
            <View style={styles.productSizeWrapper}>
            <Pressable style={styles.quantityNumber}>
                <Text style={{fontSize: 16, color: "#fff"}} onPress={reduce}>−</Text>
            </Pressable>
            <Text style={{fontSize: 16, color: "#fff"}} >{props.quantityNumber}</Text>
            <Pressable style={styles.quantityNumber}>
                <Text style={{fontSize: 16, color: "#fff"}} onPress={increase}>+</Text>
            </Pressable>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    quantityContainer: {
        display: "flex",
        flexDirection: "row",
        height: 30,
        alignItems: "center",
    },

    productSizeWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(227, 104, 47, 0.5)",
        borderRadius: 20,
        borderColor: "rgba(227, 104, 47, 1)",
        borderWidth: 1,
        width: 120,
        height: 30,
        marginVertical: 10
    }, 
    quantityNumber: {
        width: 40,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Quantity;
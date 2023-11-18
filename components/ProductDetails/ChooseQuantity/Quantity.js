import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Quantity() {

    const [quantityNumber, setQuantityNumber] = useState(1);

    function increaseQuantityHandler() {
        if(quantityNumber < 10) {
            setQuantityNumber(quantityNumber + 1);
        }
    }
    
    function reduceQuantityHandler() {
        if(quantityNumber > 1) {
            setQuantityNumber(quantityNumber - 1)
        }
    }

    return(
        <View style={styles.quantityContainer}>
            <Text style={{fontSize: 16, color: "#fff", marginRight: 20}}>Quantity:</Text>
            <View style={styles.productSizeWrapper}>
            <Pressable style={styles.quantityNumber}>
                <Text style={{fontSize: 16, color: "#fff"}} onPress={reduceQuantityHandler}>−</Text>
            </Pressable>
            <Text style={{fontSize: 16, color: "#fff"}} >{quantityNumber.toString()}</Text>
            <Pressable style={styles.quantityNumber}>
                <Text style={{fontSize: 16, color: "#fff"}} onPress={increaseQuantityHandler}>+</Text>
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
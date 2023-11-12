import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";


function ProductItem(props) {
    return(
        <View style={styles.productItemWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={props.item.item.image} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title} >{props.item.item.title}</Text>
                <Text style={styles.brand} >{props.item.item.brand}</Text>
                <SelectDropdown 
                    data={props.item.item.colors}
                    defaultValue="Choose color"
                    buttonStyle={{backgroundColor: "rgba(211, 77, 68, 0.5)", borderColor: "#D34D44", borderWidth: 1, borderRadius: 20, maxHeight: 25, maxWidth: 100, marginTop: 15}}
                    buttonTextStyle={{fontSize: 12 ,color: "#fff"}}
                />
                <View style={styles.priceAndButton}>
                    <Text style={{fontSize: 14, color:"#fff"}}>{`${props.item.item.price}€`}</Text>
                    <Pressable style={styles.addToCartButton}>
                        <Text style={{fontSize: 14, color: "#fff"}}>Add To Cart</Text>
                    </Pressable>
                </View>
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
    priceAndButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 30,
        marginTop: 10
    }, 
    addToCartButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 30,
        backgroundColor: "#B4236C",
        width: 100
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
    brand: {
        color: "#fff",
        fontSize: 14
    }

});

export default ProductItem;
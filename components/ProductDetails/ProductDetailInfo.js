import { Image, StyleSheet, View, Text, Pressable, FlatList, ScrollView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Quantity from "./ChooseQuantity/Quantity";

function ProductDetailInfo(props) {

    const selectedItem = props.item;

    return(
        <View style={styles.detailInfoWrapper}>
            <View style={styles.titleAndFavorites}>
                <Text style={{fontSize: 26, lineHeight: 30, color: "#fff", marginTop: 3}}>{selectedItem.title}</Text>
                <Pressable>
                    <Image style={{width: 30, height: 30}} source={require("../../assets/Products/favorites_icon.png")} />
                </Pressable>
            </View>
            <View style={styles.brandAndColor}>
                <Text style={{fontSize: 16, color: "#fff", marginTop: 10}}>{selectedItem.brand}</Text>
                <SelectDropdown 
                        data={selectedItem.colors}
                        defaultValue="Choose color"
                        buttonStyle={{backgroundColor: "rgba(211, 77, 68, 0.5)", borderColor: "#D34D44", borderWidth: 1, borderRadius: 20, maxHeight: 25, maxWidth: 150, marginTop: 15}}
                        buttonTextStyle={{fontSize: 12 ,color: "#fff"}}
                    />
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={{fontSize: 16, color: "#fff", marginTop: 10, marginBottom: 5}}>Description</Text>
                <Text numberOfLines={3} ellipsizeMode="tail" style={{color: "#afb0ae", fontSize:14, marginBottom: 10}}>
                    {selectedItem.description}
                </Text>
                <Quantity />
            </View>
            <View style={styles.priceAndButton}>
                    <Text style={{fontSize: 26, color:"#fff"}}>{`${selectedItem.price}€`}</Text>
                    <Pressable style={styles.addToCartButton}>
                        <Text style={{fontSize: 20, color: "#fff"}}>Add To Cart</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailInfoWrapper: {
        width: "100%",
        height: "68%",
        backgroundColor: "#2c2354",
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
    },

    titleAndFavorites: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 0,
        height: 30
    },

    brandAndColor: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottomColor: "rgba(242, 240, 240, 0.7)",
        borderBottomWidth: 1,
        paddingBottom: 10
    },

    descriptionWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingBottom: 10
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
        height: 40,
        backgroundColor: "#B4236C",
        width: 200
    },
    
})

export default ProductDetailInfo;
import { Image, StyleSheet, View, Text, Pressable, FlatList, ScrollView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Quantity from "./ChooseQuantity/Quantity";
import AddToCartButton from "../ProductList/AddToCartButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import FavoritesButton from "./LoggedUsersOnly/FavoritesButton";
import AvgRating from "./Rate/AvgRating";
import RateButton from "./Rate/RateButton";
import CommentForm from "./Comments/CommentForm";
import AvailabilityInStores from "./Stores/AvailabilityInStores";

function ProductDetailInfo(props) {

    const selectedItem = props.item;

    const selectedItemKey = props.itemKey;
    const userLoggedIn = useSelector(state => state.profileActions.userLoggedIn);
    const [selectedColor, setSelectedColor] = useState('');

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
        <ScrollView style={styles.detailInfoWrapper}>
            <View style={styles.titleAndFavorites}>
                <Text style={{fontSize: 26, lineHeight: 30, color: "#fff", marginTop: 3}}>{selectedItem.title}</Text>
                <AvgRating avgRating={selectedItem.avgRating} />
                {userLoggedIn && <FavoritesButton product={selectedItem} />}
            </View>
            <View style={styles.brandAndColor}>
                <Text style={{fontSize: 16, color: "#fff", marginTop: 10}}>{selectedItem.brand}</Text>
                <SelectDropdown 
                        data={selectedItem.colors}
                        defaultButtonText="Choose color"
                        buttonStyle={{backgroundColor: "rgba(211, 77, 68, 0.5)", borderColor: "#D34D44", borderWidth: 1, borderRadius: 20, maxHeight: 30, maxWidth: 120, marginTop: 15}}
                        buttonTextStyle={{fontSize: 13 ,color: "#fff"}}
                        onSelect={(selectedItem, index) => {
                            setSelectedColor(selectedItem)
                        }}
                    />
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={{fontSize: 16, color: "#fff", marginTop: 10, marginBottom: 5}}>Description</Text>
                <Text numberOfLines={3} ellipsizeMode="tail" style={{color: "#afb0ae", fontSize:14, marginBottom: 10}}>
                    {selectedItem.description}
                </Text>
                <View style={styles.quantityAndRate}>
                    <Quantity 
                        quantityNumber = {quantityNumber} 
                        onIncreaseQuantity={increaseQuantityHandler} 
                        onReduceQuantity={reduceQuantityHandler}
                    />
                    {userLoggedIn && <RateButton product={selectedItem} productKey={selectedItemKey} />}
                </View>
            </View>
            <View style={styles.priceAndButton}>
                    <Text style={{fontSize: 26, color:"#fff"}}>{`${selectedItem.price}€`}</Text>
                    <AddToCartButton 
                        item={selectedItem}
                        quantityNumber={quantityNumber}
                        color={selectedColor}  
                        productDetailPage={true}
                    />
            </View>
            <AvailabilityInStores stores={selectedItem.stores} />
            <CommentForm selectedItemKey={selectedItemKey}/>
        </ScrollView>
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
    quantityAndRate: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
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
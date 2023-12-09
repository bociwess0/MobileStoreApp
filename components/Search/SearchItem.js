import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch } from "react-redux";
import { hideSearch } from "../../redux/searchSlice";


function SearchItem(props) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    function handleNavigation() {
        dispatch(hideSearch())
        navigation.navigate("ProductDetails", {
            selectedItem: props.item.item
        })
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
                    <Pressable style={styles.viewMore} onPress={handleNavigation} >
                        <Text style={{fontSize: 14, color: "#944AD4"}}>View More</Text>
                    </Pressable>
                </View>
                <View style={styles.priceAndButton}>
                    <Text style={{fontSize: 14, color:"#fff"}}>{`${props.item.item.price}€`}</Text>
                
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
    
    brandAndViewMore: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 160
    },
    
    brand: {
        color: "#fff",
        fontSize: 14
    }

});

export default SearchItem;
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import FavoriteProductItem from "../Tabs/Favorites/FavoriteProductItem";
import { useSelector } from "react-redux";


function Favorites() {

    const {width, height} = useWindowDimensions();

    const loggedUser = useSelector(state => state.profileActions.loggedUser);

    return(
        <View style={{backgroundColor: "#100156", padding: 20, width: width, height: "100%"}} >
            <Text style={{fontSize: 16, color: "#fff", marginBottom: 20}}>Hi {loggedUser.firstName}, these are your favorite products: </Text>
            {/* <FlatList 
                data={products}
                renderItem={(product) => {
                        return(
                            <FavoriteProductItem
                                item = {product}
                                navigation = {navigation}
                            />
                        )
                    }
                }
                keyExtractor={item => item.id}
                style={[styles.productsWrapper, {height: height - 120}]}
            /> */}
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

export default Favorites;
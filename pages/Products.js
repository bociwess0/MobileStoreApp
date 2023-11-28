import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import ProductItem from "../components/ProductList/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleCartConfirm } from "../redux/cartSlice";
import HeaderNavigation from "../Layout/Header";



function Products({navigation}) {

    const products = useSelector(state => state.productsActions.products)

    const {width, height} = useWindowDimensions();


    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20}} >
            <HeaderNavigation />
            <FlatList 
                data={products}
                renderItem={(product) => {
                        return(
                            <ProductItem
                                item = {product}
                                navigation = {navigation}
                            />
                        )
                    }
                }
                keyExtractor={item => item.id}
                style={[styles.productsWrapper, {height: height - 120}]}
            />
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

export default Products;
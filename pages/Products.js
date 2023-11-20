import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import ProductItem from "../components/ProductList/ProductItem";
import { allProducts } from "../components/ProductList/AllProducts";


const products = allProducts


function Products({navigation}) {

    const {width, height} = useWindowDimensions();

    return(
        <View style={{backgroundColor: "#100156", paddingBottom: 20}} >
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
                style={[styles.productsWrapper, {height: height - 150}]}
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